import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  subText?: string;
  icon?: any;
  endIcon?: any;
  link?: string;
  callback?: Function;
}
interface ButtonState {
  isActive: boolean;
}

export default class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps, state: ButtonState) {
    super(props);
    this.state = {
      isActive: true
    }
  }
  onClickFn = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (this.props.callback) {
      this.props.callback()
    }
  }

  mainView: any = (
    <div className={styles.Button + " " + styles.primary} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => (this.onClickFn(event))}>
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
