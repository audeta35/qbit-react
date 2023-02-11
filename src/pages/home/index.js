import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Fragment, useEffect } from 'react';
import Loading from '../../components/loading';
import { SetIsLoadingState } from '../../redux/actions/app';
import AlignItemsList from '../../components/list';
import { Paper } from '@mui/material';

function Home() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);

  useEffect(() => {
    console.log('stateData', stateData);
    setTimeout(() => {
      dispatch(SetIsLoadingState(false));
    }, 500);
  }, []);

  return (
    <Fragment>
      {stateData.isLoading && <Loading />}
      <div className='App'>
        <header className='App-header'>
          <p>Home</p>
            
            <AlignItemsList />
        </header>
      </div>
    </Fragment>
  );
}

export default Home;
