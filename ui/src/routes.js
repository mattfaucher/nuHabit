import LandingPage from './LandingPage.jsx';
import HabitList from './HabitList.jsx';
import NotFound from './NotFound.jsx';

const routes = [
  { path: '/home', component: LandingPage },
  { path: '/habits', component: HabitList },
  { path: '*', component: NotFound },
];

export default routes;
