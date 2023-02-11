import React from 'react';

import {
  SpeedDial,
  SpeedDialAction,
} from '@mui/material';

// icon
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';

import { useNavigate } from 'react-router-dom';
import Toast from '../Alert';


const MenuItems = () => {
  const navigate = useNavigate();
  const redirect = (uri) => {
    navigate(uri);
  };

  return (
    <SpeedDial
      ariaLabel='SpeedDial basic example'
      sx={{
        position: 'absolute',
        bottom: 20,
        right: 20,
      }}
      icon={<MenuIcon />}
    >
      <SpeedDialAction
        icon={<HomeIcon />}
        color='primary'
        tooltipOpen
        tooltipTitle={'Home'}
        onClick={() => redirect('/')}
      />
      <SpeedDialAction
        icon={<PostAddIcon />}
        tooltipOpen
        tooltipTitle={'Posting'}
        onClick={() => redirect('posting')}
      />
      <SpeedDialAction
        icon={<InfoIcon />}
        tooltipOpen
        tooltipTitle={'About'}
        onClick={() => redirect('about')}
      />
      {window.sessionStorage.getItem('token') ? (
        <SpeedDialAction
          icon={<LogoutIcon />}
          tooltipOpen
          tooltipTitle={'Logout'}
          onClick={() => {
              window.sessionStorage.clear();
              Toast.fire({
                icon: 'success',
                title: `Berhasil Logout`,
              });
              redirect('/login')
          }}
        />
      ) : (
        <SpeedDialAction
          icon={<LoginIcon />}
          tooltipOpen
          tooltipTitle={'Login'}
          onClick={() => redirect('login')}
        />
      )}
    </SpeedDial>
  );
};

export default MenuItems;
