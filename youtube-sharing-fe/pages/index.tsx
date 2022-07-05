import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import type { NextPage } from 'next';
import ResponsiveAppBar from '../src/ResponsiveAppbar';
import VideoList from '../src/VideoList';

const Home: NextPage = () => {
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
        <VideoList />
      </Box>
    </Container>
  );
};

export default Home;
