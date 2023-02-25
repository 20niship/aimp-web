import SportsScoreIcon from "@mui/icons-material/SportsScore";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import SettingsIcon from "@mui/icons-material/Settings";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import TerminalIcon from "@mui/icons-material/Terminal";
import NextLink from "next/link";
import { Box, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface MenuItem {
  icon: any;
  text: string;
  href: string;
  id?: number;
}

const default_items: MenuItem[] = [
  {
    icon: <AutoGraphIcon />,
    text: "グラフ表示",
    href: "/log",
  },
  {
    icon: <TerminalIcon />,
    text: "ログ出力",
    href: "/statistics",
  },
  {
    icon: <PhotoCameraIcon />,
    text: "カメラ画像",
    href: "/camera",
  },
  {
    icon: <KeyboardIcon />,
    text: "シェル関数",
    href: "/shell",
  },
  /*{
    icon: <SportsScoreIcon />,
    text: "本番画面",
    href: "/tournament",
  },
  {
    icon: <SportsEsportsIcon />,
    text: "テストラン",
    href: "/testrun",
  },*/
  {
    icon: <VideogameAssetIcon />,
    text: "JoyStick",
    href: "/joystick",
  },
  {
    icon: <SettingsIcon />,
    text: "接続情報",
    href: "/admin",
  },
];

type Props = {
  visible: boolean;
};
// export function Sidebar(props) {
export default function Sidebar(props: Props) {
  const { pathname } = useRouter();
  const [items, setItems] = useState<MenuItem[]>([]);
  return (
    <Box sx={{ padding: 1 }}>
      {items.map((item, i) => {
        return (
          <NextLink href={{pathname: item.href, query:{id: item.id}}} legacyBehavior key={i}>
            <ListItemButton dense selected={pathname === item.href}>
              <ListItemIcon sx={{ minWidth: "40px" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={props.visible ? item.text : " "} />
            </ListItemButton>
          </NextLink>
        );
      })}
    </Box>
  );
}

