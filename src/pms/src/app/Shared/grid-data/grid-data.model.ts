import { SortDirection } from "@angular/material/sort";

export interface IGridColumn{
    header:string;
    key:string;
    position:FieldPosition;
    hideColumn?:boolean;
    isSortable?:boolean;
    isEditable?:boolean;
    type?:FieldType;
    hasCustomTemplate?:boolean;
    footer?:boolean;
}
export interface IGridFooter{
    fieldType:FieldType;
    value:any;
}

export interface IGridConfig{
    isSelectable:boolean;
    isFilterable:boolean;
    isMultiSelectable:boolean;
    IsPagingEnabled:boolean;
    pagingInfo?:IPagingInfo;
    primaryActions:IActionItem[];
    secondaryActions:IActionItem[];
    defaultSort?:ISortInfo;
    hasFooter?:boolean;
    removeScroll?:boolean;
    isServerSideSortable?:boolean;
}

export enum FieldPosition{
    Right,Left,Center,
}
export enum FieldType{
    Currency,Date,Decimal,Percent,String,isRedirect,input,
}

export interface IActionItem{
    name?:string;
icon_name:string;
tooltip:string;
hasCustomTemplate?:boolean
}
export interface IActionEvent<T>{
    name:string;
    data:T;
}
export interface ISortInfo{
    fieldName:string;
    sortDirection:SortDirection;
}
export interface IPagingInfo{
    serverSidePaging:boolean;
    pagingSizes:number[];
    defaultpageSize:number;
    pageLength?:number;
    selectedPageIndex?:number;
}
export const sortDirectionAsc:string="asc";
export const sortDirectionDesc:string="desc";

