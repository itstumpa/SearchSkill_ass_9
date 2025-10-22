import React from 'react';
import { useParams } from 'react-router';

const SkillDetails = () => {
  const { id } = useParams();

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold">Skill Details Page</h1>
      <p>Showing details for Skill ID: {id}</p>
    </div>
  );
};

export default SkillDetails;
