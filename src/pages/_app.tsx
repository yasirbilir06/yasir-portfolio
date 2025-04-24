import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "../companents/NavBar";
import Footer from "../companents/Footer"; // Footer yoksa bu satırı silebilirsin

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <NavBar />
        <Component {...pageProps} />
        <Footer /> {/* Footer yoksa bu satırı da silebilirsin */}
      </>
  );
}
