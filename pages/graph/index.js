import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useRef, useState} from "react";
import Head from "next/head";
import Form from "@components/form";

const Graph = ({user, liff}) => {
  const chartComponentRef = useRef(null);
  const [data1, setData1] = useState(120);
  const [data2, setData2] = useState(170);
  const [gtype, setGtype] = useState('area');

  return (
    <div style={{height: "100%"}}>
      <Head>
        <title>タイトル</title>
      </Head>

      <main style={{height: "100%", width: "100%" , padding: 8}}>
        <label style={{marginRight: 20}}><input type="radio" name="type" onClick={() => setGtype('area')} value="area" defaultChecked={gtype === 'area'} />area</label>
        <label style={{marginRight: 20}}><input type="radio" name="type" onClick={() => setGtype('column')} value="column"/>column</label>
        <label><input type="radio" name="type" onClick={() => setGtype('line')} value="line"/>line</label>
        <div style={{width: "100%", marginBottom: 5}}>
          <hr />
          <div style={{marginLeft: 5}}>
            <label> 1月</label>
            <input onChange={(v) => setData1(Number(v.target.value))} value={data1} type="text"/>
          </div>

          <div style={{marginLeft: 5}}>
            <label> 2月</label>
            <input onChange={(v) => setData2(Number(v.target.value))} value={data2} type="text"/>
          </div>
        </div>
        <div style={{height: "50%", width: "100%"}}>
          <Form data1={data1} data2={data2} gtype={gtype} />
        </div>
        <hr />
        <div style={{height: "50%", width: "100%", marginTop: 20}}>
          <HighchartsReact
            highcharts={Highcharts}
            options={{
              title: {
                text: '<a href="/graph?year=2024">＜</a>2023年<a href="/graph?year=2024">＞</a>'
              },
              series: [{
                type: gtype,
                data: [150, 160, 150, 170, 250, 160, 150, 170, 150, 160, 150, 170],
                name: 'kWh',
              }],
              xAxis: {
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
              },
              yAxis: {
                labels: {
                  format: '{value}kWh'
                },
                title: {
                  text: 'y軸のタイトル'
                },
                tickInterval: 100,
              },
            }}
            ref={chartComponentRef}
            {...HighchartsReact.Props} />
        </div>
      </main>
    </div>

  )
};

export default Graph;
