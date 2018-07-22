import { Routes } from "@angular/router";
import { IndexComponent } from './app/index/index.component';
import { AboutComponent } from './app/about/about.component';
import { CareersComponent } from './app/careers/careers.component';
import { ContactComponent } from './app/contact/contact.component';
import { NewsComponent } from './app/news/news.component';

export const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'news', component: NewsComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full'}
];