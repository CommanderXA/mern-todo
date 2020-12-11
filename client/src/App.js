import AppNavbar from './components/AppNavbar';
import TodosList from './components/TodosList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <TodosList />
        </Container>
    </div>
    </Provider>
  );
}

export default App;
