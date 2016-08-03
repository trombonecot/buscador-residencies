import { provideRouter, RouterConfig }  from '@angular/router';
import { ResidenciesComponent } from './web/residencies.component';


const routes: RouterConfig = [
  {
    path: '',
    component: ResidenciesComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];
