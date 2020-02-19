import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AddBlog from "./AddBlog";
import EditBlog from "./EditBlog";
import ContactForms from "./ContactForms";
import SideBar from "./SideBar";
import PrivateRoute from "../routeLayout/PrivateRoute";
import "../../scss/dashboard.scss";
import HomeDashboard from "./HomeDashboard";
import RecentBlogs from "../RecentBlogs";
import BlogItem from "../../pages/BlogItem";
import PinnedBlogs from "../PinnedBlogs";

const routes = [
  {
    path: "/admin/dashboard/main",
    exact: true,
    main: () => <HomeDashboard />
  },
  {
    path: "/blog/:blogId",
    exact: true,
    main: () => <BlogItem />
  },
  {
    path: "/admin/dashboard/blog/:blogId/editblog",
    exact: true,
    main: () => <EditBlog />
  },
  {
    path: "/admin/dashboard/blogs",
    exact: true,
    main: () => <RecentBlogs />
  },
  {
    path: "/admin/dashboard/blogs/pinnedposts",
    exact: true,
    main: () => <PinnedBlogs />
  },
  {
    path: "/admin/dashboard/addBlog",
    main: () => <AddBlog />
  },
  {
    path: "/admin/dashboard/forms",
    main: () => <ContactForms />
  }
];

function Dashboard() {
  return (
    <Router>
      <div className="dashboard">
        <SideBar />
        <section className="mainView">
          <Switch>
            {routes.map((route, index) => (
              <PrivateRoute
                key={index}
                path={route.path}
                exact={route.exact}
                children={route.main}
              />
            ))}
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default Dashboard;
