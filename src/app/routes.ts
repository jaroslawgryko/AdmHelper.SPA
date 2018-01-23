import { StrukturaComponent } from './struktura/struktura.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { CsvComponent } from './csv/csv.component';
import { RwaComponent } from './rwa/rwa.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
          { path: 'members', component: MemberListComponent },
          { path: 'members/:id', component: MemberDetailComponent},
          { path: 'csv', component: CsvComponent },
          { path: 'struktura', component: StrukturaComponent},
          { path: 'rwa', component: RwaComponent }
      ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
