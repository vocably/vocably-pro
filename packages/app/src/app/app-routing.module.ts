import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { CallbackComponent } from './auth/pages/callback/callback.component';

const routes: Routes = [
  {
    path: 'cb',
    component: CallbackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AuthModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
