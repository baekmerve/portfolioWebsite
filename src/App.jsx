import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/Footer";
import Navbar from "./scenes/Navbar";
import MainPage from "./page/MainPage";
import { ThemeProvider } from "./context/theme-provider";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isDesktop = useMediaQuery("(min-width:1060px)"); // check minwith if > 1060 or <1060

  return (
    <ThemeProvider defaultTheme="dark">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <MainPage
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isDesktop={isDesktop}
      />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
