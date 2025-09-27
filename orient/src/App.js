import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard/dashboard';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/signup';
import AiAdvice from './pages/Services/AiAdvice';
import NotFound from './pages/notfound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ai-advice" element={<AiAdvice />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
