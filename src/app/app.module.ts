import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { DashComponent } from './dash/dash.component';
import { VedioComponent } from './vedio/vedio.component';
import { CycleComponent } from './cycle/cycle.component';
import { BikeComponent } from './bike/bike.component';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { SubmitComponent } from './submit/submit.component';
import { OlduserComponent } from './olduser/olduser.component';
import { NewComponent } from './new/new.component';
import { RateComponent } from './rate/rate.component';
import { ReComponent } from './re/re.component';
import { YamahaComponent } from './yamaha/yamaha.component';
import { UpdateComponent } from './update/update.component';
import { Rec350Component } from './rec350/rec350.component';
import { Reb350Component } from './reb350/reb350.component';
import { RecsComponent } from './recs/recs.component';
import { MapComponent } from './map/map.component';
import { ServicesComponent } from './services/services.component';
import { HistoryComponent } from './history/history.component';
import { BookingComponent } from './booking/booking.component';
import { RebrandDirective } from './rebrand.directive';
import { RebrandComponent } from './rebrand/rebrand.component';
import { PaymentComponent } from './payment/payment.component';
import { FoterComponent } from './foter/foter.component';
import { ImageComponent } from './image/image.component';
import { NewsComponent } from './news/news.component';
import { RelocComponent } from './reloc/reloc.component';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    DashComponent,
    VedioComponent,
    CycleComponent,
    BikeComponent,
    SignComponent,
    LoginComponent,
    UserComponent,
    SubmitComponent,
    OlduserComponent,
    NewComponent,
    RateComponent,
    ReComponent,
    YamahaComponent,
    UpdateComponent,
    Rec350Component,
    Reb350Component,
    RecsComponent,
    MapComponent,
    ServicesComponent,
    HistoryComponent,
    BookingComponent,
    RebrandDirective,
    RebrandComponent,
    PaymentComponent,
    FoterComponent,
    ImageComponent,
    NewsComponent,
    RelocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
