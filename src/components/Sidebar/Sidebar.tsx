import React, { Component, Ref } from "react";
import styles from "./Sidebar.module.scss";
import logo from "./../../assets/images/logo.svg";
import { FaAccusoft, FaMoneyCheckAlt } from "react-icons/fa";
import { BiCog, BiHome, BiUser } from "react-icons/bi";
import { NavLink } from "react-router-dom";

interface SidebarProps {}
interface SidebarState {
  isOpened: boolean;
  isSmallScreen: boolean;
  sidebarWidth: any;
}

export default class Sidebar extends Component<SidebarProps, SidebarState> {
   sideBarRef:React.RefObject<HTMLDivElement>  = React.createRef();
  constructor(props: SidebarProps, state: SidebarState) {
    super(props);
    var smallScreen: boolean = false;
    var isOpened: boolean = true;
    if (window.innerWidth <= 800) {
      isOpened = false;
    }
    this.state = {
      isOpened: isOpened,
      isSmallScreen: smallScreen,
      sidebarWidth:"0px"
    };
  }
  componentDidMount() {
    window.onresize = () => {
      if (window.innerWidth <= 800 && !this.state.isSmallScreen) {
        this.setState({ isSmallScreen: true, sidebarWidth: this.sideBarRef.current?.offsetWidth});
      } else if (window.innerWidth > 800 && this.state.isSmallScreen) {
        this.setState({ isSmallScreen: false, sidebarWidth: this.sideBarRef.current?.offsetWidth });
      } else{
        this.setState({sidebarWidth: this.sideBarRef.current?.offsetWidth });}
    };
  }
  shouldComponentUpdate(
    nextProps: Readonly<SidebarProps>,
    nextState: Readonly<SidebarState>
  ): boolean {
    return true;
  }
  componentDidUpdate(
    prevProps: Readonly<SidebarProps>,
    prevState: Readonly<SidebarState>
  ) {
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
      <>
        <div className={styles.SidebarHolder}
        style={
              this.state.isOpened && this.state.isSmallScreen
                ? { width: "100%"}
                : { width: "fit-content"}
            }>
          {this.state.isSmallScreen ? (
            <div className={styles.hiderView}
            style={
              this.state.isOpened
                ? { opacity: 1 }
                : { opacity: 0, display:"none" }
            } onClick={(ev) => this.toggleSidebar()}
            ></div>
          ) : (
            ""
          )}

          <div
            className={styles.Sidebar}
            ref = {this.sideBarRef}
            style={
              !this.state.isOpened
                ? { marginLeft: this.sideBarRef?("-"+this.state.sidebarWidth+"px"): ("0px"), display:"none" }
                : { marginLeft: "0px" }
            }
          >
            <button className="bttnz" onClick={(ev) => this.toggleSidebar()} style={{display: "none"}}>
              toggle Sidebar
            </button>
            <div className={styles.Top}>
              <div className={styles.container}>
                <img src={logo} alt="bg" />
                <span tabIndex={0}>Shoperde Admin</span>
              </div>
            </div>
            <div className={styles.itemsHolder}>
              <SideBarListItem
                link="/dashboard"
                isExact={true}
                text={"Home"}
                icon={<BiHome fontSize={"1.1rem"} />}
              />
              <SideBarListItem
                link="/finances"
                text={"Finances"}
                subText={"🏦"}
                icon={<FaMoneyCheckAlt fontSize={"1.1rem"} />}
              />
              <SideBarListItem
                link="/records"
                text={"Records"}
                icon={<FaAccusoft fontSize={"1.1rem"} />}
              />
              <SideBarListItem
                link="/profile"
                text={"Profile"}
                icon={<BiUser fontSize={"1.1rem"} />}
              />
             <div className={styles.titleHolder}>
             <h3>Businesses</h3>
             <div className={styles.iconArea}><BiCog /></div>
             </div>
              <SideBarListItem
                link="/business/shoperde"
                text={<span>Shoperde</span>}
                icon={<img alt="Shoperde" src="http://127.0.0.1:5500/login_bg.jpg" />}
              />
              <SideBarListItem
                link="/business/shenis"
                text={<span>Shenis Apparel</span>}
                icon={<img alt="Shenis Apparel" src="http://127.0.0.1:5500/login_bg.jpg" />}
              />
              <SideBarListItem
                link="/c"
                text={<span>Quaker Deliveries</span>}
                icon={<img alt="Quaker Deliveries" src="http://127.0.0.1:5500/login_bg.jpg" />}
              />
              <SideBarListItem
                link="/d"
                text={<span>Denim new Fashion Line</span>}
                icon={<img alt="Denim new Fashion Line" src="http://127.0.0.1:5500/login_bg.jpg" />}
              />
              <SideBarListItem
                link="/e"
                text={<span>OctaFX Finances</span>}
                icon={<img alt="OctaFX Finances" src="http://127.0.0.1:5500/login_bg.jpg" />}
              />
              <div className={styles.addbtnHolder}>
              <div className={"btn btn_primary"}>
                Register Business
              </div>
              </div>
              <div className={styles.hiddenBtn}>
                <small>hidden</small>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const SideBarListItem = (props: {
  text: string | React.ReactElement;
  icon: any;
  link: string;
  subText?: string;
  isExact?: boolean;
}) => {
  return (
    <NavLink to={props.link} activeClassName={styles.active} exact={props.isExact}>
      <div className={styles.item}>
        {props.icon}
        <div className={styles.itemBody}>
          <div className={styles.text} tabIndex={0}>
            {props.text}
          </div>
          {props.subText ? (
            <div className={styles.subText} tabIndex={0}>
              {props.subText}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <hr />
    </NavLink>
  );
};
