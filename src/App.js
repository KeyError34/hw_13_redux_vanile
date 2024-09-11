import FilterPage from "./pages/filterPage";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="App">
      <Link to="/filter">FilterPage</Link>
     
      <Routes>
       
        <Route path="/filter" element={<FilterPage />} />
      </Routes>
    </div>
  );
}

export default App;
