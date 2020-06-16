import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
   
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }
  
  // set dynamic classes

  setClasses() {
    let classes = {
      todo:true,
      'is-complete':   this.todo.completed
    }
    return classes;
  }

  onToggle(todo) {
    // toggle in UI
    todo.completed = !todo.completed;

    // toggle in server
    this.todoService.toggleCompleted(todo).subscribe();
    
  }

  onDelete(todo) {
    console.log('Delete'); 
  }

}
