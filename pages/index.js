import dynamic from 'next/dynamic';
import Nivo from './components/nivo/nivo';
import ChartJs from './components/chart-js/chart-js';
const LightweightChart = dynamic(
  () => import('./components/lightweight-chart/lightweight-chart'),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <>
      <Nivo></Nivo>
      <ChartJs></ChartJs>
      <LightweightChart></LightweightChart>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
