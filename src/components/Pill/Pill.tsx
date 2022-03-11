import React, { FC, Component, ReactElement } from 'react';
import styles from './Pill.module.scss';
import styled from "styled-components";
import { BiAbacus, BiRightArrowAlt } from 'react-icons/bi';
import { env } from 'process';

interface PillProps {
  text?: string | ReactElement;
}
const Pill: FC<PillProps> = (props) => (
  <div className={styles.Pill}>
    <span><BiAbacus /></span>
    {props.text}
    {props.children}
    <span>
      {/* <BiRightArrowAlt /> */}
      <img src={process.env.REACT_APP_BASE_URL + "cover2.jpg"} />
      </span>
  </div>
);

export default Pill; 

class PillGroup extends Component {
  render() {
    return (
      <div className={styles.PillGroup}>
        {this.props.children}
      </div>
    );
  }
}

export { PillGroup };
