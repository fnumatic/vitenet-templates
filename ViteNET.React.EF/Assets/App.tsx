import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { UsersComponent } from './components/UsersComponent'
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
          <Route path='/users' element={<UsersComponent />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App
