import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Switch } from '@mui/material';
import Toast from '../Alert';
import { useNavigate } from 'react-router-dom';

export default function AlignItemsList({ isAdmin }) {
  const navigate = useNavigate()
  let dataPost = JSON.parse(
    window.localStorage.getItem('post')
  ) || [];

  const setStatus = (item, type) => {
    let getItem = dataPost.find(row => row === item);
    getItem.status = type;
    
    window.localStorage.setItem(
      'post',
      JSON.stringify(dataPost)
    );
    Toast.fire({
      icon: 'success',
      title: `postingan ${type === 0 ? 'di simpan ke draft' : 'telah aktif'}`
    })
    navigate('/posting')
  }
  // console.log('isAdmin', isAdmin);
  return (
    <List
      sx={{
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
    >
      <ListItem alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography color='text.primary'>
              Test {` `}
              {isAdmin && (
                <button className='badge bg-success disabled' disabled>
                  Aktif
                </button>
              )}
            </Typography>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component='span'
                variant='body2'
                color='text.primary'
              >
                Audeta Sandy
              </Typography>
              {
                " — I'll be in your neighborhood doing errands this…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider
        variant='inset'
        component='li'
      />

      {dataPost &&
        dataPost.map((item) => {
          if (!isAdmin && item.status === 1) {
            return (
              <React.Fragment>
                <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography color='text.primary'>
                        {item.title}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{
                            display: 'inline',
                          }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                          className='mr-2'
                        >
                          {item.author}
                        </Typography>
                        {` — `} {item.content}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider
                  variant='inset'
                  component='li'
                />
              </React.Fragment>
            );
          } else if (
            isAdmin
          ) {
            return (
              <React.Fragment>
                <ListItem alignItems='flex-start'>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography color='text.primary'>
                        {item.title} {` `}
                        {isAdmin &&
                        item.status === 0 ? (
                          <button
                            className='badge bg-danger'
                            onClick={() =>
                              setStatus(item, 1)
                            }
                          >
                            Draft
                          </button>
                        ) : (
                          <button
                            className='badge bg-success'
                            onClick={() =>
                              setStatus(item, 0)
                            }
                          >
                            Aktif
                          </button>
                        )}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{
                            display: 'inline',
                          }}
                          component='span'
                          variant='body2'
                          color='text.primary'
                          className='mr-2'
                        >
                          {item.author}
                        </Typography>
                        {` — `} {item.content}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider
                  variant='inset'
                  component='li'
                />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment></React.Fragment>
            );
          }
        })}
    </List>
  );
}
