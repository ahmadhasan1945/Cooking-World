import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// page components
import Navbar from './components/Navbar'
import Create from './pages/create/create'
import Home from './pages/home/home'
import Recipe from './pages/recipe/recipe'
import Search from './pages/search/search'
import ThemeSelector from './components/ThemeSelector'
import {useTheme} from './hooks/useTheme'

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
