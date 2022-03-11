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
    if (window.innerWidth <= 870) {
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
      if (window.innerWidth <= 870 && !this.state.isSmallScreen) {
        this.setState({ isSmallScreen: true, sidebarWidth: this.sideBarRef.current?.offsetWidth});
      } else if (window.innerWidth > 870 && this.state.isSmallScreen) {
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
       
          <div
            className={styles.Sidebar}
          >
            <div className={styles.Top}>
              <div className={styles.container}>
                <img src={logo} alt={"bg"} />
                <span tabIndex={0}>Shoperde Admin</span>
              </div>
            </div>
            <div className={styles.itemsHolder}>
              <SideBarListItem
                link="/dashboard"
                isExact={true}
                text={"Dashboard"}
                icon={<BiHome fontSize={"2rem"} />}
              />
              <SideBarListItem
                link="/finances"
                text={"Finances"}
                subText={"🏦"}
                icon={<FaMoneyCheckAlt fontSize={"2rem"} />}
              />
              <SideBarListItem
                link="/records"
                text={"Records"}
                icon={<FaAccusoft fontSize={"2rem"} />}
              />
              <SideBarListItem
                link="/profile"
                text={"Profile"}
                icon={<BiUser fontSize={"2rem"} />}
              />
             <div className={styles.titleHolder}>
             <h3>Businesses</h3>
             <div className={styles.iconArea}><BiCog /></div>
             </div>
              <SideBarListItem
                link="/business/shoperde"
                text={<span>Shoperde</span>}
                icon={<img alt="Shoperde" src={process.env.REACT_APP_BASE_URL + "logo1.png"} />}
                subText={"Eatery"}

              />
              <SideBarListItem
                link="/business/shenis"
                text={<span>Shenis Apparel</span>}
                icon={<img alt="Shenis Apparel" src={process.env.REACT_APP_BASE_URL + "logo2.png"} />}
                subText={"Apparel"}
              />
              <SideBarListItem
                link="/business/quaker"
                text={<span>Quaker Deliveries</span>}
                icon={<img alt="Quaker Deliveries" src={process.env.REACT_APP_BASE_URL + "logo3.png"} />}
                subText={"Foods"}
              />
              <SideBarListItem
                link="/business/denimCL"
                text={<span>Denim new Fashion Line</span>}
                icon={<img alt="Denim new Fashion Line" src={process.env.REACT_APP_BASE_URL + "logo4.png"} />}
                subText={"Clothing"}
              />
              <SideBarListItem
                link="/business/octafx"
                text={<span>OctaFX Finances</span>}
                icon={<img alt="OctaFX Finances" src={process.env.REACT_APP_BASE_URL + "logo.png"} />}
                subText={"Finances"}
              />
              {/* <div className={styles.addbtnHolder}>
              <div className={"btn btn_primary"}>
                Register Business
              </div>
              </div> */}
              <div className={styles.hiddenBtn}>
                <small>hidden</small>
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
