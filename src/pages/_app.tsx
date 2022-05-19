import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "public/styles/globals.css";

/**
 * 페이지 이동 감지
 */
Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;