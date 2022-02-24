import React, { Component } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import styles from './Dropdown.module.scss';
import DropdownItem from './DropdownItem';

interface DropdownProps {
  data: string[];
}
interface DropdownState {
  isOpen: boolean;
  currentValue?: string;
  currentId?: string | number;
  placeHolder: string;
  itemsView: JSX.Element[];
}

class Dropdown extends Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);
    this.state = {
      isOpen: false,
      placeHolder: "Select Content",
      itemsView: this.props.data.map((value: string, index: number) => {
        return <DropdownItem id={index} text={value} callback={this.itemOnClick} />
      })
    }

  }


  clickFunction = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (this.state.isOpen) {
      this.setState({ isOpen: false })
    } else {
      this.setState({ isOpen: true })
    }
    // this.querySelector('.select').classList.toggle('open');
  }

  itemOnClick = (id: string | number, text: string) => {
    this.setState({
      currentValue: text,
      currentId: id,
      isOpen: false
    })
  }

  render() {
    return (
      <div className={styles.Dropdown}>
        <div className={styles.MainView} tabIndex={0} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => (this.clickFunction(event))}>
          <div className={styles.textView}>{this.state.currentValue ? (this.state.currentValue) : (this.state.placeHolder)}</div>
          <div className={styles.arrow}><BiCaretDown /></div>
        </div>
        <ul className={(styles.dropdownMenu)}>
          <DropdownItem id={"1"} text={"Female"} callback={this.itemOnClick} />
          <DropdownItem id={"1"} text={"MALE"} inActive callback={this.itemOnClick} />
          <DropdownItem id={"3"} text={"MALE"} callback={this.itemOnClick} />
        </ul>
        <input defaultValue={this.state.currentValue} hidden />
      </div >

    );
  }
}

export default Dropdown;