import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ContadorReduxComponent } from './contador-redux/contador-redux.component'
import { ContadorComponent} from './contador/contador.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [
  {
    path: 'redux',
    component: ContadorReduxComponent
  },
  {
    path: 'contador',
    component: ContadorComponent
  },
  {
    path: 'tareas',
    component: TareasComponent
  }

]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }