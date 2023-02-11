import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Fragment, useEffect } from 'react';
import Loading from '../../components/loading';
import { SetIsLoadingState } from '../../redux/actions/app';
import { Button } from '@mui/material';
import UsernameGenerator from 'username-generator'
function Login() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);

  useEffect(() => {
    // console.log('stateData', stateData);
    setTimeout(() => {
      dispatch(SetIsLoadingState(false));
    }, 500);
  }, []);

  const setToken = () => {
    // console.log(
    //   'UsernameGenerator',
    //   UsernameGenerator.generateUsername()
    // );
    window.sessionStorage.setItem('token', generateUsername())
  }

  return (
    <Fragment>
      {stateData.isLoading && <Loading />}
      <div className='App'>
        <header className='App-header'>
          <Button
            variant='contained'
            onClick={() => setToken()}
          >
            Login
          </Button>
        </header>
      </div>
    </Fragment>
  );
}

export default Login;
