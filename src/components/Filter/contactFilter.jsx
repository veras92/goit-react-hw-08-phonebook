import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/Filter/filterSlice';
import { selectFilter } from 'redux/Filter/selectors';
import { Title, Input, FilterWrapper } from './contactFilter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => dispatch(setFilter(event.target.value));

  return (
    <FilterWrapper>
      <Title>Find a contact 🔎</Title>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterWrapper>
  );
};
