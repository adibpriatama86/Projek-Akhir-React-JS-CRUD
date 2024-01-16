import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/navbar';
import Cards from './components/card';
import Carousels from './components/carousel';
import Welcome from './components/welcome';
import StateProps from './components/state';
import Map from './components/map';
import Lifecycles from './lifecycle';
import Sublifcycle from './Sublifcycle';

function App() {
  return (
    <div>
      {/* <Navbars />
      <Welcome />
      <Carousels />
      <Cards />
      <StateProps /> */}
      <Map />
      <Lifecycles />
      <Sublifcycle />
    </div>
  );
}

export default App;
