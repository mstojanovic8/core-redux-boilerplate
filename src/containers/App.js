import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getSingleUser } from '../redux/actions/users';

const App = ({ userId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(userId));
  }, []);

  return (<div>App</div>);
};

App.propTypes = {
  userId: PropTypes.number.isRequired
};
export default memo(App);
