import PostList from './components/PostList';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Add new post:</h3>
        <PostList />
      </div>
    </Provider>
  );
}

export default App;
