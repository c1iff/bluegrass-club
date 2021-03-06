import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { AdminComponent } from './admin/admin.component';
import { ShowDetailComponent } from './show-detail/show-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
    path: 'new-member',
    component: NewMemberComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'shows/:id',
    component: ShowDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
