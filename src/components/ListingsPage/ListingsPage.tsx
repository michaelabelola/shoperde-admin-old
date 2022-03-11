import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import { BiLockAlt, BiStar } from 'react-icons/bi';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import { DropdownItemObject } from '../Dropdown/DropdownItem';
import Pill, { PillGroup } from '../Pill/Pill';
import styles from './ListingsPage.module.scss';

interface ListingsPageProps extends RouteComponentProps<{ businessId: string; }> {

}
interface ListingsPageState {
  businessId?: string;
}
const ExpandedComponent = (data: any) => (
  <span>
    <Pill text={"Wahala"} />
    <pre>{JSON.stringify(data, null, 2)}</pre>
  </span>
);

class ListingsPage extends Component<ListingsPageProps, ListingsPageState> {
  allListings: DropdownItemObject[] = [
    {
      id: "publicMainListing",
      text: <div style={{ display: "flex", alignItems: "center" }}>Public Listing  <BiLockAlt style={{ marginLeft: "0.5rem" }} /></div>,
    },
    {
      id: "lagosListing",
      text: <div style={{ display: "flex", alignItems: "center" }}>Lagos Listing  <BiLockAlt style={{ marginLeft: "0.5rem" }} /></div>,
    },
    {
      id: "AllProducts",
      text: "All Products",
    },
    {
      id: "publicMainListing",
      text: "October 12 Listing",
    },
    {
      id: "publicMainListing",
      text: "Restricted Listing",
    },
    {
      id: "publicMainListing",
      text: "Public Listing",
    },
  ]




  columns: any = [
    {
      name: 'Name',
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: 'Type',
      selector: (row: any) => row.year,
      sortable: true,
    }, {
      name: 'Public State',
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: 'Released / Launched',
      selector: (row: any) => row.year,
      sortable: true,
    }, {
      name: 'Restrictions',
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row: any) => row.year,
      sortable: true,
    }, {
      name: 'Name',
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: 'Type',
      selector: (row: any) => row.year,
      sortable: true,
    }, {
      name: 'Name',
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: 'Type',
      selector: (row: any) => row.year,
      sortable: true,
    },
  ];

  data = [
    {
      id: 0,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 1,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 2,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 4,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 6,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 7,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 8,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 9,
      title: 'Ghostbusters',
      year: '1984',
    },
    {
      id: 10,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 11,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]



  render() {
    return (
      <div className={styles.ListingsPage}>
        <div className={styles.topView}>
          <div className={styles.topViewTitleHolder}>
            <Dropdown data={this.allListings} styleMain={styles.listTitleHead} defaultId={"lagosListing"} hideArrow />
          </div>
          <div className={styles.sec2}>
            <div className={styles.right}>
              <div><b>Date: </b>5th June 2009</div>
              <div><b>Rating: </b><BiStar /><BiStar /><BiStar /><BiStar /><BiStar /></div>

            </div>
            <hr/>
            <div className={styles.left}>
              <div>
                <PillGroup>
                  <div><Pill><b>PRIVATE</b></Pill></div>
                  <Pill text={"Location Based"} />
                  <Pill text={"12 items"} />
                  <Pill text={"5 / 10"} />
                  <Pill text={"Location Based"} />
                  <Pill text={"Location Based"} />
                  <Pill text={"Location Based"} />
                </PillGroup>
              </div>


            </div>
          </div>
        </div>
        <hr />
        <div className={styles.body}>
          <div className={styles.actions}>
            <PillGroup>
              <Button text={"Add Item To Listing"} />
              <Button text={"New Item"} />
              
            </PillGroup>
          </div>
        </div>
        ListingsPage Component {this.props.match.params.businessId}

        <DataTable
          columns={this.columns}
          data={this.data}
          expandableRows
          selectableRows
          expandableRowsComponent={ExpandedComponent}
          // dense
          pagination
          responsive
          onRowExpandToggled={(expanded: boolean, row: { id: number; title: string; year: string; }) => {
            this.data[row.id].title = "guesrkeurkyurgrkuy";
          }}
        />

      </div>
    );
  }
}

export default ListingsPage;
