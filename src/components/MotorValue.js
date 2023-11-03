import { useSelector } from 'react-redux';

function MotorValue() {
  const totalCost = useSelector(({ motors: { data, searchTerm } }) =>
    data
      .filter((motor) =>
        motor.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, motor) => acc + motor.cost, 0)
  );

  return <div className="motor-value">Total: RM{totalCost}</div>;
}

export default MotorValue;
