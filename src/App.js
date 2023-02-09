import './App.css';
import Article from './component/Article';
import Header from './component/Header';
import Hero from './component/Hero';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Article/>
     <Footer/>
    </div>
  );
}

export default App;
