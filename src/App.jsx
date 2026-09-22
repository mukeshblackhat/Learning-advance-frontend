import { useThemeContext } from "../Hooks/Theme Context/useThemeContext"
import { ThemeProvider } from "../Hooks/Theme Context/ThemeProvider";
function App() {
  const {theme,setTheme} = useThemeContext();
  return (
    <div>
      <h1>Hello World</h1>
      <div>
       <div>
       a
       </div>
<div>
b
</div>
<div>
  {theme}
</div>
      </div>
      <h2>{theme}</h2>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} type={ToggleEvent}>theme toggle</button>
    </div>
  );
}

export default App;
