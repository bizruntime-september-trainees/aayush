import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DummyComponent } from './dummy-component';
import { JsonSchemaFormModule } from '@ajsf/core'
import { Bootstrap3FrameworkModule,} from '@ajsf/bootstrap3';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    Bootstrap3FrameworkModule,
    JsonSchemaFormModule,
      (Bootstrap3FrameworkModule),
    ReactiveFormsModule

  ],
  declarations: [AppComponent, HelloComponent, DummyComponent],
  bootstrap: [AppComponent],
  entryComponents: [DummyComponent],
})
export class AppModule {}
