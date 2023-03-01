import "../App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import SideBar from "./SideBar";
import News from "./News";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="wrapper">
        <SideBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/news/:newsId" element={<News />}/>
        </Routes>
      </div>
      <footer>

      </footer>
    </div>
  );
}

export default App;
