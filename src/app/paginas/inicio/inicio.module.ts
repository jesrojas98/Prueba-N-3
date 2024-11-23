import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { CartaInicioComponent } from 'src/app/componentes/carta-inicio/carta-inicio.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClimaServiceService } from '../../servicio/clima-service.service';
import { BarraClimaComponent } from 'src/app/componentes/barra-clima/barra-clima.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    HttpClientModule
  ],
  providers: [ClimaServiceService],
  declarations: [InicioPage, CartaInicioComponent, BarraClimaComponent],
})
export class InicioPageModule {}
