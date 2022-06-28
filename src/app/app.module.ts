import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HijoComponent } from './contador/hijo/hijo.component';
import { NietoComponent } from './contador/nieto/nieto.component';
import { ContadorReduxComponent } from './contador-redux/contador-redux.component';
import { NietooComponent } from './contador-redux/nieto/nieto.component';
import { HijooComponent } from './contador-redux/hijo/hijo.component';
import { AppRoutingModule } from './app-routing.module';
import { ContadorComponent } from './contador/contador.component';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TareasComponent } from './tareas/tareas.component';
import { TareasModule } from './tareas/tareas.module';
import { AppReducers } from './app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent,
    ContadorReduxComponent,
    NietooComponent,
    HijooComponent,
    ContadorComponent,
    TareasComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TareasModule,
    AppRoutingModule,
    BrowserModule,
    StoreModule.forRoot(AppReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
