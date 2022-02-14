import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./HomePage.module.scss";

interface HomePageProps {}
interface HomePageState {}

export default class HomePage extends Component<HomePageProps, HomePageState> {
  render() {
    return (
      <div className={styles.HomePage}>
        <Sidebar />
        <div className={styles.mainPage}>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </div>
    );
  }
}
