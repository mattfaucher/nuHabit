import HabitDetails from "./HabitDetails.jsx";
import LandingPage from "./LandingPageM.jsx";
import HabitList from "./HabitList.jsx";
import NotFound from "./NotFound.jsx";
import AccomplishedHabits from "./AccomplishedHabits.jsx";
import BadgeCollection from "./BadgeCollection.jsx";

const routes = [
  { path: '/home', component: LandingPage },
  { path: '/completed', component: AccomplishedHabits },
  { path: '/collection', component: BadgeCollection},
  { path: '/habits', component: HabitList },
  { path: '/details/:id,:title,:count,:increments', component: HabitDetails },
  { path: '*', component: NotFound },
];

export default routes;
