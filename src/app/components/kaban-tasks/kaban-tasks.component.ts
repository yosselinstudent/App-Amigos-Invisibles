import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import {ITask, LEVELS} from '../../models/task.interface';


@Component({
  selector: 'app-kaban-tasks',
  templateUrl: './kaban-tasks.component.html',
  styleUrls: ['./kaban-tasks.component.scss'],
})
export class KabanTasksComponent {

  todoTask:ITask[]=[
    {
     title: 'Animaciones',
     description: 'Aprender animaciones en Angular',
     completed: false,
     level:LEVELS.INFO,
    },
    {
      title: 'Angula CLI',
      description: 'Aprender comandos y configuraciones en Angular CLI',
      completed: false,
      level:LEVELS.URGENT,
     },
     {
      title: 'Build ',
      description: 'Aprender a generar Build en Angular CLI',
      completed: false,
      level:LEVELS.BLOCKING,
     },
     {
      title: 'Deploy',
      description: 'Aprender ',
      completed: false,
      level:LEVELS.BLOCKING,
     }

  ];

  doneTask: ITask[]=[
    {
      title: 'Configuracion IDE',
      description: 'Configurar e instalar plugins en Visual Studio Code',
      completed: true,
      level:LEVELS.BLOCKING,
     },
     {
       title: 'Instalar Angular',
       description: 'Aprender a instalar con npm el Angular CLI',
       completed: true,
       level:LEVELS.BLOCKING,
      },
      {
       title: 'Hola Mundo',
       description: 'Crear con Angular CLI proyecto inicial',
       completed: true,
       level:LEVELS.URGENT,
      }
  ];

  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      event.previousContainer.data[event.previousIndex].completed= !event.previousContainer.data[event.previousIndex].completed;
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
