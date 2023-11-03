import { useSelector, useDispatch } from 'react-redux';
import { removeMotor } from '../store';

function MotorList() {
  const dispatch = useDispatch();
  const { motors, name } = useSelector(
    ({ form, motors: { data, searchTerm } }) => {
      const filteredMotors = data.filter((motor) =>
        motor.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        motors: filteredMotors,
        name: form.name,
      };
    }
  );

  const handleMotorDelete = (motor) => {
    dispatch(removeMotor(motor.id));
  };

  const renderedMotors = motors.map((motor) => {
    const bold = name && motor.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={motor.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {motor.name} - RM{motor.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleMotorDelete(motor)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="motor-list">
      {renderedMotors}
      <hr />
    </div>
  );
}

export default MotorList;
