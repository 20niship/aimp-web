import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Header from "@/components/header";

const theme = createTheme({
  palette: {
    mode: "dark"
  },
});

function App({ Component, pageProps }: AppProps) {
  const [textVisible, setTextVisible] = useState(true);
  const textInvert = () => {
    setTextVisible(!textVisible);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

import dynamic from "next/dynamic";
import React from "react";

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});

