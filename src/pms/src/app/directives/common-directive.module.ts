import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ActionItemDirective } from "./action-item.directive";
import { CellItemDirective } from "./cell-item.directive";

@NgModule({
    declarations:[CellItemDirective,ActionItemDirective],
    imports:[CommonModule],
    exports:[CellItemDirective,ActionItemDirective]
})
export class CommonDirectivesModule{}