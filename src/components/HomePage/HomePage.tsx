import React, { Component } from "react";
import { StaticContext } from "react-router";
import { Redirect, Route, RouteComponentProps, Switch } from "react-router-dom";
import Business from "../Business/Business";
import Dashboard from "../Dashboard/Dashboard";
import ListingsPage from "../ListingsPage/ListingsPage";
import BusinessSidebar from "../Sidebar/BusinessSidebar";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./HomePage.module.scss";
import Button from './../Button/Button';
import TopNavigation from "../TopNavigation/TopNavigation";

interface HomePageProps extends RouteComponentProps {
}
interface HomePageState {
  isOpened: boolean;
  isSmallScreen: boolean;
}
var businessDir = "/business/:businessId";
export default class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps, state: HomePageState) {
    super(props);
    var smallScreen: boolean = false;
    var isOpened: boolean = true;
    if (window.innerWidth <= 870) {
      isOpened = false;
    }
    this.state = {
      isOpened: isOpened,
      isSmallScreen: smallScreen,
    };

  }
  componentDidMount() {
    window.onresize = () => {
      if (window.innerWidth <= 870 && !this.state.isSmallScreen) {
        this.setState({ isSmallScreen: true, isOpened:false });
      } else if (window.innerWidth > 870 && this.state.isSmallScreen) {
        this.setState({ isSmallScreen: false });
      } else {
        this.setState({ isSmallScreen: false });
      }
    };
  }
  shouldComponentUpdate(
    nextProps: Readonly<HomePageProps>,
    nextState: Readonly<HomePageState>
  ): boolean {
    return true;
  }
  toggleSidebar: Function = (open?: boolean) => {
    if (open == null) {
      if (this.state.isOpened) {
        this.setState({ isOpened: false });
      } else {
        this.setState({ isOpened: true });
      }
      return;
    }
    if (!open) {
      if (this.state.isOpened) {
        this.setState({ isOpened: false });
      }
    }
  };
  render() {
    return (
      <div className={styles.HomePage}>














        <div className={styles.SidebarHolder}
          style={
            !this.state.isOpened
              ? { marginLeft: "-250px", opacity:"0" }
              : { marginLeft: "0px", opacity:"1" }
          }>
          <div className={styles.Sidebar + " scroller"}>
            <Switch>
              <Route path={businessDir} component={BusinessSidebar} />
              <Route path={"/"} component={Sidebar} />
            </Switch>
          </div>
        </div>
        {this.state.isSmallScreen ? (
          <div className={styles.hiderView}
            style={
              (!this.state.isOpened || this.state.isOpened === undefined)
                ? { opacity: 0, display: "block" }
                : { opacity: 1, display: "block" }
            } onClick={(ev) => this.toggleSidebar()}
          ></div>
        ) : (
          ""
        )}
        <div className={styles.mainPage + " scroller"}>
          <TopNavigation toggleSidebar={this.toggleSidebar} />
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path={"/business/:businessId"} render={(props: RouteComponentProps<{ businessId: string; }, StaticContext, unknown>) => (<Redirect to={props.location.pathname + "/dashboard"} />)} />
            <Route path={businessDir + "/listings"} component={ListingsPage} />
            <Route path={["/business", businessDir, businessDir + "/*"]} component={Business} />
          </Switch>
        </div>
      </div>
    );
  }
}