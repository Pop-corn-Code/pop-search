import { AppProvider } from "../context/AppContext";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Navbar />
      <Component {...pageProps} />
    </AppProvider>
  );
}