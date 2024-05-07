import logo from './logo.svg';
// import './App.css';
import Navigation from './customer/components/navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage';
import Footer from './customer/components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <HomePage> </HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
