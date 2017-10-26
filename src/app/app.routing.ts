import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KegDisplayComponent} from './keg-display/keg-display.component'
import { AdminComponent} from './admin/admin.component'

const appRoutes: Routes = [
  {
    path:'',
    component: KegDisplayComponent
  },
  {
    path:'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
