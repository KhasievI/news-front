import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import SideBar from "./SideBar";
import News from "./News";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<HomePage />} />
          <Route path="/news/:newsId" element={<News />} />
        </Routes>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
