import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const { NEXT_PUBLIC_BASE_URL } = process.env;
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'First dataset',
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Second dataset',
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: '#742774',
    },
  ],
};

export default function PriceHistory() {
  const router = useRouter();
  const id = router.query.id;

  // const [data, setData] = useState({
  //   datasets: [],
  // });

  // useEffect(() => {
  //   if (router.isReady) {
  //     getChartdata(setData, id);
  //   }
  // }, [router.isReady, id]);

  return (
    <div className="border border-solid border-[#0080FF]">
      <Line data={data} />
    </div>
  );
}
