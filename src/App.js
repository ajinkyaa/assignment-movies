import { Provider } from 'react-redux';

import SearchAndSort from './components/SearchAndSort';
import store from './redux/store';
import Movies from './components/Movies';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div data-testid="app-container" className='app-container'>
        <SearchAndSort />
        <Movies />
      </div>
    </Provider>
  );
}

export default App;
