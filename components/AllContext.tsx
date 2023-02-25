import { useContext, createContext, useEffect, useState, useRef } from "react";
import { FileInfo, MusicInfo } from "../lib/global";

interface AimpConfig {
  files: FileInfo[];
  playlist: MusicInfo[];
  selectedFolder: string;
  playing: boolean;
  playingSong: MusicInfo;
}

const ConnectionContext = createContext<AimpConfig>(undefined as never);

export const useSocketConnection = () => {
  return useContext(ConnectionContext);
};

const ConnectionProvider = (props: { children: any }) => {
  return (
    <ConnectionContext.Provider
      value={{
        playlist: [],
        selectedFolder: "",
        playing:false,
        playingSong:{}
      }}
    >
      {props.children}
    </ConnectionContext.Provider>
  );
};

export const SocketProvider = (props: any) => {
  return (
    <ConnectionProvider>
      {props.children}
    </ConnectionProvider>
  );
};

