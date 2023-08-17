import './App.css';
import Home from './components/Home';
import VideoDetail from './components/VideoDetail';
import SearchResults from './components/SearchResults';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos/:videoID' element={<VideoDetail />} />
          <Route path='/search' element={<SearchResults />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
