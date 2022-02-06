import React, { FC } from 'react';
import styles from './Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard}>
    <div className={styles.View1}>

    </div>
    <h3>Finances</h3>
    <div className={styles.myGrid}>
<div><div></div></div>
<div><div></div></div>
<div><div></div></div>
<div><div></div></div>
<div><div></div></div>
<div><div></div></div>
    </div>
  </div>
);

export default Dashboard;
