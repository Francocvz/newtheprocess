import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <HomePage />
    </Router>
  );
}

export default App;
