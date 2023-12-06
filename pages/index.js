import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Home  = ({ user }) => {
  return (
    <div style={{height: "100%"}}>
      <Head>
        <title>きた</title>
      </Head>

      <main style={{height: "100%"}}>
        <a href="/detail" style={{display: "flex", width: "100%", height: "50%"}}>
          <div style={{backgroundColor: "red", width: "100%", height: "100%"}}><span >displayName：</span>{user?.displayName}</div>
          <div style={{backgroundColor: "blue", width: "100%"}}><span style={{color: "red"}}>userID：</span>{user?.userId?.substr(0, 10)}...</div>
          <div style={{backgroundColor: "yellow", width: "100%"}}><span style={{color: "red"}}>userID：</span>{user?.userId?.substr(0, 10)}...</div>
        </a>

        <a href="/detail" style={{display: "flex", width: "100%", height: "50%"}}>
          <div style={{backgroundColor: "blue", width: "100%"}}><span style={{color: "red"}}>userID：</span>{user?.userId?.substr(0, 10)}...</div>
          <div style={{backgroundColor: "yellow", width: "100%"}}><span style={{color: "red"}}>userID：</span>{user?.userId?.substr(0, 10)}...</div>
          <div style={{backgroundColor: "red", width: "100%"}}><span >displayName：</span>{user?.displayName}</div>
        </a>
      </main>
    </div>
  )
}
export default Home;