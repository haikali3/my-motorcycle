import { useDispatch, useSelector } from 'react-redux';
import { changeSearchTerm } from '../store';

function MotorSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.motors.searchTerm;
  });

  const handleSearchTermChange = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-4">My Motorcycle</h3>
      <div>
        <label className="label"></label>
        <input
          className="input"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default MotorSearch;
