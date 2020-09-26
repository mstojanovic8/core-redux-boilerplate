import React, { useEffect, memo } from 'react';
import { useDispatch } from 'react-redux';
import { getSingleUser } from '../redux/actions/users';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleUser(1));
  }, []);

  return (<div>App</div>);
};

export default memo(Home);
