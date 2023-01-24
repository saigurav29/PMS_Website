import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector:'[cellItem]'
})
export class CellItemDirective{
    constructor(public template:TemplateRef<any>) { }
}