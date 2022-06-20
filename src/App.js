import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Products from "./routes/Products";
import Contact from "./routes/Contact";
import Error from "./routes/Error";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
