import HabitList from './HabitList.jsx';
import NotFound from './NotFound.jsx';

const routes = [
  { path: '/habits', component: HabitList },
  { path: '*', component: NotFound },
];

export default routes;
