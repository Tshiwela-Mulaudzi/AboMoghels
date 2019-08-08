import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MotherPhysicalPage } from './mother-physical.page';

const routes: Routes = [
  {
    path: '',
    component: MotherPhysicalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MotherPhysicalPage]
})
export class MotherPhysicalPageModule {}
