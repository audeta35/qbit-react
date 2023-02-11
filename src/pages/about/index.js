import {
  useDispatch,
  useSelector,
} from 'react-redux';
import { Fragment, useEffect } from 'react';
import Loading from '../../components/loading';
import { SetIsLoadingState } from '../../redux/actions/app';
import Iframe from 'react-iframe';

function About() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);

  return (
    <Fragment>
      {stateData.isLoading && <Loading />}
      <Iframe
        url='https://d3taport.web.app/'
        width={'100%'}
        height={'720'}
        id=''
        className=''
        display='block'
        position='relative'
      />
      <div className='App'>
        <header className='App-header'>
          <p>About</p>
        </header>
      </div>
    </Fragment>
  );
}

export default About;
