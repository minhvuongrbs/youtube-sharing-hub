import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import {
  getCurrentUser,
  isLoggedIn,
  login,
  register,
} from '../requests/userApi';

const ResponsiveAppBar = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loggedIn = isLoggedIn();
  const userEmail = loggedIn ? getCurrentUser().email : '';

  const onLoginSubmit = (e: any) => {
    e.preventDefault();
    if (email && password) {
      login({ email, password });
    }
  };

  const onRegisterSubmit = (e: any) => {
    e.preventDefault();
    if (email && password) {
      register({ email, password });
    }
  };

  const onClickLogout = (e: any) => {
    e.preventDefault();
    localStorage.removeItem('user');
    Router.replace('/');
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Funny Movies
          </Typography>
          {loggedIn && (
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' },
              }}
            >
              <Typography textAlign="center" align="center">
                Welcome {userEmail}
              </Typography>
            </Box>
          )}
          {loggedIn ? (
            <Box sx={{ flexGrow: 1, justifyContent: 'right', display: 'flex' }}>
              <Link href="/share-video" color="secondary">
                <Button
                  sx={{ color: 'white', display: 'block', size: 'small' }}
                >
                  Share Video
                </Button>
              </Link>

              <Button
                sx={{ color: 'white', display: 'block', size: 'small' }}
                onClick={onClickLogout}
              >
                Log out
              </Button>
            </Box>
          ) : (
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: 'right',
                display: 'flex',
                py: 1,
              }}
            >
              <TextField
                id="outlined-basic"
                label="User"
                variant="filled"
                autoComplete="nope"
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="filled"
                type="password"
                name="password"
                autoComplete="new-password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                sx={{ color: 'white', display: 'block', size: 'small' }}
                onClick={onLoginSubmit}
              >
                Log In
              </Button>
              <Button
                sx={{ color: 'white', display: 'block', size: 'small' }}
                onClick={onRegisterSubmit}
              >
                Register
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
