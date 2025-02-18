"use client";

import { useState } from "react";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

interface Phonetic {
  text?: string;
  audio?: string;
}

interface Definition {
  definition: string;
  example?: string;
  synonyms?: string[];
  antonyms?: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
}

interface DictionaryEntry {
  word: string;
  phonetics?: Phonetic[];
  meanings: Meaning[];
  sourceUrls?: string[];
}

interface DictionaryErrorResponse {
  title: string;
  message: string;
  resolution?: string;
}

type DictionaryResponse = DictionaryEntry[] | DictionaryErrorResponse;

const isErrorResponse = (data: any): data is DictionaryErrorResponse => {
  return "title" in data && "message" in data;
};

export default function Dictionary() {
  const [word, setWord] = useState<string>("");
  const [wordData, setWordData] = useState<DictionaryEntry | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [audio, setAudio] = useState<string | null>(null);

  const getSoundUrl = (phonetics?: Phonetic[]): string | null => {
    return phonetics?.find((p) => p.audio)?.audio || null;
  };

  const fetchWordData = async (word: string): Promise<boolean> => {
    try {
      setError(null);
      const response = await fetch(`${API_URL}${word}`);
      const data: DictionaryResponse = await response.json();

      if (!response.ok || isErrorResponse(data)) {
        setError("Sorry, this word could not be found");
        return false;
      }

      setWord(word);
      setWordData(data[0]); // Since API returns an array of DictionaryEntry
      setAudio(getSoundUrl(data[0].phonetics));
      return true;
    } catch {
      setError("Sorry, this word could not be found");
      return false;
    }
  };

  return (
    <div>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button onClick={() => fetchWordData(word)}>Search</button>
      {error && <p>{error}</p>}
      {wordData && (
        <div>
          <h2>{wordData.word}</h2>
          {wordData.phonetics?.map((phonetic, index) => (
            <p key={index}>{phonetic.text}</p>
          ))}
          {audio && <audio controls src={audio} />}
          {wordData.meanings.map((meaning, index) => (
            <div key={index}>
              <h3>{meaning.partOfSpeech}</h3>
              {meaning.definitions.map((def, defIndex) => (
                <p key={defIndex}>{def.definition}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
