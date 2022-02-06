import styles from "./LoginPage.module.scss";
import React, { Component } from "react";
import bg from "./../../assets/images/login_bg.jpg";
import logo from "./../../assets/images/logo.svg";
import { FaPhoneAlt, FaQuestion, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

interface LoginPageProps {}
interface LoginPageState {}

export default class LoginPage extends Component<
  LoginPageProps,
  LoginPageState
> {
  render() {
    return (
      <div className={styles.LoginPage}>
        <div className={styles.left}>
          <h3>ABOUT</h3>
          Shoperde is an easy to use quick business management suite of
          softwares to make starting and managing your business easier.
          <br />
          <br />
          It is built with the needs of startups and already established
          businesses in mind.
          <br />
          Some of the services offered are:
          <ul>
            <li className={styles.doings}>Deliver and transport services</li>
            <li className={styles.doings}>Finance Management</li>
            <li className={styles.doings}>Employee Management</li>
            <li className={styles.doings}>Access and admin Control</li>
            <li className={styles.doings}>Custom Integrated tools</li>
            <li className={styles.doings}>and More</li>
          </ul>
          😁
        </div>
        <div className={styles.right}>
          <div className={styles.background}>
            <img src={bg} alt="bg" />
          </div>
          <div className={styles.formHolder}>
            <form action="" className="login">
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <input type="button" value="Login" />
            </form>
            <div className={styles.formTextBtms}>
              <div>
                <FaQuestion style={{ marginRight: "0.5rem" }} /> Forgot Password
              </div>
              <div>
                <FaPhoneAlt style={{ marginRight: "0.5rem" }} /> Contact us
              </div>
            </div>
          </div>
          <div className={styles.topView}>
            <div className={styles.title}>
              <span tabIndex={0}>
                <img src={logo} alt="bg" />
                Shoperde Admin
              </span>
            </div>
            <Link to={"signup"}>

            <div tabIndex={0} className={styles.signUpBtn}>
              <FaSignInAlt style={{ marginRight: "0.5rem" }} />
              SIGNUP
            </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
