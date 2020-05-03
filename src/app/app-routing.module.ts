import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashComponent } from './dash/dash.component';
import { SignComponent } from './sign/sign.component';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { OlduserComponent } from './olduser/olduser.component';
import { NewComponent } from './new/new.component';
import { VedioComponent } from './vedio/vedio.component';
import { BikeComponent } from './bike/bike.component';
import { RateComponent } from './rate/rate.component';
import { CycleComponent } from './cycle/cycle.component';
import { ReComponent } from './re/re.component';
import { UpdateComponent } from './update/update.component';
import { Rec350Component } from './rec350/rec350.component';
import { Reb350Component } from './reb350/reb350.component';
import { RecsComponent } from './recs/recs.component';
import { MapComponent } from './map/map.component';
import { ServicesComponent } from './services/services.component';
import { HistoryComponent } from './history/history.component';
import { BookingComponent } from './booking/booking.component';
import { RebrandComponent } from './rebrand/rebrand.component';
import { PaymentComponent } from './payment/payment.component';
import { FoterComponent } from './foter/foter.component';
import { ImageComponent } from './image/image.component';
import { NewsComponent } from './news/news.component';
import { YamahaComponent } from './yamaha/yamaha.component';
import { RelocComponent } from './reloc/reloc.component';
 

const routes: Routes = [
  {
    path:'',
    component:DashComponent
},
{
    path:'sign',
    component:SignComponent
},
{
    path:'submit',
    component:SubmitComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'user',
    component:UserComponent
},
{
    path:'olduser',
    component:OlduserComponent
},
{
    path:'new',
    component:NewComponent
},
{
    path:'vedio',
    component:VedioComponent
},
{
    path:'bike',
    component:BikeComponent
},
{
    path:'rate',
    component:RateComponent
},
{
    path:'cycle',
    component:CycleComponent
},
{
    path:'re',
    component:ReComponent
},
{
    path:'update',
    component:UpdateComponent
},
{
    path:'rec350',
    component:Rec350Component
},
{
    path:'reb350',
    component:Reb350Component
},
{
    path:'recs',
    component:RecsComponent
},
{
    path:'map',
    component:MapComponent
},
{
    path:'services',
    component:ServicesComponent
},
{
    path:'history',
    component:HistoryComponent
},
{
    path:'booking',
    component:BookingComponent
},
{
    path:'rebrand',
    component:RebrandComponent
},
{
    path:'payment',
    component:PaymentComponent
},
{
    path:'foter',
    component:FoterComponent
},
{
    path:'image',
    component:ImageComponent
},
{
    path :'news',
    component:NewsComponent
},
{
    path :'yamaha',
    component:YamahaComponent
},
{
    path:'reloc',
    component:RelocComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
