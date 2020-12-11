import AppNavbar from './components/AppNavbar';
import TodosList from './components/TodosList';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <TodosList />
    </div>
    </Provider>
  );
}

export default App;
