import { Box, List, ListItem, Typography } from '@mui/material';
import useVideo from '../data/useVideo';
import { getYouTubeVideoId } from '../utils/getYouTubeVideoId';
import { YoutubeItem } from './YoutubeItem';

export default function VideoList() {
  const { videos = [] } = useVideo();

  return (
    <Box>
      {' '}
      <List>
        {videos.map(
          ({
            id,
            youtubeUrl,
            shareBy = '',
          }: {
            id: string;
            youtubeUrl: string;
            shareBy: string;
          }) => (
            <ListItem key={id} role={undefined}>
              <YoutubeItem videoId={getYouTubeVideoId(youtubeUrl)} />
              <Typography sx={{ ml: 3 }}>Share by: {shareBy}</Typography>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
}
