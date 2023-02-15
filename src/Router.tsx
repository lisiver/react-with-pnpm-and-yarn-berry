import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;