import Head from "next/head";

const Detail = ({ user, liff }) => {
  return (
    <div style={{height: "100%"}}>
      <Head>
        <title>{user?.displayName}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main style={{height: "100%"}}>
        <div style={{display: "flex", width: "100%", height: "100%", backgroundColor: "red"}}>
          <button onClick={() => window.open('', '_self').close()}>閉じる window.open('', '_self').close()</button>
          <button onClick={() => liff.closeWindow()}>閉じる liff.closeWindow()</button>
        </div>
      </main>
    </div>
  );
};

export default Detail;
