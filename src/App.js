import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Countries from "./components/Countries"
import Country from "./components/Country";
import Header from "./components/Header";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Countries />}></Route>
        <Route path="/:name" element={<Country />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
