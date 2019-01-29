import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatCardModule,
  MatGridListModule,
  MatTabsModule,
  MatButtonModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';



@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    FlexLayoutModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule
  ]
})
export class SharedModule { }
