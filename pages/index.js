import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import PopupWidget from "../components/popupWidget";
import BlogArticle from "../components/Blogarticle";

const Home = () => {
  return (
    <>
      
      <Navbar />
      <BlogArticle />
      <Footer />
    
    </>
  );
}

export default Home;