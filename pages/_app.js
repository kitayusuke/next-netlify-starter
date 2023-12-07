import '@styles/globals.css'
import {useState, useEffect} from "react";
import liff from "@line/liff/core";

function MyApp({Component, pageProps}) {
  const [liffObject, setLiffObject] = useState(null);
  const [liffError, setLiffError] = useState(null);
  const [profile, setProfile] = useState(undefined)

  // Execute liff.init() when the app is initialized
  useEffect(() => {
    console.log("start")
    // to avoid `window is not defined` error
    liff
      .init({liffId: "2001921632-Gg46V6Pg"})
      .then(() => {
        console.log(1)
        console.log(liff)
        setLiffObject(liff);
      })
      .catch((error) => {
        setLiffError(error.toString());
      });
  }, []);

  useEffect(() => {
    console.log(2)
    console.log(pageProps)
    liff.ready.then(() => {
      console.log("isLoggedIn")
      if (pageProps.liff.isLoggedIn()) {
        pageProps.liff
          ?.getProfile()
          .then((profile) => {
            setProfile(profile)
          })
          .catch((err) => {
            console.error({err})
          })
      } else {
        pageProps.liff?.login();
      }
    })
  }, [liffObject])


  // Provide `liff` object and `liffError` object
  // to page component as property
  pageProps.liff = liffObject;
  pageProps.liffError = liffError;
  // login user
  pageProps.user = profile;
  console.log(3)
  console.log(pageProps)
  return <Component {...pageProps} />
}

export default MyApp
