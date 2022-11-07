import React, { useEffect } from 'react';
import { connect } from 'frontity';
import Switch from "@frontity/components/switch";
// import Page from './Pages/Page'
import Page from './Pages/Page.jsx'
import Home from './Pages/Home'
import Link from "./link"
import externalCss from "../assets/extracss/extracss.min.css";
import TagManager from 'react-gtm-module';
// import  {getPageData}  from "./api";
import { Global, css } from "frontity";
import Footer from './Components/Footer';
import Header from './Components/Header';


const Root = ({ state, actions, libraries }) => {
  
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-P2JS76D' });
    }, []);


  const data = state.source.get(state.router.link);
  if (!data.isHome) {
    const dataFronApi = libraries.source.api.get({
      endpoint: "pages",
      params: { _embed: true, slug: state.router.link },
    })
    
  }
  
  return (
    <>
    <Global styles={css(externalCss)} />
      {data.isHome ?
        <h1>Petsure Theme</h1> : ''}

      <p>Current URL : {state.router.link}</p>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/single-trip-travel-insurance">single-trip-travel-insurance</Link>
        <Link href="/annual-travel-insurance">annual-travel-insurance</Link>
      </nav>
      <hr />
      {/* <main> */}
        {/* {getPageData} */}
        {/* <hr /> */}
        <Header />
        <Switch>
          {/* <Loading when={data.isFetching} /> */}
          {/* <Page when={!data.isHome} /> */}
          <Page when={!data.isHome} />
          <Home when={data.isHome} />
        </Switch>
        <Footer />
      {/* </main> */}
    </>
  );
};

export default connect(Root);