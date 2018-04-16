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
    path: 'user-subscription-report',
    loadChildren: './+user-subscription-report/user-subscription-report.module#ViewUserSubscriptionReportModule',
  },
  {
    path: 'daily-subscription-report',
    loadChildren: './+daily-subscription-report/daily-subscription-report.module#ViewDailySubscriptionReportModule',
  },
  {
    path: 'search-report',
    loadChildren: './+search-report/search-report.module#ViewSearchReportModule',
  },
  {
    path: 'renew-details',
    loadChildren: './+renew-details/renew-details.module#RenewDetailsModule',
  },
  {
    path: 'change-password',
    loadChildren: './+change-password/change-password.module#ChangePasswordModule',
  },
  {
    path: 'create-map',
    loadChildren: './+create-map/create-map.module#CreateMapModule',
  },
  {
    path: 'renew-map',
    loadChildren: './+renew-map/renew-map.module#RenewMapModule',
  },
  {
    path: 'renew-mapp',
    loadChildren: './+renew-selected-map/renew-selected-map.module#RenewSelectedMapModule',
  },
  
  {
    path: 'update-details',
    loadChildren: './+edit-profile/edit-profile.module#EditProfileModule',
  },


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
