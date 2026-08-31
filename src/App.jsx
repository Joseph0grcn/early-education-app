import { Navigate, Route, Routes } from 'react-router-dom';
import ActivityPage from './pages/ActivityPage.jsx';
import Home from './pages/Home.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:slug" element={<ActivityPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
