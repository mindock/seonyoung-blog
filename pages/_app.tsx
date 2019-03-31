import App, { Container } from 'next/app';
import React from 'react';
import SideBar from '../components/menu/sideBar';

/* 
헤더, 푸터와 같이 프로젝트 전체에서 공통으로 사용하는 레이아웃을 정의한다.
즉, 앱이 최초 한번만 로드되길 바랄 때 사용한다.
Next.js 프로젝트를 사용하면, _app.js를 사용한다.
*/

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <SideBar />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
