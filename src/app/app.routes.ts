import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PeopleEditComponent } from './components/people-edit/people-edit.component';
import { PeopleDeleteComponent } from './components/people-delete/people-delete.component';
import { PeopleAddComponent } from './components/people-add/people-add.component';

export const routes: Routes = [
    { path: '', component: PeopleListComponent },
    { path: 'add', component: PeopleAddComponent },
    { path: 'edit/:id', component: PeopleEditComponent },
    { path: 'delete/:id', component: PeopleDeleteComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
