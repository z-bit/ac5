# adding Material2 to webpack-starter

[back to README](../README.md)

This turned out to be really easy (so far!)

* npm install @angular2-material/core

* npm install @angular2-material/button (.. /card, /input)

* the point below is superseded by [creating a MaterialModule](addMaterialModule.md)

* edit app/app.module.ts
    * insert an import line for each module like **import { MdButtonModule } from "@angular2-material/button";**    
    * list them modules in the inputs array of the ngModule - like this:<br>
      &nbsp;&nbsp;&nbsp;&nbsp;ngModule({<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      inputs: [<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          ...<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          **MdButtonModule**,<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          ...<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      ]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;  })<br>
