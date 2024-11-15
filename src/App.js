import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Portfolio/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;