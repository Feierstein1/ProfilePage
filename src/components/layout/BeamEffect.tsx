export default function BeamEffect() {
  return (
      <div className="absolute top-3/6 h-[0.1vh] w-5/6
                      bg-gradient-to-r from-pink-600 via-pink-600 via-pink-500 via-pink-400 via-pink-400 to-white
                      dark:bg-gradient-to-r from-pink-600 via-pink-600 via-pink-500 via-pink-400 via-50% via-pink-400 via-75% to-black
                      blur-sm opacity-95 animate-beam">
      </div>
  );
}
