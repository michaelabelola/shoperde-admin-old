import React, { Component } from 'react';
import Dropdown from '../Dropdown/Dropdown';
import Pill from '../Pill/Pill';
import styles from './Business.module.scss';
import DataTable from 'react-data-table-component';

interface BusinessProps {}

class Business extends Component<BusinessProps> {
   columns:any = [
    {
      name: 'Title',
      selector: (row: { title: any; }) => row.title,
      sortable: true,
    },
    {
      name: 'Year',
      selector: (row: { year: any; }) => row.year,
      sortable: true,
    },
  ];

   data:any = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
   ExpandedComponent:any = ( data:any ) => <pre>{JSON.stringify(data, null, 2)}</pre>;

  constructor(props:BusinessProps) {
    super(props);
    this.data = Array<string>("Eatery", "Restaurant", "shop", "others")
  }
  
  render() {
    return (
      <div className={styles.Business}>
        <DataTable
          columns={this.columns}
          data={this.data}
          expandableRows
          expandableRowsComponent={this.ExpandedComponent}
        />
      </div>
    );
  }
}

export default Business;















