import React, { FC } from 'react';
import styles from './Pill.module.scss';
import styled from "styled-components";

interface PillProps {  }
const Pill: FC<PillProps> = () => (
  <div className={styles.Pill}>
    Pill Component
  </div>
);

export default Pill;
