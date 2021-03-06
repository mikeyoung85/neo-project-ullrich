import { Routes, RouterModule } from '@angular/router';
import { NgModule } 			from '@angular/core';

import { UsersComponent } 	from '../users/users.component';

import { TeamsComponent } 	from '../teams/teams.component';
import { TeamDetailComponent } from '../teams/detail/detail.component';

import { AdminComponent } 	from '../admin/admin.component';
import { LoginComponent } 	from '../login/login.component';
import { CreateEntryComponent } from '../teams/detail/create-entry/create-entry.component';

const routes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'profile', component: UsersComponent },
	
	{ path: 'team', component: TeamsComponent },
	{ path: 'team/:team_id', component: TeamDetailComponent },
	{ path: 'team/:team_id/entry', component: CreateEntryComponent},
	
	// TODO: Create component where managers can edit their team information.
	// { path: 'team/:team_id/edit', component: TeamsComponent},

	{ path: 'admin', component: AdminComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports: [RouterModule]
} )

export class AppRoutingModule {}
