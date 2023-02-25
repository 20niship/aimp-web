import { List, Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import FolderIcon from '@mui/icons-material/Folder';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

import { FileInfo } from "@/lib/global"
import { useState } from "react";
type Props = {
  file: FileInfo;
};

export const MyAudioDir = (props: Props) => {
  const f = props.file;
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
            f.child.map(c => { return (<MyAudio file={c} key = "" />);})
          }
        </List>
      </Collapse>
    </>
  )
}

export const MyAudio = (props: Props) => {
  const f = props.file;
  if (f.is_directory) {
    return <MyAudioDir file={f} />;
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


