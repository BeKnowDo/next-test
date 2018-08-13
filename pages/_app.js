import React from "react";
import App, { Container } from "next/app";
import styled from "styled-components";

import NProgress from "nprogress";
import Router from "next/router";

import { padding } from "../styles/variables";
import Layout from "../components/layout";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const ContentArea = styled.div`
  padding: ${padding.contentArea};
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <ContentArea>
            <Component {...pageProps} />
          </ContentArea>
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
