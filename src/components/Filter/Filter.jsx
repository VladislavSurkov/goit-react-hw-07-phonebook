import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from '../../redux/contactsFetch';
import { Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilterInput = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <label>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilterInput}
        placeholder="Find contacts by name"
      />
    </label>
  );
};
