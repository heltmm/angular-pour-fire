import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KegDisplayComponent} from './keg-display/keg-display.component'
import { AdminComponent} from './admin/admin.component'
import { KegDetailComponent} from './keg-detail/keg-detail.component'

const appRoutes: Routes = [
  {
    path:'',
    component: KegDisplayComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'kegs/:tap',
    component: KegDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
