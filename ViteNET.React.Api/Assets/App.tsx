import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { TestComponent } from './components/TestComponent'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <header>
        <NavBar />
      </header>
      <main className='flex flex-1 flex-col pb-2 lg:px-2'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/test' element={<TestComponent />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
