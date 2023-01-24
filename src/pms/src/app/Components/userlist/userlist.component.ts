import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/Services/employee.service';
import { FieldPosition, FieldType, IGridColumn, IGridConfig } from 'src/app/Shared/grid-data/grid-data.model';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @ViewChild(MatSort,{static:true}) sort: MatSort|any;
  showgrid:boolean=true;
  columns:IGridColumn[]|any;
gridConfig:IGridConfig={
  isMultiSelectable:false,
  isSelectable:false,
  IsPagingEnabled:true,
  isFilterable:false,
  isServerSideSortable:true,
  pagingInfo:{
    serverSidePaging:true,
    pagingSizes:[],
    defaultpageSize:0,
    pageLength:0,
  },
  primaryActions:[],
  secondaryActions:[],
  removeScroll:false
};
gridData:any;
eventData={
  pageIndex:0,
  pageSize:25,
};
sortby:any='';
sortType:any='asc';
  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
    this.setGridConfig();
    this.buildColumns();
    this.getEmployeeList();

  }
  getEmployeeList(){
    this.empService.getEmployeeList().subscribe(res=>{
      this.gridData=res;
      this.selectedCount = res.length;
    })
  }
  selectedCount=0;  // set the total recount cont 
  setGridConfig=()=>{
this.gridConfig={
  isMultiSelectable:false,
    isSelectable:false,
    IsPagingEnabled:true,
    isFilterable:true,
    isServerSideSortable:true,
    pagingInfo:{
      serverSidePaging:true,
      pagingSizes:[15,25,50,100,500],
      defaultpageSize:25,
      pageLength:this.selectedCount,
    },
    primaryActions:[],
    secondaryActions:[],
    removeScroll:false
}
  }

  buildColumns=()=>{
    this.columns=[
      {
        hasCustomTemplate:false,
        key:'employeeId',
        isSortable:true,
        isEditable:false,
        header:'Employee ID',
        position:FieldPosition.Left,
        type:FieldType.String
      },
      {
        hasCustomTemplate:false,
        key:'empFirstName',
        isSortable:false,
        isEditable:false,
        header:'Name',
        position:FieldPosition.Left,
        type:FieldType.String
      },
      {
        hasCustomTemplate:false,
        key:'emailId',
        isSortable:false,
        isEditable:false,
        header:'Email',
        position:FieldPosition.Left,
        type:FieldType.String
      },
      {
        hasCustomTemplate:false,
        key:'dob',
        isSortable:false,
        isEditable:false,
        header:'Date Of Birth',
        position:FieldPosition.Left,
        type:FieldType.Date
      },
      {
        hasCustomTemplate:true,
        key:'gender',
        isSortable:false,
        isEditable:false,
        header:'Gender',
        position:FieldPosition.Left,
        type:FieldType.String
      },
      {
        hasCustomTemplate:false,
        key:'address',
        isSortable:false,
        isEditable:false,
        header:'Address',
        position:FieldPosition.Left,
        type:FieldType.String
      },
      {
        hasCustomTemplate:false,
        key:'pincode',
        isSortable:false,
        isEditable:false,
        header:'Pincode',
        position:FieldPosition.Left,
        type:FieldType.String
      },
      {
        hasCustomTemplate:true,
        key:'action',
        isSortable:false,
        isEditable:false,
        header:'Action',
        position:FieldPosition.Left,
        type:FieldType.String
      },
    ]

  }
  option:any;
  isNewSearch=true;
  resetPage:boolean=false;
  onsortChanged(sort:any){
    if(this.gridConfig.isServerSideSortable){
      this.sort =sort.active;
      this.sortType=sort.direction;
      this.isNewSearch=false;
      //call methods
    }
  }
  pageChanged(event:any,selectedOption:any){
if(this.isNewSearch){
  this.eventData={pageIndex:event?.pageIndex+1,pageSize:event?.pageSize};
}
this.isNewSearch=true;
if(this.resetPage){
  this.eventData={pageIndex:1,pageSize:event?.pageSize};
this.resetPage=false;
}
  }
  pageRedirect(event:any){
    if(event.selectedColumn==""){
      //based on column name we can redirect 
    }
  }

}
