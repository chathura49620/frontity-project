import React, { useEffect } from 'react';
import { connect } from 'frontity';
import Switch from "@frontity/components/switch";
import Page from './Pages/Page'
import Home from './Pages/Home'
import StysureMin from "../assets/staysure.min.css";
import externalCss from "../assets/extracss/extracss.min.css";
import themeMin from "../assets/new-theme/css/theme.min.css";
import iconsCss from "../assets/extracss/icons.css";
import TagManager from 'react-gtm-module';
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
    <Global styles={css(StysureMin)} />
    <Global styles={css(externalCss)} />
    <Global styles={css(themeMin)} /> 
    <Global styles={css(iconsCss)} /> 
        <Header />
        <Switch>
          <Page when={!data.isHome} />
          <Home when={data.isHome} />
        </Switch>
        <Footer />
    </>
  );
};

export default connect(Root);