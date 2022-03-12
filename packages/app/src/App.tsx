import { ChakraProvider } from '@chakra-ui/react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Layout from './components/Layout';
import { setupInterceptors } from './configs/axios-configs';
import { useCurrentUser } from './hooks/useCurrentUser';
import Appointments from './pages/appointments';
import LoginPage from './pages/login';

function App() {
  setupInterceptors();

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<AuthenticatedRoute />}>
            <Route path="/" element={<NavigateToAppointments />} />
            <Route path="/appointments/:userId" element={<Appointments />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ChakraProvider>
  );
}

function AuthenticatedRoute() {
  const { isLoggedIn } = useCurrentUser();

  return isLoggedIn ? (
    <Layout>
      <Outlet />
    </Layout>
  ) : (
    <Navigate to="/login" replace />
  );
}

function NavigateToAppointments() {
  const { currentUser } = useCurrentUser();

  return (
    <Navigate to={currentUser ? `/appointments/${currentUser.id}` : '/login'} />
  );
}

export default App;
