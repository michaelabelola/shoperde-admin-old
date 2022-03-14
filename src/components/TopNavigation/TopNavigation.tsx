import * as React from 'react';
import { FaHamburger, FaList } from 'react-icons/fa';
import Button from '../Button/Button';
import styles from './TopNavigation.module.scss';

export interface TopNavigationProps {
  toggleSidebar?: Function;
}

export default class TopNavigation extends React.Component<TopNavigationProps> {
  public render() {
    return (
      <div className={styles.TopNavigation}>
        <Button children={<FaList />} callback={this.props.toggleSidebar} />
      </div>
    );
  }
}