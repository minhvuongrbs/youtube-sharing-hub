import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const ResponsiveAppBar = () => {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

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
                Welcome minhvuong2810@gmail.com
              </Typography>
            </Box>
          )}
          {loggedIn ? (
            <Box sx={{ flexGrow: 1, justifyContent: 'right', display: 'flex' }}>
              <Button sx={{ color: 'white', display: 'block', size: 'small' }}>
                Share Video
              </Button>
              <Button sx={{ color: 'white', display: 'block', size: 'small' }}>
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
              <TextField id="outlined-basic" label="User" variant="filled" />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="filled"
                type="password"
              />
              <Button sx={{ color: 'white', display: 'block', size: 'small' }}>
                Log In
              </Button>
              <Button sx={{ color: 'white', display: 'block', size: 'small' }}>
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
