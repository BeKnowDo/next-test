import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";
import { typography } from "../styles/variables";

injectGlobal`
    body {
      font-family: ${typography.fontFamily};
      font-size: 14px;
      margin: 0;
      padding: 0;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    li {
        padding: 0;
        margin: 0;
        list-style-type: none;
    }
`;

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();

    return {
      ...page,
      styleTags
    };
  }

  render() {
    return (
      <html>
        <Head>
          <title>My page</title>
          {this.props.styleTags}
          <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
