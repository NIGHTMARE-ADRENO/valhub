import { UserProvider } from './components/usercontext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}
export default App;