import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { add } from '../tareas.actions';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  textInput: FormControl

  constructor(private store: Store<AppState>) {

    this.textInput = new FormControl('', Validators.required)
  }

  ngOnInit(): void {
  }

  agregar() {

    if (this.textInput.invalid) { return; }
    this.store.dispatch(add({ tarea: this.textInput.value }))
    this.textInput.reset()
  }

}
