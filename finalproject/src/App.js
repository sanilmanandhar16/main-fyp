import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import Contact from './components/Contact';
import Signup from './components/Signup'
import About from './components/About'
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" component={Home} exact>
          <Home />
        </Route>

        <Route path="/contact" component={Contact} exact>
          <Contact />
        </Route>

        <Route path="/about" component={About} exact>
          <About />
        </Route>

        <Route path="/signup" component={Signup} exact>
          <Signup />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
