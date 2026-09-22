import useThemeContext from "../Hooks/Theme Context/useThemeContext";
function App() {
const {theme,setTheme}=useThemeContext();
  return (
   <div>
    Hello {theme}
   </div>
  );
}

export default App;
