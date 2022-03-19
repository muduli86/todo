import NavBar from "./components/NavBar/NavBar.jsx";
import Home from "./components/Home/Home.js";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <div className='App'>
        <NavBar />
        <Home />
      </div>
    </>
  );
}

export default App;
