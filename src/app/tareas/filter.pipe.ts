import { Pipe, PipeTransform } from '@angular/core';
import { Tareas } from './models/tareas.model';
import { filtersValid } from './tareas.actions';

@Pipe({
  name: 'filterPipe'
})


export class FilterPipe implements PipeTransform {

  transform(tareas: Tareas[], filter: filtersValid): Tareas[] {

    switch (filter) {
      case 'All':
        return tareas;

      case 'Done':
        return tareas.filter(tarea => tarea.completado);

      case 'Todo':
        return tareas.filter(tarea => !tarea.completado);

      default:
        return tareas;
    }
  }

}
