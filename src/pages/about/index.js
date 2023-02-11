import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Fragment, useEffect } from 'react';
import Loading from '../../components/loading';
import { SetIsLoadingState } from '../../redux/actions/app';

function About() {
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
          <p>About</p>
        </header>
      </div>
    </Fragment>
  );
}

export default About;
