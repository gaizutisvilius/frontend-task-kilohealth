import React from 'react';

// MUI
import { styled } from '@mui/material/styles';
import { AppBar } from '@mui/material';

// Assets
import { LogoImage } from '../../assets/svg';

const Header = (props) => (
  <HeaderRoot
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      pt: '56px',
    }}
  >
    <LogoImage />
  </HeaderRoot>
);

const HeaderRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[19],
  [theme.breakpoints.down('sm')]: {
    boxShadow: '0px 1px 0px rgba(0, 0, 0, 0.08)',
  },
}));

export default Header;
