import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.js";
import { CssBaseline } from "@mui/material";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./styles/Styles";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="App">
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
