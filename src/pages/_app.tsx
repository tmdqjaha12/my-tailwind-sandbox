import "@styles/slick-theme.css";
import "@styles/slick.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "public/styles/globals.css";
import "public/styles/hideLeftbar.css";
import "public/styles/hideTopbar.css";
import "public/styles/mouseTracker.css";
import "public/styles/popupmodal.css";
import "public/styles/webCam.css";
import "public/styles/sectionScroll.css";

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
