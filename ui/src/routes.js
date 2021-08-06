import HabitDetails from "./HabitDetails.jsx";
import LandingPage from "./LandingPage.jsx";
import HabitList from "./HabitList.jsx";
import NotFound from "./NotFound.jsx";
import AccomplishedHabits from "./AccomplishedHabits.jsx";

const routes = [
  { path: "/home", component: LandingPage },
  { path: "/completed", component: AccomplishedHabits },
  { path: "/habits", component: HabitList },
  { path: "/details/:id,:title,:count,:increments", component: HabitDetails },
  { path: "*", component: NotFound },
];

export default routes;
