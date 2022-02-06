import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';
import styles from './OverlayCard.module.scss';

interface OverlayCardProps {}
interface OverlayCardState {}

export default class OverlayCard extends Component<OverlayCardProps, OverlayCardState> {
  render() {
    return (
      <div className={styles.OverlayCard}>
      <div className={styles.Card}>
     <div className={styles.loadingView}>
       <span><FaSpinner /></span>REGISTERING
     </div>
    </div>
    </div>
    );
  }
}

