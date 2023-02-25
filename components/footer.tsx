import NextLink from "next/link";
import { Box, Grid, ListItemIcon, Paper, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import PhotoCamera from "@mui/icons-material/PhotoCamera"
import PlusIcon from "@mui/icons-material/PlusOneOutlined"
import MinusIcon from "@mui/icons-material/MicNone"
import MuteIcon from "@mui/icons-material/MusicNoteTwoTone"

import Search from '@/components/search';

export default function Sidebar() {
  return (
    <Box sx={{ bgcolor: 'primary.disabled' }}>
      <hr />
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <Search />
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={6}>
          {'  '}
          <IconButton><PhotoCamera /></IconButton>
          <IconButton><PlusIcon /></IconButton>
          <IconButton><MinusIcon /></IconButton>
          <IconButton><MuteIcon /></IconButton>
          aaaaa aaaaa
        </Grid>
      </Grid>
    </Box>
  );
}

