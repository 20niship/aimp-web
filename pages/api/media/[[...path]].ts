export const config = {
  api: { externalResolver: true }
}

import express from 'express';
const handler = express();

const SRC = "/home/owner/Music/Music";
// const SRC = process.env.SRC_DIR || "../";

const serveFiles = express.static(SRC);
handler.use(['/api/media/', SRC], serveFiles);

export default handler;

