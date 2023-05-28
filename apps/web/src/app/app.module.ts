
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { CardComponent } from './card/card/card.component';
import { NgxDynamicHeadingsModule } from 'ngx-dynamic-headings';

@NgModule({
  declarations: [AppComponent, CardComponent],
  imports: [
    BrowserModule,
    NgxDynamicHeadingsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
