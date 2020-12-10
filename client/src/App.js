import AppNavbar from './components/AppNavbar';
import TodosList from './components/TodosList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <TodosList />
    </div>
  );
}

export default App;
