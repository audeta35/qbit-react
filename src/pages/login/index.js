import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Fragment, useEffect } from 'react';
import Loading from '../../components/loading';
import { SetIsLoadingState } from '../../redux/actions/app';
import { Button } from '@mui/material';
import UsernameGenerator from 'username-generator';
import Toast from '../../components/Alert';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);

  const setToken = () => {
    // console.log(
    //   'UsernameGenerator',
    //   UsernameGenerator.generateUsername()
    // );
    dispatch(SetIsLoadingState(true));
    window.sessionStorage.setItem(
      'token',
      UsernameGenerator.generateUsername()
    );

    setTimeout(() => {
      Toast.fire({
        icon: 'success',
        title: `Selamat Datang ${window.sessionStorage.getItem(
          'token'
        )}`,
      });
      dispatch(SetIsLoadingState(false));
      navigate('/');
    }, 500);
  };

  return (
    <Fragment>
      {stateData.isLoading && <Loading />}
      <div className='App'>
        <header className='App-header'>
          <Button
            variant='contained'
            onClick={() => setToken()}
            size="large"
          >
            Login
          </Button>
        </header>
      </div>
    </Fragment>
  );
}

export default Login;
