import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule
  ]
})
export class SharedModule { }
