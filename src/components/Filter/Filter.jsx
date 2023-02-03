import { useDispatch } from 'react-redux';

import { setFilter } from 'redux/filterSlice';
import { Box } from '../Box';
import { FindLabel, FindInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };

  return (
    <Box display="flex" flexDirection="column" mb="20px">
      <FindLabel htmlFor="text">Find contacts by name</FindLabel>
      <FindInput type="text" id="text" onChange={handleChange} />
    </Box>
  );
};
