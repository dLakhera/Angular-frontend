import { Routes} from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component'
import { DishDetailsComponent } from '../dish-details/dish-details.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: 'menu', component: MenuComponent },
    { path:'dishDetails/:id', component:DishDetailsComponent },
    { path: 'aboutus', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
];