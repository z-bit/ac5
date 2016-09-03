import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from '../../home/home.component';
import { Module1Component } from './module1.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/conponent2.component';

const routes: Routes = [
    {
        path: 'module1',
        component: Module1Component,
        children: [
            { path: 'component1', component: Component1Component },
            { path: 'component2', component: Component2Component }
        ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
