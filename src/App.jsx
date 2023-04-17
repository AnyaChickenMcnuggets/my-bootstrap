import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import Favourites from './components/Favourites';
import About from './components/About';
import Form from './components/Form';


function App() {
  return (
    
      <div>
        
        <Router>
          <Header></Header>    
          <Routes>
            <Route path='/favourites' element={
                <Favourites/>
            }/>

            <Route path='/' element={
                <Home/>
            }/>

            <Route path='/about' element={
                <About/>
            }/>

            <Route path='/form' element={
                <Form/>
            }/>
          </Routes>
        </Router>
        <Footer></Footer>
      </div>   
      
  );
}

export default App;
