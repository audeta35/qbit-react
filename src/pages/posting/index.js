import {
  useDispatch,
  useSelector,
} from 'react-redux';
import {
  Fragment,
  useEffect,
  useState,
} from 'react';
import Loading from '../../components/loading';
import { SetIsLoadingState } from '../../redux/actions/app';
import AlignItemsList from '../../components/list';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
} from '@mui/material';
import FormDialog from '../../components/FormDialog';

function Posting() {
  const dispatch = useDispatch();
  const stateData = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      {stateData.isLoading && <Loading />}
      <div className='App'>
        <header className='App-header'>
          <p>Posting</p>
          <Button
            className='mb-3'
            variant='contained'
            onClick={() => setIsOpen(true)}
          >
            Buat Postingan
          </Button>
          <FormDialog isOpen={isOpen} setIsOpen={(open) => setIsOpen(open)}/>
          <AlignItemsList isAdmin={true} />
        </header>
      </div>
    </Fragment>
  );
}

export default Posting;
