import React, { Component } from "react";
import { StaticContext } from "react-router";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import Business from "../Business/Business";
import Dashboard from "../Dashboard/Dashboard";
import BusinessSidebar from "../Sidebar/BusinessSidebar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./HomePage.module.scss";

interface HomePageProps {}
interface HomePageState {}

export default class HomePage extends Component<HomePageProps, HomePageState> {
  render() {
    return (
      <div className={styles.HomePage}>
        <Switch>
          <Route path={"/business/:businessId"} component={BusinessSidebar} />
          <Route path={"/"} component={Sidebar} />
        </Switch>
        <div className={styles.mainPage + " scroller"}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path={"/business/:businessId"} render={(props: RouteComponentProps<{ businessId: string; }, StaticContext, unknown>) => (<Redirect to={props.location.pathname + "/dashboard"} />)} />
            <Route path={["/business", "/business/:businessId", "/business/:businessId/*"]} component={Business} />
          </Switch>
        </div>
      </div>
    );
  }
}
