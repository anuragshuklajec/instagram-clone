import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import HomePage from "./pages/HomePage";
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/home" element={<HomePage/>}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
