import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import FolderIcon from '@mui/icons-material/Folder';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { MyAudioDir, MyAudio } from "@/components/MyAudioDir"

import { FileInfo } from "@/lib/global"
import { useState } from "react";
type Props = {
  files: FileInfo[];
};

// const MyAudioDir = (f: FileInfo) => {
//   let [expand, setExpand] = useState(false);
//   return (
//     <>
//       <ListItemButton onClick={() => { setExpand(!expand) }}>
//         <ListItemIcon>
//           <FolderIcon />
//         </ListItemIcon>
//         <ListItemText primary={f.name} />
//         {expand ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <List component="li" disablePadding dense={true}>
//         {expand &&
//           f.child.map(c => MyAudio(c))
//         }
//       </List>
//     </>
//   )
// }
// const MyAudio = (f: FileInfo) => {
//   if (f.is_directory) {
//     return <MyAudioDir files={f} />;
//     // return (
//     //   <>
//     //     <ListItemButton onClick={() => { setExpand(!expand) }}>
//     //       <ListItemIcon>
//     //         <FolderIcon />
//     //       </ListItemIcon>
//     //       <ListItemText primary={f.name} />
//     //       {expand ? <ExpandLess /> : <ExpandMore />}
//     //     </ListItemButton>
//     //     <List component="li" disablePadding dense={true}>
//     //       {expand &&
//     //         f.child.map(c => MyAudio(c))
//     //       }
//     //     </List>
//     //   </>
//     // )
//   } else {
//     return (
//       <ListItemButton>
//         <ListItemIcon>
//           <AudiotrackIcon />
//         </ListItemIcon>
//         <ListItemText primary={f.name} />
//       </ListItemButton>
//     )
//   }
// }

export default function AllAudioList(props: Props) {
  const files = props.files;
  return (
    <List
      sx={{
        width: '100%', height: "100vh", overflowX: "scroll"
      }}
      dense={true}
    >
      {
        files.map(c => { return (<MyAudio file={c} key="" />); })
      }
    </List>
  );
}

