import React, { Component, Ref } from "react";
import styles from "./Sidebar.module.scss";
import { FaAccusoft } from "react-icons/fa";
import { BiCog, BiCreditCardAlt, BiHome, BiKey, BiListMinus, BiRightArrowAlt, BiStoreAlt, BiUser } from "react-icons/bi";
import { NavLink, RouteComponentProps } from "react-router-dom";
//RouteComponentProps<{ businessId: string; }
interface SidebarProps extends RouteComponentProps<{ businessId: string; }> {
  history: any;
  location: any;
  match: any;
}
interface SidebarState {
}

export default class BusinessSidebar extends Component<SidebarProps, SidebarState> {
  sideBarRef: React.RefObject<HTMLDivElement> = React.createRef();
  constructor(props: SidebarProps, state: SidebarState) {
    super(props);
  }
  render() {
    return (
      <>
          <div className={styles.Sidebar}>
            <div className={styles.Top}>
              <div className={styles.container}>
                <img src={process.env.REACT_APP_BASE_URL + "logo1.png"} alt="bg" />
                <span tabIndex={0}>Shenis Group Of Companies</span>
              </div>
            </div>
            <div className={styles.itemsHolder}>
              <SideBarListItem
                link="dashboard"
                isExact={true}
                text={"Dashboard"}
                icon={<BiHome fontSize={"2rem"} />}
              />
              <SideBarListItem
                link={this.props.match.url + "/finances"}
                text={"Finances"}
                subText={"🏦"}
                icon={<BiCreditCardAlt fontSize={"2rem"} />}
              />
              <SideBarListItem
                link={this.props.match.url + "/orders"}
                text={"Orders"}
                icon={<FaAccusoft fontSize={"2rem"} />}
              />
              <SideBarListItem
                link={this.props.match.url + "/permission"}
                text={"Permissions"}
                icon={<BiKey fontSize={"2rem"} />}
              />
              <SideBarListItem
                link={this.props.match.url + "/listings"}
                text={"Listings"}
                icon={<BiListMinus fontSize={"2rem"} />}
              />
              <SideBarListItem
                link={this.props.match.url + "/deliveries"}
                text={"Transportation / Deliveries"}
                icon={<BiListMinus fontSize={"2rem"} />}
              />
              <SideBarListItem
                link={this.props.match.url + "/customerManagement"}
                text={"Customer Management"}
                icon={<BiUser fontSize={"2rem"} />}
              />
              <SideBarListItem
                link={this.props.match.url + "/customerManagement"}
                text={"Properties / Locations"}
                icon={<BiStoreAlt fontSize={"2rem"} />}
              />
              <div className={styles.titleHolder}>
                <h3>Groups</h3>
                <div className={styles.iconArea}><BiRightArrowAlt /></div>
              </div>
              <div className={styles.titleHolder}>
                <h3>Sub Businesses</h3>
                <div className={styles.iconArea}><BiRightArrowAlt /></div>
              </div>
              <SideBarListItem
                link={this.props.match.url + "/business/shoperde"}
                text={<span>Shoperde</span>}
                icon={<img alt="Shoperde" src={process.env.REACT_APP_BASE_URL + "logo1.png"} />}
                subText={"Store"}
              />
              <SideBarListItem
                link={this.props.match.url + "/business/shenis"}
                text={<span>Shenis Apparel</span>}
                icon={<img alt="Shenis Apparel" src={process.env.REACT_APP_BASE_URL + "logo1.png"} />}
                subText={"Apparel / Accessories"}
              />
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
