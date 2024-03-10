import { useLoaderData } from 'react-router-dom';

//Helper functions
import { fetchData } from '../helpers';

//Components
import Intro from '../components/Intro';

//Loader
export function dashboardLoader() {
  const userName = fetchData('userName');
  return { userName };
}

const Dashboard = () => {
  const { userName } = useLoaderData();

  return <>{userName ? <p>{userName}</p> : <Intro />}</>;
};

export default Dashboard;
