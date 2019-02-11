import { NgModule } from '@angular/core';
import {
    MatFormFieldModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    exports: [
        MatFormFieldModule,
        MatSelectModule
    ]
})
export class MaterialModule { }
