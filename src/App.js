import './App.css';
import Card from './Pages/Hero/Card';
import Carousel from './Pages/Hero/Carousel';
import Home from './Pages/Hero/Home';
import Home2 from './Pages/Hero/Home2';
import Home3 from './Pages/Hero/Home3';
import Navbar from './Pages/Shares/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Home2></Home2>
      <Home3></Home3>
      <Card></Card>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
