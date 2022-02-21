import React, { Component } from 'react';
import styles from './Business.module.scss';

interface BusinessProps {}

class Business extends Component<BusinessProps> {
  render() {
    return (
      <div className={styles.Business}>
        business
      </div>
    );
  }
}

export default Business;
