import React, { Component } from 'react';
import styles from './Sidebar.module.scss';
import logo from "./../../assets/images/logo.svg";
import { FaAccusoft } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { NavLink } from "react-router-dom";

interface SidebarProps {}
interface SidebarState {}


export default class Sidebar extends Component<SidebarProps, SidebarState> {
  render() {
    return (
      <div className={styles.Sidebar}>
      <div className={styles.Top}>
        <div className={styles.container}>
          <img src={logo} alt="bg" />
          <span tabIndex={0}>Shoperde Admin</span>
        </div>
      </div>
      <div className={styles.itemsHolder}>
        <SideBarListItem
          link="/main"
          text={"Home"}
          icon={<BiHome fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/azap"
          text={"acc"}
          subText={"about"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/acc"
          text={"Acc"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/a"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/b"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/c"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/d"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/e"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/f"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/g"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/h"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
        <SideBarListItem
          link="/i"
          text={"Home"}
          icon={<FaAccusoft fontSize={"1.1rem"} />}/>
      </div>
    </div>

    );
  }
}
















export const SideBarListItem = (props: {
  text: string;
  icon: any;
  link: string;
  subText?: string;
}) => {
  return (
    <NavLink to={props.link} activeClassName={styles.active}>
      <div className={styles.item}>
        {props.icon}
        <div className={styles.itemBody}>
        <div className={styles.text} tabIndex={0}>{props.text}</div>
        {props.subText ? 
        (<div className={styles.subText} tabIndex={0}>{props.subText}</div>)
        : 
        ("")}
        
        </div>
      </div>
      <hr />
    </NavLink>
  );
};
