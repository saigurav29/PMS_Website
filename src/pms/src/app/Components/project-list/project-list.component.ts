import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { ProjectService } from 'src/app/Services/project.service';
import { FieldPosition, FieldType, IGridColumn, IGridConfig } from 'src/app/Shared/grid-data/grid-data.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
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
constructor(private prjService:ProjectService) { }

ngOnInit(): void {
  this.setGridConfig();
  this.buildColumns();
  this.getEmployeeList();

}
getEmployeeList(){
  this.prjService.getProjectList().subscribe(res=>{
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
      key:'projectId',
      isSortable:true,
      isEditable:false,
      header:'Project ID',
      position:FieldPosition.Left,
      type:FieldType.String
    },
    {
      hasCustomTemplate:false,
      key:'projectName',
      isSortable:false,
      isEditable:false,
      header:'Name',
      position:FieldPosition.Left,
      type:FieldType.String
    },
    {
      hasCustomTemplate:false,
      key:'status',
      isSortable:false,
      isEditable:false,
      header:'Email',
      position:FieldPosition.Left,
      type:FieldType.String
    }
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
