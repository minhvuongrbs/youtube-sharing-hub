import React, { useState } from 'react';
import { Button, Icon, TextField, Paper, Typography, Box } from '@mui/material';
import { shareNewVideo } from '../requests/videoApi';

export function MaterialUIFormSubmit(props: any) {
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    shareNewVideo(youtubeUrl);
  };

  const handleInput = (evt: any) => {
    setYoutubeUrl(evt.target.value);
  };

  return (
    <Box>
      <Paper sx={{ p: 5, m: 5, width: 1 }}>
        <Typography sx={{ mb: 2 }} variant="h5" component="h3">
          {props.formName}
        </Typography>
        <TextField
          sx={{ flexGrow: 1, width: 1 }}
          label="Url"
          id="margin-normal"
          name="Url"
          onChange={handleInput}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ m: 2, display: 'flex' }}
          onClick={handleSubmit}
        >
          Share
        </Button>
      </Paper>
    </Box>
  );
}
