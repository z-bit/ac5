import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material';
import { routing } from './module1.routes';

import { Module1Component } from './module1.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/conponent2.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        routing
    ],
    declarations: [
        Module1Component,
        Component1Component,
        Component2Component
    ],
    exports: [
        Module1Component
    ]
})
export class Module1Module {}
