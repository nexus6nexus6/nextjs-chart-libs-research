import dynamic from 'next/dynamic';
import Nivo from './components/nivo/nivo';
import { dataSSR } from './components/nivo/data-ssr';
import ChartJs from './components/chart-js/chart-js';
const LightweightChart = dynamic(
  () => import('./components/lightweight-chart/lightweight-chart'),
  {
    ssr: false,
  }
);

export default function Home({ data }) {

  return (
    <>
      <Nivo ssrChartUrl={data?.url}></Nivo>
      <ChartJs></ChartJs>
      <LightweightChart></LightweightChart>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const response = await fetch('http://localhost:3030/charts/line', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify(dataSSR)
    });
    const data = await response.json();
    return { props: { data } }
  } catch (error) {
    return { props: {} };
  }


}
