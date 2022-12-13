import Todo from './Todo';
import Todos from './todos';

function App() {
  
  return (
    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <div className="flex flex-row justify-between items-center">
            <div>
                <h1 className="text-3xl font-medium">📝 To-do list</h1>
            </div>
        </div>
        <div id="tasks" className="my-5">
          {Todos.map( todo => <Todo title={todo.title} completed={todo.completed} /> )}
        </div>
        <p className="text-xs text-slate-500 text-center">Developed by <span className="font-bold">WD29</span></p>
    </div>
  );

}

export default App;