export default function Header() {
  return (
    <header>
      <div className="bg-purple-600 px-2 py-1 flex items-center justify-between border-b-2 border-black">
        <p className="text-white text-xs font-bold uppercase tracking-wide">guias-maneiros.exe</p>
        <div className="flex gap-1">
          <span className="w-3 h-3 bg-yellow-300 border border-black"></span>
          <span className="w-3 h-3 bg-red-500 border border-black"></span>
        </div>
      </div>
      <div className="bg-indigo-800 px-4 py-6">
        <p className="text-6xl text-white tracking-wide">guias maneiros</p>
      </div>
    </header>
  );
}