import React from 'react';
// import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
const UserProfile = () => {
  const { currentUser} = useSelector((state) => state.users)
  
  return (
    <div>
      {/* {currentUser.email} */}
    </div>
  );
}

export default UserProfile;
