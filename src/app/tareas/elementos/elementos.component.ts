import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Tareas } from '../models/tareas.model';
import { completed, edit, remove } from '../tareas.actions';

@Component({
  selector: 'app-elementos',
  templateUrl: './elementos.component.html',
  styleUrls: ['./elementos.component.scss']
})
export class ElementosComponent implements OnInit {

  @Input() tarea: Tareas
  @ViewChild('inputEdit') textEdit: ElementRef

  chkCompletado: FormControl;
  txtInput: FormControl;
  editar: boolean = false

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.chkCompletado = new FormControl(this.tarea.completado)
    this.txtInput = new FormControl(this.tarea.text, Validators.required)

    this.chkCompletado.valueChanges.subscribe(value => {
      this.store.dispatch(completed({ id: this.tarea.id }))
    })
  }

  ActivedEdit() {
    this.editar = true;

    setTimeout(() => {
      this.textEdit.nativeElement.select();
    }, 1);

  }

  saveEdit() {
    this.editar = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.tarea.text) { return; }
    this.store.dispatch(edit({ id: this.tarea.id, tarea: this.txtInput.value }))
  }

  removeElement(){

    console.log('entro')
    this.store.dispatch(remove({id: this.tarea.id}))
  }


}
