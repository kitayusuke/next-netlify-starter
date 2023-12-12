import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useRef} from "react";
import Head from "next/head";

const Graph = ({user, liff}) => {
  const options = {
    title: {
      text: '<a href="/graph?year=2024">＜</a>2023年<a href="/graph?year=2024">＞</a>'
    },
    series: [{
      type: 'line',
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
  }
  const chartComponentRef = useRef(null);

  return (
    <div style={{height: "100%"}}>
      <Head>
        <title>タイトル</title>
      </Head>

      <main style={{height: "100%", width: "100%"}}>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          ref={chartComponentRef}
          {...HighchartsReact.Props} />
      </main>
    </div>

  )
};

export default Graph;
