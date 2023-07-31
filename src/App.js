
import './App.css';
import GetMovies from './components/GetMovies';
import Navigation from './components/Navigation';
import MovieCategory from './components/MovieCategory/categoryFilter';
import Slider from './components/carousel';
function App() {
  return (
    <div>
       <Navigation/>
       <Slider/>
      <GetMovies/>


   
    </div>
  );
}

export default App;
