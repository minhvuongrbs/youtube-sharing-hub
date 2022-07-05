import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { NextPage } from 'next';
import { MaterialUIFormSubmit } from '../src/MaterialUIFormSubmit';
import ResponsiveAppBar from '../src/ResponsiveAppbar';

const ShareVideo: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <MaterialUIFormSubmit formName="Share a youtube movie" />
      </Box>
    </Container>
  );
};

export default ShareVideo;
