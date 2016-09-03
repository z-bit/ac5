import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { NoContent } from './no-content';

import { Module1Component } from './_modules/module1/module1.component';

import { DataResolver } from './app.resolver';

// AngularClass
// import { provideWebpack } from '@angularclass/webpack-toolkit';
// import { providePrefetchIdleCallbacks } from '@angularclass/request-idle-callback';


export const ROUTES: Routes = [
  { path: '',      component: Home },
  { path: 'home',  component: Home },
  { path: 'about', component: About },
  { path: 'module1', component: Module1Component },
  {
    path: 'detail', loadChildren: () => require('es6-promise-loader!./+detail')('default')
  },
  { path: '**',    component: NoContent },
];
