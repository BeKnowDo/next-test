import styled from "styled-components";
import Head from "next/head";

import NProgress from "nprogress";
import Router from "next/router";

import { padding } from "../../styles/variables";
import Header from "../common/header";
import Footer from "../common/footer";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const ContentArea = styled.div`
  padding: ${padding.contentArea};
`;

export default ({
  children,
  title = "BKD does e-commerce right!",
  ...props
}) => (
  <div id="root">
    <Head>
      <title>{title}</title>
      <link rel="stylesheet" href="/static/nprogress.css" />
    </Head>
    <Header {...props} />
    <ContentArea>{children}</ContentArea>
    <Footer />
  </div>
);
