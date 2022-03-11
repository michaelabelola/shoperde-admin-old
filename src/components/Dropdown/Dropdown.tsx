import React, { Component, ReactElement } from 'react';
import { BiCaretDown } from 'react-icons/bi';
import styles from './Dropdown.module.scss';
import DropdownItem, { DropdownItemObject } from './DropdownItem';

interface DropdownProps {
  data: DropdownItemObject[];
  styleMain: string;
  hideArrow?: boolean;
  defaultId?: string | number;
}
interface DropdownState {
  isOpen: boolean;
  currentValue?: string | ReactElement;
  currentId?: string | number;
  placeHolder: string;
  itemsView: JSX.Element[];
}
class Dropdown extends Component<DropdownProps, DropdownState> {
  baceItem?: DropdownItemObject;
  constructor(props: DropdownProps) {
    super(props);
    for (let index = 0; index < this.props.data.length; index++) {
      const element: DropdownItemObject = this.props.data[index];
      if (this.props.defaultId === element.id) {
        this.baceItem = element;
      }
    }
    if (!this.baceItem) {
      this.baceItem = this.props.data[0];
    }
    this.state = {
      isOpen: false,
      placeHolder: "Select Content",
      currentId: this.baceItem.id,
      currentValue: this.baceItem.text,
      itemsView: this.props.data.map((value: DropdownItemObject, index: number) => {
        return <DropdownItem key={index} id={value.id} text={value.text} callback={this.itemOnClick} />
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
        <div className={this.props.styleMain ? (styles.MainView + " " + this.props.styleMain) : styles.MainView} tabIndex={0} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => (this.clickFunction(event))}>
          <div className={styles.textView}>{this.state.currentValue ? (this.state.currentValue) : (this.state.placeHolder)}</div>
          {this.props.hideArrow ? "" : <div className={styles.arrow}><BiCaretDown /></div>}
        </div>
        <ul className={(styles.dropdownMenu)}>
          {this.state.itemsView}
          {/* <DropdownItem id={"1"} text={"Female"} callback={this.itemOnClick} />
          <DropdownItem id={"1"} text={"MALE"} inActive callback={this.itemOnClick} />
          <DropdownItem id={"3"} text={"MALE"} callback={this.itemOnClick} /> */}
        </ul>
        <input value={this.state.currentId} hidden onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{}} />
      </div >

    );
  }
}

export default Dropdown;