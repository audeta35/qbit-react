import { Fragment, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import Loading from './components/loading';
import { SetIsLoadingState } from './redux/actions/app';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  Routes,
  Navigate,
} from 'react-router-dom';

import Home from './pages/home';
import Posting from './pages/posting';
import About from './pages/about';
import Login from './pages/login';
import MenuItems from './components/menu';
import { Container } from '@mui/system';
import Toast from './components/Alert';

function App() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);

  useEffect(() => {
    setTimeout(() => {
      dispatch(SetIsLoadingState(false));
    }, 500);
  }, []);

  const ProtectedRoute = ({ children }) => {
    const token =
      window.sessionStorage.getItem('token');

    if (!token) {

      Toast.fire({
        icon: 'error',
        title: 'harus login terlebih dahulu',
      });

      return (
        <Navigate
          to='/'
          replace
        />
      );
    }

    return children;
  };

  return (
    <Fragment>
      {stateData.isLoading && <Loading />}
        <Router>
          <MenuItems />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/about'
              element={<About />}
            />
            <Route
              path='/posting'
              element={
                <ProtectedRoute>
                  <Posting />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
    </Fragment>
  );
}

export default App;
