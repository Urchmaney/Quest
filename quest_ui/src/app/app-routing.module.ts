import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './guards/logged-in.guard';
import { DashboardComponent } from './pages/private/dashboard/dashboard.component';
import { QuestionDetailComponent } from './pages/private/question-detail/question-detail.component';
import { HomeComponent } from './pages/public/home/home.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';
import { APP_DASHBOARD_URL, APP_LOGIN_URL, APP_QUESTION_URL, APP_REGISTER_URL } from './utils/constants';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: APP_LOGIN_URL, component: LoginComponent },
  { path: APP_REGISTER_URL, component: RegisterComponent },
  { path: APP_DASHBOARD_URL, component: DashboardComponent, canActivate: [LoggedInGuard] },
  { path: `${APP_QUESTION_URL}/:id`, component: QuestionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
