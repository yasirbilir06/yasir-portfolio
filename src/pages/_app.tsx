import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../companents/NavBar";
import Footer from "../companents/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </>
  );
}
