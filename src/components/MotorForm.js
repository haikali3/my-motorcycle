import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addMotor } from '../store';

function MotorForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleCostChange = (event) => {
    const motorCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(motorCost));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addMotor({ name, cost }));
    dispatch(changeCost(0));
    dispatch(changeName(''));
  };

  return (
    <div className="motor-form panel">
      <h4 className="subtitle is-3">Add Motorcycle</h4>
      <form action="" onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
              type="text"
            />
          </div>

          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ''}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MotorForm;
