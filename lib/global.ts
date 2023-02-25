
export type FileInfo = {
  is_directory: boolean,
  name: string,
  child: FileInfo[]
}

export type MusicInfo = {
  name: string,
  duration: string,
  img:string,
  url:string,
  artist:string
}
