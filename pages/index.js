import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Home = ({user, liff}) => {
  return (
    <div style={{height: "100%"}}>
      <Head>
        <title>きた</title>
      </Head>

      <main style={{height: "100%"}}>
        <div style={{display: "flex", width: "100%", height: "50%"}}>
          <div style={{backgroundColor: "red", width: "100%", height: "100%"}}>
            <button onClick={() => window.open('', '_self').close()}>閉じる window.open('', '_self').close()</button>
          </div>

          <div style={{backgroundColor: "blue", width: "100%"}}>
            <button onClick={() => liff.closeWindow()}>閉じる liff.closeWindow()</button>
          </div>
          <div onClick={() => location.href = '/detail'} style={{backgroundColor: "yellow", width: "100%"}}><span
            style={{color: "red"}}>詳細</span>
          </div>
        </div>


        <div style={{backgroundColor: "blue", width: "100%"}}><span
          style={{color: "red"}}>userID：</span>{user?.userId?.substr(0, 10)}...
        </div>
        <a href="/detail" style={{display: "flex", width: "100%", height: "50%"}}>
          <div style={{backgroundColor: "yellow", width: "100%"}}><span
            style={{color: "red"}}>userID：</span>{user?.userId?.substr(0, 10)}...
          </div>
          <div style={{backgroundColor: "red", width: "100%"}}><span>displayName：</span>{user?.displayName}</div>
        </a>
      </main>
    </div>
  )
}
export default Home;