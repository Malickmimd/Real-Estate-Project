import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import  { useLocation } from 'react-router-dom'


function App() {
  const location = useLocation()
  return (
    <div>
        <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Landing/>} />
        </Routes>
    </div>  
  )
}

export default App
