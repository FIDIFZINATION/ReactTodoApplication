import './App.css';
import MenuItems from './restaurant/components/MenuItems';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import TodoApp from './todoApp/components/TodoApp';

function App() {
  return (
   <>
   {/* <MenuItems/> // For restaurant App */}
   <TodoApp/>
   </>
  );
}

export default App;
