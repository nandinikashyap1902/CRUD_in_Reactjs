import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Create from './Create';
import Update from './Update';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/update" element={<Update/>}/>
        </Routes>
      </Router>
</div>
  );
}

export default App;
