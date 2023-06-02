import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  jsonData = [
    { id: 1, name: 'Antara Chowdhury', email:'9876541235', DOB:'12-12-1997',location:'Bangalore'},
    { id: 2, name: 'Ananya Dutta',email:'9876541235', DOB:'12-12-1997',location:'Noida'},
    { id: 3, name: 'Subham Das', email:'9876541235', DOB:'12-12-1997',location:'Durgapur'},
    { id: 4, name: 'Vikas Gupta', email:'9876541235', DOB:'12-12-1997',location:'Kolkata'},
    { id: 5, name: 'Bob Johnson', email:'9876541235', DOB:'12-12-1997',location:'Pune'}
  ];
  searchData: string = 'hvhg';

  onSearch(value: string) {
    this.searchData = value;
    
  }
}
