import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ActividadesPage from './pages/ActividadesPage';
import RopaPage from './pages/RopaPage';
import LifestylePage from './pages/LifestylePage';
import ContactoPage from './pages/ContactoPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="actividades" element={<ActividadesPage />} />
        <Route path="ropa" element={<RopaPage />} />
        <Route path="lifestyle" element={<LifestylePage />} />
        <Route path="contacto" element={<ContactoPage />} />
      </Route>
    </Routes>
  );
}
