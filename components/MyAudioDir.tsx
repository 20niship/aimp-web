import { List, Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import FolderIcon from '@mui/icons-material/Folder';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

import { FileInfo } from "@/lib/global"
import { useState } from "react";
type Props = {
  files: FileInfo;
};

export const MyAudioDir = (props: Props) => {
  const f = props.files;
  let [expand, setExpand] = useState(false);
  return (
    <>
      <ListItemButton onClick={() => { setExpand(!expand) }}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={f.name} />
        {expand ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={expand} sx={{ ml: 1.5 }}>
        <List component="li" disablePadding dense>
          {
            f.child.map(c => MyAudio(c))
          }
        </List>
      </Collapse>
    </>
  )
}

export const MyAudio = (f: FileInfo) => {
  if (f.is_directory) {
    return <MyAudioDir files={f} />;
  } else {
    return (
      <ListItemButton>
        <ListItemIcon>
          <AudiotrackIcon />
        </ListItemIcon>
        <ListItemText primary={f.name} />
      </ListItemButton>
    )
  }
}


