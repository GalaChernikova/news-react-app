import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main/Main";
import Nav from "./Nav/Nav";
import General from "./News/General/General";
import Business from "./News/Business/Business";
import Entertainment from "./News/Entertainment/Entertainment";
import Health from "./News/Health/Health";
import Sports from "./News/Sports/Sports";
import Technology from "./News/Technology/Technology";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path="*" element={<Main />}/>
        <Route path="/news/general" element={<General />} />
        <Route path="/news/business" element={<Business />} />
        <Route path="/news/entertainment" element={<Entertainment />} />
        <Route path="/news/health" element={<Health />} />
        <Route path="/news/sports" element={<Sports />} />
        <Route path="/news/technology" element={<Technology />} />        
      </Routes>
    </div>
  );
}
export default App;
