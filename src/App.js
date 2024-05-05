import { Provider } from 'react-redux';
import './App.css';
import Home from './components/Home';
import jobStore from './components/utils/jobStore';

function App() {
  return (
    <>
      <Provider store={jobStore}>
        <Home/>
      </Provider>
    </>
  );
}

export default App;
