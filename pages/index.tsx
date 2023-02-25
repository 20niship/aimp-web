import { Box, Grid, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography } from "@mui/material";

import AllAudio from '@/components/allaudio'
import PlayList from '@/components/Playlist'

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SquareIcon from '@mui/icons-material/Square';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';

interface MenuItem {
  icon: any;
  text: string;
  href: string;
  id?: number;
}

type Props = {
  visible: boolean;
};

export default function Home(props: Props) {
  const sx = { fontSize: "45px" };
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png" width="100%" />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h5">恋は桃色</Typography>
          <Typography variant="body2">AAAAAAAAA</Typography>
          <Typography variant="caption">BBBBBBBBBBB</Typography>
        </Grid>
        <Grid item xs={8}>
          <IconButton><SkipPreviousIcon sx={sx} /></IconButton>
          <IconButton><SquareIcon sx={sx} /></IconButton>
          <IconButton><PlayCircleOutlineIcon sx={sx} /></IconButton>
          <IconButton><PauseIcon sx={sx} /></IconButton>
          <IconButton><SkipNextIcon sx={sx} /></IconButton>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="h4"> aaaaaaaaaa </Typography>
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <AllAudio />
        </Grid>
        <Grid item xs={8}>
          <PlayList />
        </Grid>
      </Grid>
    </>
  );
}

