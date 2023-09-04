const NavBar = () => {
  return (
    <nav className="w-full flex items-center justify-center font-bold">
      <button className="w-24 p-4 border-2 border-black">Overview</button>
      <button className="w-24 p-4 border-2 border-black bg-yellow-300 text-black">
        General
      </button>
      <button className="w-24 p-4 border-2 border-black">ARS</button>
      <button className="w-24 p-4 border-2 border-black">FUL</button>
      <button className="w-24 p-4 border-2 border-black">Player</button>
    </nav>
  );
};

export default NavBar;
