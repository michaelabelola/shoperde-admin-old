import React, { Component } from "react";
import styles from "./SignUpPage.module.scss";
import bg from "./../../assets/images/login_bg.jpg";
import logo from "./../../assets/images/logo.svg";
import { FaSignInAlt } from "react-icons/fa";
import OverlayCard from "../OverlayCard/OverlayCard";
import { Link } from "react-router-dom";

interface SignUpPageProps {}
interface SignUpPageState {
  isScrollTop: boolean;
}

export default class SignUpPage extends Component<
  SignUpPageProps,
  SignUpPageState
> {
  constructor(props: SignUpPageProps, state: SignUpPageState) {
    super(props);
    this.state = {
      isScrollTop: true,
    };
  }
  componentDidMount() {}
  scrollHandler = (item: HTMLDivElement) => {
    if (this.state.isScrollTop && item.scrollTop !== 0) {
      this.setState({
        isScrollTop: false,
      });
    } else if (!this.state.isScrollTop && item.scrollTop === 0) {
      this.setState({
        isScrollTop: true,
      });
    }
  };
  render() {
    return (
      <div
        className={styles.SignUpPage}
        onScroll={(ev) => this.scrollHandler(ev.currentTarget)}
      >
        <div className={styles.background}>
          <img src={bg} alt="bg" />
        </div>
        <div
          className={
            this.state.isScrollTop
              ? styles.topView
              : styles.topView + " " + styles.tinted
          }
        >
          <div className={styles.title}>
            <span tabIndex={0}>
              <img src={logo} alt="bg" />
              Shoperde Admin
            </span>
          </div>
          <Link to={"/login"}>
            <div tabIndex={0} className={styles.signUpBtn}>
              <FaSignInAlt style={{ marginRight: "0.5rem" }} />
              LOGIN
            </div>
          </Link>
        </div>
        <div className={styles.formHolder}>
          <h2>Register</h2>
          <form action="" className="signUpForm">
            <h3>Personal Details</h3>
            <div className={styles.formItem}>
              <label>Email</label>
              <input type="email" name="email" id="" placeholder="Email" />
            </div>
            <div className={styles.formItem}>
              <label>First Name</label>
              <input type="text" name="fname" id="" placeholder="Firstname" />
            </div>
            <div className={styles.formItem}>
              <label>LastName</label>
              <input type="text" name="lname" id="" placeholder="LastName" />
            </div>
            <div className={styles.formItem}>
              <label>Date Of Birth</label>
              <input
                type="date"
                name="date"
                id=""
                placeholder="Bate Of Birth"
              />
            </div>
            <div className={styles.formItem}>
              <label>Gender</label>
              <select name="gender">
                <option value="male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <h3>Contact</h3>
            <div className={styles.formItem}>
              <label>Address</label>
              <input
                type="email"
                name="Address 1"
                id=""
                placeholder="Address 1"
              />
            </div>
            <div className={styles.formItem}>
              <label>* Address 2</label>
              <input type="email" name="email" id="" placeholder="Address 2" />
            </div>
            <div className={styles.formItem}>
              <label>State</label>
              <input type="email" name="email" id="" placeholder="State" />
            </div>
            <div className={styles.formItem}>
              <label>Country</label>
              <input type="email" name="email" id="" placeholder="Country" />
            </div>
            <div className={styles.formItem}>
              <label>Zip Code</label>
              <input type="email" name="email" id="" placeholder="Zip Code" />
            </div>
            <div className={styles.formItem}>
              <label>Phone Code</label>
              <input type="email" name="email" id="" placeholder="PhoneCode" />
            </div>
            <div className={styles.formItem}>
              <label>Phone</label>
              <input type="email" name="email" id="" placeholder="Phone" />
            </div>
            <input type="button" value="Submit" />
          </form>
        </div>

        {/* <OverlayCard /> */}
      </div>
    );
  }
}
