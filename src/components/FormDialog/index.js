import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Toast from '../Alert';

export default function FormDialog({
  isOpen,
  setIsOpen,
}) {

    useEffect(() => {
        console.log('localStorage', window.localStorage.getItem('post'))
        console.log(
          'localStorage parsed',
          JSON.parse(
            window.localStorage.getItem('post')
          )
        );
    }, [])

  const [payload, setPayload] = useState({
      title: '',
      content: '',
      author: window.sessionStorage.getItem('token'),
      status: 0,
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const onChangePayload = (e, type) => {
      setPayload({
          ...payload,
          [type]: e.target.value
      })
  }

  const submitPayload = () => {
      const oldPost = JSON.parse(
        window.localStorage.getItem('post')
      ) || [];

      let arr = oldPost.length ? [
          ...oldPost,
      ] : []

      arr.push(payload)

      window.localStorage.setItem('post', JSON.stringify(arr))
      Toast.fire({
          icon: 'success',
          title: 'berhasil buat postingan'
      })

      setIsOpen(false)
      setPayload({
          ...payload,
          title: '',
          content: '',
      })
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
      >
        <DialogTitle>Buat Postingan</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Judul'
            type='text'
            value={payload?.title}
            onChange={(e) =>
              onChangePayload(e, 'title')
            }
            fullWidth
            variant='standard'
          />
          <TextField
            autoFocus
            margin='dense'
            id='name'
            label='Konten'
            type='text'
            value={payload.content}
            onChange={(e) =>
              onChangePayload(e, 'content')
            }
            fullWidth
            variant='standard'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={() => submitPayload()}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
