import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// import Home from "./pages/home";
import Companies from "./pages/companies";
import CompanyDetails from "./pages/companies/company.details";
import Jobs from "./pages/jobs";
import JobDetails from "./pages/jobs/job.details";
import Admin from "./pages/admin";
import Users from "./pages/users";
import Question from "./pages/questions";
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
  const addJobHandler = async (job) => {
    const request = {
      ...job,
    };

    const response = await api.post("/jobs", request);
    setJobs([...jobs, response.data]);
  };

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
  const handleNewCompany = async (newCompany) => {
    console.log(newCompany);
    const request = {
      ...newCompany,
    };

    const response = await api.post("/company", request);
    setCompany([...company, response.data]);
  };

  // //fetch question
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
            render={(props) => <Jobs {...props} jobs={jobs} />}
          />
          <Route
            path="/companies"
            exact
            render={(props) => <Companies {...props} companies={company} />}
          />
          <Route path="/companies/:id" render={() => <CompanyDetails />} />
          <Route
            path="/jobs"
            exact
            render={(props) => <Jobs {...props} jobs={jobs} />}
          />
          <Route path="/jobs/:id" render={() => <JobDetails />} />
          <Route
            path="/admin"
            render={(props) => (
              <Admin
                {...props}
                addJobHandler={addJobHandler}
                handleNewCompany={handleNewCompany}
                jobs={jobs}
                companies={company}
              />
            )}
          />
          <Route
            path="/question"
            render={(props) => <Question {...props} question={question} />}
          />
          <Route path="/users" component={Users} />
          <Route path="/404" component={NotFound} />

          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
