import './assets/css/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import HorizontalNav from './components/layout/HorizontalNav';
import VerticalNav from './components/layout/VerticalNav';
import Dashboard from './components/Dashboard';
import ErrorPage from './components/ErrorPage';

const DEFAULT_USER_ID = import.meta.env.VITE_DEFAULT_USER_ID;

const App = () => {
  return (
    <>
      <HorizontalNav />
      <section className='dashboard-container'>
        <VerticalNav />
        <Routes>
          <Route path='/' element={<Navigate to={`/user/${DEFAULT_USER_ID}`} replace />} />
          <Route path='/user/:userId' element={<Dashboard />} />
          <Route path='/error/:errorType' element={<ErrorPage />} />
          <Route path='*' element={<ErrorPage errorType='NOT_FOUND' />} />
        </Routes>
      </section>
    </>
  );
};

export default App;