import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import CreateCV from './pages/CreateCV';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import {store} from './redux/store.js'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Experience' element={<Experience/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/create' element={<CreateCV/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
        </Routes>
        
        <Footer />
      </Router>
      </Provider>
    </div>
  );
}

export default App;
