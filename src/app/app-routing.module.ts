import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'martenal', loadChildren: './martenal/martenal.module#MartenalPageModule' },
  { path: 'baby', loadChildren: './baby/baby.module#BabyPageModule' },
  { path: 'defects', loadChildren: './defects/defects.module#DefectsPageModule' },
  { path: 'infections', loadChildren: './infections/infections.module#InfectionsPageModule' },
  { path: 'mother-conditions', loadChildren: './mother-conditions/mother-conditions.module#MotherConditionsPageModule' },
  { path: 'mother-physical', loadChildren: './mother-physical/mother-physical.module#MotherPhysicalPageModule' },
  { path: 'updated', loadChildren: './updated/updated.module#UpdatedPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
