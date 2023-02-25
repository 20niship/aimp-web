import { Box, Grid, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography } from "@mui/material";
import Footer from "@/components/footer";
import { NextPageContext } from 'next'

import AllAudio from '@/components/allaudio'
import PlayList from '@/components/Playlist'

import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SquareIcon from '@mui/icons-material/Square';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';


import { FileInfo } from "@/lib/global"
type Props = {
  files: FileInfo[];
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  const basename =
    process.env.NODE_ENV === "development"
      ? `http://${ctx.req?.headers.host}/`
      : `https://${ctx.req?.headers.host}/`
    ;
  const res = await fetch(basename + "api/list")
  const data = await res.json()
  return { props: data }
}

export default function Home(props: Props) {
  const sx = { fontSize: "45px" };
  const files = props.files;
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
        <Footer sx={{ position: "fixed", bottom: 0 }} />
      </Box>

      <Grid container spacing={1}>
        <Grid item xs={4}>
          <AllAudio files={files}/>
        </Grid>
        <Grid item xs={8}>
          <PlayList />
        </Grid>
      </Grid>
    </>
  );
}

