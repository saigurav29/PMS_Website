import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, ContentChild, Input, OnChanges, OnDestroy,
   OnInit, Output, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FieldPosition, FieldType, IActionEvent, IActionItem, IGridColumn, IGridConfig } from './grid-data.model';
import { CellItemDirective } from 'src/app/directives/cell-item.directive';
import { ActionItemDirective } from 'src/app/directives/action-item.directive';

@Component({
  selector: 'app-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: ['./grid-data.component.css'],
  encapsulation:ViewEncapsulation.None,
})
export class GridDataComponent<T> implements OnInit, OnDestroy, AfterViewInit,OnChanges {

  private rowSelecteionSubscription:Subscription|any;
  public paginationSubscription:Subscription|any;
  dataSource:any=new MatTableDataSource([]);
  displayColumns:string[]|any;
  fieldType=FieldType;
  fieldPosition=FieldPosition;
  selectionRows="selectionRows";
  selection:SelectionModel<T>|any;
  @Input() columns:Array<IGridColumn>|any;
  @Input() initSelectedRows: T[]|any;
  @Input() set data(data:T[]){
    this.setDataSource(data);
  };
  @Input() gridConfig:IGridConfig|any;
  @Output() rowSelected: EventEmitter<T[]>= new EventEmitter();
  @Output() rowUnSelected: EventEmitter<T[]>= new EventEmitter();
  @Output() actionClicked: EventEmitter<IActionEvent<T>>= new EventEmitter();
  @Output() sortChanged: EventEmitter<Sort>= new EventEmitter();
  @Output() pageChanged: EventEmitter<any>= new EventEmitter();
  @Output() pageRedirect: EventEmitter<any>= new EventEmitter();
  @Output() contentChanged: EventEmitter<any>= new EventEmitter();

  @ContentChild(CellItemDirective,{static:true}) cellDef:CellItemDirective|any;
  @ContentChild(ActionItemDirective,{static:true}) actionDef:ActionItemDirective|any;
  @ContentChild('actionAreaTemplate',{static:true}) actionTemplate: TemplateRef<any>|any;

  @ViewChild(MatSort,{static:true}) sort:MatSort|any;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator|any;
@Input() resultCount : number|any;
@Output() rowInputSelected:EventEmitter<any>= new EventEmitter();

  constructor() { }
  

  ngOnInit() {
    if(this.columns && this.gridConfig){
      const selectedRows = this.initSelectedRows ? this.initSelectedRows:[];
      this.selection = new SelectionModel<T>(
        this.gridConfig.isMultiSelectable,selectedRows,true
      );
      this.displayColumns=this.buildDisplayColumns();
      this.rowSelecteionSubscription = this.selection.changed.subscribe(
        (event:any)=>{
          this.emitSelectedRows(event);
        }
      );
    }
  }

  ngAfterViewInit(): void {
    //configure sorting options
    if(this.gridConfig.defaultSort){
      this.sort.active=this.gridConfig.defaultSort.fieldName;
      this.sort.direction = this.gridConfig.defaultSort.sortDirection;
    }
    this.sort.disableClear=true;
    if(!this.gridConfig.isServerSideSortable){
      this.dataSource.sort=this.sort;
    }

    //configur paging options
    if(this.gridConfig.IsPagingEnabled && this.gridConfig.pagingInfo &&
      !this.gridConfig.pagingInfo.serverSidePaging){
        if(this.gridConfig.pagingInfo.selectedPageIndex){
          this.paginator.pageIndex = this.gridConfig.pagingInfo.selectedPageIndex;
        }
        this.dataSource.paginator = this.paginator;
      }
      else if(this.gridConfig.IsPagingEnabled && this.gridConfig.pagingInfo &&
        this.gridConfig.pagingInfo.serverSidePaging){
          this.gridConfig.pagingInfo.pageLength = this.resultCount;
          this.paginationSubscription = this.paginator?.page.subscribe(()=>{
            this.pageChanged.emit({
               index:this.paginator.pageIndex,
               size:this.paginator.pageSize 
            });
          });
        }
        this.commonRemoveScrollMethod();
  }

  ngOnChanges(): void {
    this.gridConfig.pagingInfo.pageLength = this.resultCount;
    this.commonRemoveScrollMethod();
  }
  applyFilter(event:any):void{
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  isAllselected():boolean{
    const numSelected = this.selection.selected.length;
    const numrows = this.dataSource.data.length;
    return numSelected==numrows;
  }
  buildDisplayColumns():string[]{
    let coulumList = this.columns.filter((cols:IGridColumn)=>
      cols.hideColumn===undefined||cols.hideColumn===false
    ).map((cols:IGridColumn)=>cols.key);
    if(this.gridConfig.secondaryActions.length>0){
      const actionlist = this.gridConfig.secondaryActions.map(
        (action:IActionItem)=>action.name
      );
      coulumList=[...coulumList,...actionlist];
    }
    if(this.gridConfig.primaryActions.length>0){
      const actionList=this.gridConfig.primaryActions.map(
        (action:IActionItem)=>action.name
      );
      coulumList=[...actionList,...coulumList];
    }
    if(this.gridConfig.isSelectable){
      coulumList=[this.selectionRows,...coulumList];
    }
    return coulumList;
  }

  masterToggle():void{
    this.isAllselected()?this.selection.clear():
    this.dataSource.data.forEach((row:any)=>this.selection.select(row));
  }
  emitSelectedRows(event:SelectionChange<T>):void{
    if(event&&event.added.length>0){
      this.rowSelected.emit(event.added);
    }
    if(event&&event.removed.length>0){
      this.rowUnSelected.emit(event.removed);
    }
  }
  setDataSource(data:any):void{
    this.dataSource = new MatTableDataSource<any>(data);
    if(this.sort){
      this.dataSource.sort=this.sort;
    }
    if(this.paginator){
      this.dataSource.paginator=this.paginator;
    }
    console.log(this.dataSource)
  }

  onActionClick(eventType:string,item:T):void{
    this.actionClicked.emit({name:eventType,data:item});
  }
  onSortChange(sort:Sort):void{
    this.sortChanged.emit(sort);
  }
  onContentChanged():void{
    this.contentChanged.emit();
  }
  onPageChange(paginator:any ){
    this.pageChanged.emit(paginator); 
  }
  selectedRedirectColumn=(event:any,selectedColumn:any)=>{
    this.pageRedirect.emit({event,selectedColumn});
  }
  isInputChange=(event:any)=>{
    this.rowInputSelected.emit(event);
  }
  ngOnDestroy(): void {
    if(this.rowSelecteionSubscription){
      this.rowSelecteionSubscription.unsubscribe();
    }
    if(this.paginationSubscription){
      this.paginationSubscription.unsubscribe();
    }
  }
  commonRemoveScrollMethod(){
    if(this.gridConfig.removeScroll){
      setTimeout(() => {
        document.getElementById("gridmatcard")?.setAttribute("style","max-height:max-content !important");
      }, 1000);
    }
  }

}
