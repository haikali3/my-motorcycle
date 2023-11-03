import logo from './logo.svg';
import './App.css';
import MotorForm from './components/MotorForm';
import MotorList from './components/MotorList';
import MotorSearch from './components/MotorSearch';
import MotorValue from './components/MotorValue';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MotorForm />
        <MotorList />
        <MotorValue />
        <MotorSearch />
      </header>
    </div>
  );
}

export default App;
