import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Ag-Grid-Example';

	columnDefs = [
		{headerName: 'Make', field: 'make',sortable: true,filter:true,checkboxSelection: true,editable:true},
		{headerName: 'Model', field: 'model',sortable: true,filter:true},
    {headerName: 'Price', field: 'price',sortable: true,filter:true}
    
	];

  rowData :any;

  constructor(private http:HttpClient){

  }
  
  /*ngOnInit(){
    this.http.get('https://api.myjson.com/bins/15psn9').subscribe((data)=>{
      this.rowData = data;
    });
  
  }*/
  ngOnInit(){
   this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
    
  
  }

  
}
