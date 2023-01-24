import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector:'[actionItem]'
})
export class ActionItemDirective{
    constructor(public template:TemplateRef<any>){}
}