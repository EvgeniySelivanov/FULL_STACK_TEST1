import React from "react";
import {useSelector} from 'react-redux';
import GroupsSection from "../components/GroupsSection";


const GroupsPage = (props) => {
  const {groups,error,isFetching}=useSelector((state)=>state.groups);
  return (
    <div>
      <GroupsSection />
      {groups.map((group)=>(
      <img key={group.id} alt={group.name} src={`http://localhost:3000/images/${group.imagePath}`}/>
      )
      )}
    </div>
  );
}
export default GroupsPage;