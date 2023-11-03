import './App.css';
import MotorForm from './components/MotorForm';
import MotorList from './components/MotorList';
import MotorSearch from './components/MotorSearch';
import MotorValue from './components/MotorValue';

function App() {
  return (
    <div className="container is-fluid">
      <MotorForm />
      <MotorSearch />
      <MotorList />
      <MotorValue />
    </div>
  );
}

export default App;
