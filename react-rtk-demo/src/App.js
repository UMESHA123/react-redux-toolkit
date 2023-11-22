import './App.css';
import CakeSliceView from './features/cake/CakeSliceView';
import IceCreamView from './features/iceCream/IceCreamView';
import UserView from './features/users/UserView';

function App() {
  return (
    <div className="App">
      <CakeSliceView/>
      <IceCreamView/>
      <UserView/>
    </div>
  );
}

export default App;
