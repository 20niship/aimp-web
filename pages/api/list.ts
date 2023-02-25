import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';
import { FileInfo } from "@/lib/global"
type Data = { files: FileInfo[] }

const get_files = (directory: string) => {
  const filesInDirectory = fs.readdirSync(directory);
  let files: FileInfo[] = [];
  for (const f of filesInDirectory) {
    const filename = path.basename(f);
    const absolute = path.join(directory, f);
    if (fs.statSync(absolute).isDirectory()) {
      const child = get_files(absolute);
      files.push({
        is_directory: true, name: filename, child
      })
    } else {
      files.push({
        is_directory: false, name: filename, child: []
      });
    }
  }
  return files;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const dir = "/home/owner/Music/Music";
  const files = get_files(dir);
  res.status(200).json({ files });
}

