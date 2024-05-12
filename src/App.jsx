import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import  { useLocation } from 'react-router-dom'
import Home from './pages/Home'


function App() {
  const location = useLocation()
  return (
    <div>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Landing/>} />
          <Route path='/accueil' element={<Home/>} >
          </Route>
        </Routes>
    </div>  
  )
}

export default App
