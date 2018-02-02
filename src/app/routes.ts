import { MemberEditResolver } from './_resolvers/member-edit.resolver';
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { StrukturaComponent } from './struktura/struktura.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { CsvComponent } from './csv/csv.component';
import { RwaComponent } from './rwa/rwa.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-chages.guard';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    {
      path: '',
      runGuardsAndResolvers: 'always',
      canActivate: [AuthGuard],
      children: [
          { path: 'members', component: MemberListComponent, resolve: {users: MemberListResolver} },
          { path: 'members/:id', component: MemberDetailComponent, resolve: {user: MemberDetailResolver}},
          { path: 'member/edit', component: MemberEditComponent,
                resolve: { user: MemberEditResolver}, canDeactivate: [PreventUnsavedChanges] },
          { path: 'csv', component: CsvComponent },
          { path: 'struktura', component: StrukturaComponent},
          { path: 'rwa', component: RwaComponent }
      ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
