import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustodiansRoutingModule } from './custodians-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [CreateComponent, EditComponent],
  imports: [
    CommonModule,
    CustodiansRoutingModule
  ]
})
export class CustodiansModule { }
