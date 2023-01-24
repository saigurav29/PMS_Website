import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomMaterialModule } from '../Module/custom-material.module';

@NgModule({
    imports:[
        CommonModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule,
        CustomMaterialModule
    ]
})
export class ControlsModule{}

