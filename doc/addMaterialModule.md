#Material Module

[back to README](../README.md)<br>
[back to adding Material 2](addMaterial.md)

* create folder **app/_modules/material**, _ for keeping **modules** on the top of the list in the app folder
* create ***material.module.ts***:

<pre><code>

    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
        
    import { MdCoreModule } from '@angular2-material/core';
    import { MdButtonModule } from '@angular2-material/button';
    ...;
    import { MdTooltipModule } from '@angular2-material/tooltip';
    
    @NgModule({
        imports: [
            MdCoreModule,
            MdButtonModule,
            ...,
            MdTooltipModule
        ],
        exports: [
            MdCoreModule,
            MdButtonModule,
            ...,
            MdTooltipModule
        ]
    })
    export class MaterialModule {}
    
</code></pre>

* all 19 Md..Modules can now be imported by just importing ***MaterialModule***
* Example ***app/app.module.ts***:

<pre><code>

    <b>import { MaterialModule } from './_modules';</b> // instead of importing all 19 Md...Modules    
    ...
    @NgModule({
        ...
        imports: [
            ...,
            <b>MaterialModule</b> // instead of importing all 19 Md...Modules
        ],
        ...
    })
    export class AppModule {...} 
    
</code></pre>    