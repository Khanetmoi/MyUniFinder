import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/dashboard';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/signup';
import AiAdvice from './pages/Services/AiAdvice';
import NotFound from './pages/notfound';

import { AuthProvider} from './context/AuthContext';
import { UIProvider } from './context/UIContext';

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ai-advice" element={<AiAdvice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UIProvider>
    </AuthProvider>
  );
}

export default App;


