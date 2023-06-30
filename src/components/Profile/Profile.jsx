import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';

const Profile = () => {
  const { user } = useSelector(userSelector);

  console.log('Profile');

  return (
    <div>{user.name ? user.name : user.username}</div>
  );
};

export default Profile;
