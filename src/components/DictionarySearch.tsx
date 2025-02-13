"use client";

import { useState, useEffect } from "react";
import words from "./words";
import { HiSpeakerWave } from "react-icons/hi2";

const API_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export default function DictionarySearch() {
    const [searchWord, setSearchWord] = useState("");
    const [word, setWord] = useState("");
    const [wordData, setWordData] = useState(null);
    const [audio, setAudio] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRandomWord();
    }, []);

    const fetchRandomWord = async () => {
        for (let i = 0; i < 10; i++) {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            const success = await fetchWordData(randomWord);
            if (success) return;
        }
    };

    const fetchWordData = async (word) => {
        try {
            setError(null);
            const response = await fetch(`${API_URL}${word}`);
            if (!response.ok) throw new Error();
            const data = await response.json();
            setWord(word);
            setWordData(data[0]);
            console.log("Fetched Data: ", data[0])
            setAudio(getSoundUrl(data[0].phonetics));
            return true;
        } catch {
            setError("Sorry, this word could not be found");
            return false;
        }
    };

    const getSoundUrl = (phonetics) => {
        const sound = phonetics.find((p) => p.audio?.length > 0);
        return sound ? sound.audio : "";
    };

    return (
        <>
            <h1 className="pt-6 text-xl">Dictionary API Search</h1>
            <div id="body" className="flex justify-center p-4">
                <div id="container" className="w-full sm:w-4/5 max-w-[800px] min-w-[33vw] p-4 text-left bg-gray-100 dark:bg-gray-900 full-border">
                    <WordDisplay word={word} audio={audio} />
                    {wordData?.phonetic && <h2 className="pt-2 pl-4">{`(${wordData?.phonetic})`}</h2>}
                    <SearchForm searchWord={searchWord} setSearchWord={setSearchWord} fetchWordData={fetchWordData} error={error} />
                    {wordData?.meanings?.length > 0 && (
                        wordData.meanings.map((d, i) => (
                            <div key={i}>
                                <h2 className="pt-2 text-2xl tracking-widest text-blue-800 border-b border-black dark:border-white dark:text-blue-400">
                                    {d.partOfSpeech}
                                </h2>
                                <DictionaryInfoList title="Definition" array={d.definitions} keyField="definition" type="list" />
                            </div>
                        ))
                    )}
                    {wordData?.meanings?.[0]?.antonyms?.length > 0 && <DictionaryInfoList title="Antonyms" array={wordData.meanings[0].antonyms} />}
                    {wordData?.meanings?.[0]?.synonyms?.length > 0 && <DictionaryInfoList title="Synonyms" array={wordData.meanings[0].synonyms} />}
                </div>
            </div>
        </>
    );
}

const WordDisplay = ({ word, audio }) => (
    <div id="top-row" className="flex flex-wrap justify-between gap-y-2">
        <div className="flex items-center gap-x-2">
            <h1 className="p-2 text-3xl tracking-widest text-blue-800 bg-gray-300 rounded-xl dark:bg-gray-800 dark:text-blue-400">
                <b>{word}</b>
            </h1>
            {audio && <AudioButton audioUrl={audio} />}
        </div>
    </div>
);

const AudioButton = ({ audioUrl }) => {
    const playAudio = () => {
        if (!audioUrl) {
            alert("Audio not available for this word.");
            return;
        }
        new Audio(audioUrl).play();
    };

    return (
        <button onClick={playAudio} className="flex items-center mt-2 text-lg">
            <HiSpeakerWave className="text-2xl text-blue-800 cursor-pointer hover:text-blue-600 dark:text-blue-400 dark:hover:text-white" />
        </button>
    );
};

const SearchForm = ({ searchWord, setSearchWord, fetchWordData, error }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchWord.trim()) return;
        fetchWordData(searchWord);
    };

    return (
        <div className="flex flex-col w-full sm:w-auto">
            <form onSubmit={handleSubmit} className="flex gap-2 pt-4 mb-2">
                <input
                    type="text"
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                    placeholder="Enter a word..."
                    className="w-full p-2 border rounded-md sm:w-auto"
                />
                <button type="submit" className="p-2 text-white bg-blue-500 rounded-md">
                    Search
                </button>
            </form>
            <div className="text-red-500 min-h-6">{error && <h3>{error}</h3>}</div>
        </div>
    );
};

const DictionaryInfoList = ({ title, array, keyField = null, type = null, color = "bg-blue-500" }) => (
    <div className="pt-4">
        <h2 className="flex text-xl tracking-widest text-blue-800 dark:text-blue-400">{title}</h2>
        {type === "list" ? (
            <ol className="pl-6 mt-2 list-none list-outside dark:text-gray-300">
                {array.map((a, i) => (
                    <li className="pb-4 relative pl-6 before:absolute before:left-0 before:top-1 before:text-blue-500 before:content-['\2726']" key={i}>
                        {keyField == null ? a : a[keyField]}
                    </li>
                ))}
            </ol>
        ) : (
            <div className="flex flex-wrap gap-2 mt-3">
                {array.map((a, i) => (
                    <span key={i} className={`${color} text-white text-sm px-3 py-1 rounded-full`}>
                        {keyField == null ? a : a[keyField]}
                    </span>
                ))}
            </div>
        )}
    </div>
);
