import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/home"
import Companies from "./pages/companies"
import Jobs from "./pages/jobs"
import Users from "./pages/users"
import NotFound from "./pages/404"



const App =() =>{
  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home />}
            // render={(props) => <Home {...props} jobs={jobs} />}
          />
          <Route path="/companies" render={() => <Companies />} />
          <Route path="/jobs" render={() => <Jobs />} />
          <Route path="/jobs:id" render={() => <Jobs />} />
          <Route path="/companies:id" render={() => <Companies />} />
          <Route path="/users" render={() => <Users />} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );}

export default App;
