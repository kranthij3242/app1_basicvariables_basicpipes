import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { BasicvariablesComponent } from './basicvariables/basicvariables.component';
import { BasicpipesComponent } from './basicpipes/basicpipes.component';
import { BasicstructuraldirectivesComponent } from './basicstructuraldirectives/basicstructuraldirectives.component';
import { AddsubtitlePipe } from './addsubtitle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    BasicvariablesComponent,
    BasicpipesComponent,
    BasicstructuraldirectivesComponent,
    AddsubtitlePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
