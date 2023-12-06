import '@styles/globals.css'
import {useState, useEffect} from "react";

function MyApp({ Component, pageProps }) {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);
  const [profile, setProfile] = useState(undefined)

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    // to avoid `window is not defined` error
    import("@line/liff")
      .then((liff) => liff.default)
      .then((liff) => {
        liff
          .init({liffId: process.env.NEXT_PUBLIC_LIFF_ID})
          .then(() => {
              setLiffObject(liff);
            })
          .catch((error) => {
            setLiffError(error.toString());
          });
      });
  }, []);

  useEffect(() => {
    if (!pageProps.liff?.isLoggedIn()) {
      pageProps.liff?.login();
    }
    pageProps.liff
      ?.getProfile()
      .then((profile) => {
        setProfile(profile)
      })
      .catch((err) => {
        console.error({err})
      })
  }, [liffObject]);

  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  // login user
  pageProps.user = profile;
  console.log(pageProps)
  return <Component {...pageProps} />
}

export default MyApp
