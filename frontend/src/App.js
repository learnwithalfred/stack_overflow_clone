import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./pages/home";
import Companies from "./pages/companies";
import Question from "./pages/questions";
import Jobs from "./pages/jobs";
import Users from "./pages/users";
import NotFound from "./pages/404";
import api from "./api";
import React, { useEffect, useState } from "react";

const App = () => {
  const [company, setCompany] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [question, setQuestion] = useState([]);

  //fetch jobs
  const fetchJobs = async () => {
    const response = await api.get("/jobs");
    return response.data;
  };

  useEffect(() => {
    const getAllJobs = async () => {
      const allJobs = await fetchJobs();
      if (allJobs) setJobs(allJobs);
    };
    getAllJobs();
  }, []);

  //create new job
  // const addJobHandler = async (job) => {
  //   const request = {
  //     ...job,
  //   };

  //   const response = await api.post("/jobs", request);
  //   setJobs([...jobs, response.data]);
  // };

  //fetch companies
  const fetchCompanyData = async () => {
    const response = await api.get("/company");
    //console.log("data here", response.data);
    return response.data;
  };

  useEffect(() => {
    const companyList = async () => {
      const allCampanies = await fetchCompanyData();
      if (allCampanies) setCompany(allCampanies);
    };
    companyList();
  }, []);

  //create new company
  // const handleNewCompany = async (company) => {
  //   const request = {
  //     ...company,
  //   };

  //   const response = await api.post("/company", request);
  //   setJobs([...company, response.data]);
  // };




  //fetch question
  const fetchAllQuestions = async () => {
    const response = await api.get("/questions");
    //console.log("quetions data", response.data)
    return response.data;
  };

  useEffect(() => {
    const getQuestions = async () => {
      const foundQuestionList = await fetchAllQuestions();
      if (foundQuestionList) setQuestion(foundQuestionList);
    };
    getQuestions();
  }, []);

  return (
    <Router>
      <div>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Home />}
          />
          <Route
            path="/companies"
            render={(props) => <Companies {...props} company={company} />}
          />
          <Route
            path="/jobs"
            render={(props) => <Jobs {...props} jobs={jobs} />}
          />
          <Route path="/users" render={() => <Users />} />

          <Route path="/jobs:id" render={() => <Jobs />} />
          <Route path="/companies:id" render={() => <Companies />} />
          <Route
            path="/question"
            render={(props) => <Question {...props} question={question} />}
          />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
