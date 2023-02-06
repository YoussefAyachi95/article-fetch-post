import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { About, Contact, Home, Article, SendArticle } from "./pages/index";
import Navbar from './components/Navbar'
import { useTheme } from "./hooks/useTheme";
import ThemeSelector from './components/ThemeSelector'
import "./App.css";

function App() {
  const { mode } = useTheme();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <ThemeSelector/>
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
