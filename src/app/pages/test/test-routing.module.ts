import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route } from '../../core/route.service';
import { TestComponent } from './test.component';

const routes: Routes = Route.withShell([
  { path: '', redirectTo: '/test', pathMatch: 'full' },
  { path: 'test', component: TestComponent, data: { title: 'Test' } }
]);

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TestRoutingModule { }
