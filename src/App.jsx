import './App.scss'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/home'
import CharacterCard from './pages/card'

function App() {

  return (
    <>
      <Link to="/" className='text-decoration-none'><h1 className='mb-4'>Rick and Morty</h1></Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path={`/card/:id`} element={<CharacterCard />} />
        <Route path='*' element={
          <Link 
            className='btn btn-primary fs-5 col-4 m-auto' 
            to="/">Volver</Link>
          } />
      </Routes>
    </>
  )
}

export default App
