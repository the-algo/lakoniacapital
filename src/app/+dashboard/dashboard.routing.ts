import { ModuleWithProviders } from "@angular/core"
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './+home/home.module#HomeModule',
  },
  {
    path: 'view-users',
    loadChildren: './+view-users/view-users.module#ViewUsersModule',
  },
  {
    path: 'view-maps',
    loadChildren: './+view-maps/view-maps.module#ViewMapsModule',
  },
  {
    path: 'activate-user',
    loadChildren: './+activate-user/activate-user.module#ActivateUserModule',
  },
  {
    path: 'view-reports',
    loadChildren: './+view-reports/view-reports.module#ViewReportsModule',
  },
  {
    path: 'renew-details',
    loadChildren: './+renew-details/renew-details.module#RenewDetailsModule',
  },
  {
    path: 'change-password',
    loadChildren: './+change-password/change-password.module#ChangePasswordModule',
  }

  /*   {
      path: 'analytics',
      loadChildren: './+analytics/analytics.module#AnalyticsModule',
  
    }, */
  /*   {
      path: 'social',
      loadChildren: './+social/social.module#SocialModule',
    } */
];

export const routing = RouterModule.forChild(routes);
