import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
//redux
import { Provider } from 'react-redux'
import store from './store';
import { loadUser } from './actions/auth';
import { useEffect } from 'react';
import setAuthToken from './utils/setAuthToken';

if(localStorage.token){
  setAuthToken(localStorage.token)
}

const App = ()=> {
  
  useEffect(()=>{   
    store.dispatch(loadUser())
  },[])

  return (
  <Provider store={store}>
    <Router>
      <>
        <Navbar/>
        <section className='container'>
          <Alert/>
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
        </section>
      </>
    </Router>
  </Provider>
)}

export default App;
