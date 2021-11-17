import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home-page/home-page.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomePageModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
