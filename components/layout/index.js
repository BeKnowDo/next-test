import React, { Component } from "react";
import App, { Container } from "next/app";
import styled from "styled-components";

import NProgress from "nprogress";
import Router from "next/router";

import { padding } from "../../styles/variables";
import Header from "../common/header";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const ContentArea = styled.div`
  padding: ${padding.contentArea};
`;

class Layout extends Component {
  render() {
    const { children } = this.props;
    return children;
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Header />
          <ContentArea>
            <Component {...pageProps} />
          </ContentArea>
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
