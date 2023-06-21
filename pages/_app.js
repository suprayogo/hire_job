import Script from "next/script";
import "@/styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "@/store";
function MyApp({ Component, pageProps }) {
  return (
   <>
<Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-6YPZ1QBHZZ"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6YPZ1QBHZZ', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />



    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
   </>
  );
}

export default MyApp;
