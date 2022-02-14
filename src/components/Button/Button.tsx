import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  subText?: string;
  icon?: any;
  endIcon?: any;
  link?: string;
}
interface ButtonState {
  isActive: boolean;
}

export default class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps, state: ButtonState){
    super(props);
    this.state = {
      isActive: true
    }
  }
  mainView: any = (
  <div className={styles.Button + " " + styles.primary}>
    {this.props.text}
  </div>
);
  render() {
    
    if (this.props.link && this.state.isActive) {
      return (
        <Link to={this.props.link}>
         {this.mainView}
        </Link>
      );
    }
    return (
      this.mainView
    );
  }
}
