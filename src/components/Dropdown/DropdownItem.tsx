import React, { Component } from 'react';
import styles from './DropdownItem.module.scss';
interface DropdownItemProps {
    text?: string;
    id: string | number;
    inActive?: boolean;
    callback: Function;
}
interface DropdownItemState {
    id?: string | number;
    inActive: boolean;
}
class DropdownItem extends Component<DropdownItemProps, DropdownItemState> {
    constructor(props: DropdownItemProps) {
        super(props);
        this.state = {
            id: props.id,
            inActive: props.inActive ? props.inActive : (false)
        }
    }

    clickHandler = () => {
        if (!this.state.inActive) {
            this.props.callback(this.state.id, this.props.text);
        }
    }
    render() {
        return (
            <li tabIndex={undefined} className={this.state.inActive ? (styles.inactive) : ("")} onClick={(event: React.MouseEvent<HTMLLIElement, MouseEvent>) => (this.clickHandler())}>{this.props.text}</li>
        );
    }
}
export default DropdownItem;
