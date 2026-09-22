import useThemeContext from "../Hooks/Theme Context/useThemeContext";
function App() {
const {theme,setTheme}=useThemeContext();
  return (
   <div className={`min-h-screen ${theme === "light" ? "bg-white text-black" : "bg-black text-white"}`}>
    Hello {theme}
    <button
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={`w-14 h-8 flex items-center rounded-full p-1 transition-colors ${
        theme === "dark" ? "bg-gray-800" : "bg-yellow-300"
      }`}
    >
      <span
        className={`w-6 h-6 bg-white rounded-full shadow transform transition-transform ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
   </div>
  );
}

export default App;
