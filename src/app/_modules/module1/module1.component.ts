import { Component } from '@angular/core';

@Component({
    selector: 'module1',

    template: `<div>
        <md-toolbar color="accent">
            <a md-button [routerLink]=" ['/module1'] "> Module1 </a>
            <span class="fill-space"></span>
            <a md-button [routerLink]=" ['./component1']"> Component1 </a>
            <a md-button [routerLink]=" ['./component2'] "> Component2 </a>

            <a md-button [routerLink]=" ['/home'] "> Home </a>
        </md-toolbar>
        <h1>Hello from Module1</h1>

        <router-outlet></router-outlet>

    </div>`
})
export class Module1Component {}
