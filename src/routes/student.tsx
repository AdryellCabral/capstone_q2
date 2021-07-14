import { Switch, Route } from "react-router-dom";
import HomeStudent from "../pages/HomeStudent";
import Exercices from "../pages/Exercices";
import Workouts from "../pages/Workouts";
import WorkoutStudent from "../pages/WorkoutStudent";
import PhysicalAssessment from "../pages/PhysicalAssessment";
import Feed from "../pages/Feed";

const StudentRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomeStudent} />
      <Route path="/exercices" component={Exercices} />
      <Route path="/workouts" component={Workouts} />
      <Route exact path="/workout/:id" component={WorkoutStudent} />
      <Route path="/physicalAssessment" component={PhysicalAssessment} />
      <Route path="/feed" component={Feed} />
    </Switch>
  );
};

export default StudentRoutes;
