import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SpTableComponent } from './components/sp-table/sp-table.component'
import { ComponentLoaderComponent } from './components/component-loader/component-loader.component'
@NgModule({
  declarations: [
    AppComponent,
    SpTableComponent,
    ComponentLoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
