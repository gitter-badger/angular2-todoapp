import {Component, bootstrap} from 'angular2/angular2';
import {TodoList} from './components/todo-list/todo-list';

@Component({
  selector: 'todoapp-app',
  providers: [],
  templateUrl: 'app/todoapp.html',
  directives: [TodoList],
  pipes: []
})
export class TodoappApp {

  constructor() {}

}
