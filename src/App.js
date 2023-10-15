import { Provider } from 'react-redux';
import './App.css';
import Header from './Components/Header';
import Body from './Components/body';
import ReduxStore from './Utils/ReduxStore';
import { Outlet} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={ReduxStore}>
        <Header/>
        <Body/>
      </Provider>
    </div>
  );  
}

export default App;
