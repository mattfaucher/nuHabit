import HabitList from './HabitList.jsx';
import NotFound from './NotFound.jsx';

const routes = [
  { path: '/', component: HabitList },
  { path: '*', component: NotFound },
];

export default routes;
