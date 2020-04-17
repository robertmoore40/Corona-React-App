import React, { useState, useEffect} from 'react';

import { fetchDailyData } from '../../api'

import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

// import { Line, Bar } from 'react-chartjs-2';


const Chart = () => {
  const [dailyData, setDailyData] = useState({})

  // useeffect with callback

  useEffect(() => {
    const fetchMyAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchMyAPI();
  }, []);

  const lineChart = (
  dailyData[0] ? (
  <Line
    data={{
labels: '',
datasets:[{}, {}],
    }}
    />) : null
  );



    return (
        <h1>Chart</h1>
    )
}

export default Chart