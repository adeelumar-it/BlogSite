import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import { UserInfoProvider } from '../components/UserInfoContext';
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">

      <Component {...pageProps} />
   
    </ThemeProvider>
  );
}

export default MyApp;
