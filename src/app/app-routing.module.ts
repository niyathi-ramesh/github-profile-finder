import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollComponent } from './pages/enroll/enroll.component';

import { IntroductionComponent } from './pages/introduction/introduction.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: 'introduction',
    component: IntroductionComponent,
    data: { animation: 'IntroductionPage' },
  },
  {
    path: 'enroll',
    component: EnrollComponent,
    data: { animation: 'EnrollPage' },
  },
  {
    path: 'search',
    component: SearchComponent,
    data: { animation: 'SearchPage' },
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: '',
    redirectTo: 'introduction',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'introduction',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
