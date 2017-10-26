import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KegDisplayComponent} from './keg-display/keg-display.component'

const appRoutes: Routes = [
  {
    path:'',
    component: KegDisplayComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
