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

  return (
    <Fragment>
      {stateData.isLoading && <Loading />}
      <div className='App'>
        <header className='App-header'>
          <p>
            Home{' '}
            {window.sessionStorage.getItem(
              'token'
            ) &&
              `, welcome ${window.sessionStorage.getItem(
                'token'
              )}`}
          </p>

          <AlignItemsList isAdmin={false} />
        </header>
      </div>
    </Fragment>
  );
}

export default Home;
