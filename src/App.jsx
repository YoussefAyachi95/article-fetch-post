import "./App.css";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { About, Contact, Home, Article, SendArticle } from "./pages/index";
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles/:id" element={<Article />} />
        <Route path="/send" element={<SendArticle />} />
        <Route path="/*" element={<Navigate to="/" />} />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
