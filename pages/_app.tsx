import type { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Header from "@/components/header";
import Footer from "@/components/footer";

const theme = createTheme({
  palette: {
    mode: "dark"
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  const [textVisible, setTextVisible] = useState(true);
  const textInvert = () => {
    setTextVisible(!textVisible);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Component {...pageProps} />
      <Footer sx={{ position: "fixed", bottom: 0 }} />
    </ThemeProvider>
  );
}

