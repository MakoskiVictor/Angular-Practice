import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
// Para inyección de dependencias
/* import { UtilitiesService } from './services/utilities.service'; */
// Para requsts http
import { HttpClientModule } from '@angular/common/http'
import { CoreModule } from './modules/core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Para usar requsts http en todo el modulo
    CoreModule
  ],
  /*   providers: [UtilitiesService], */
  bootstrap: [AppComponent]
})
export class AppModule { }
