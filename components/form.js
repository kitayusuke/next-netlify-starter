import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {useRef, useState} from "react";
import Head from "next/head";


const Form = ({user, liff, data1, data2}) => {
  const chartComponentRef = useRef(null);
  const op = {
    title: {
      text: '<a href="/graph?year=2024">＜</a>2023年<a href="/graph?year=2024">＞</a>'
    },
    series: [{
      type: 'area',
      data: [data1, data2],
      name: 'kWh',
    }],
    xAxis: {
      categories: ['1月', '2月']
    },
    yAxis: {
      labels: {
        format: '{value}kWh'
      },
      title: {
        text: ''
      },
      tickInterval: 50,
    },
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={op}
      ref={chartComponentRef}
      {...HighchartsReact.Props} />
  )
};

export default Form;
