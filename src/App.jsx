import React from "react";
import "./App.scss";
import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import teamMember from "./data/team";

const App = () => {
  const getEmployeeCard = (teamMember) => (
    <div key={teamMember.id}>
      <EmployeeCard teamMember={teamMember} />
    </div>
  );

  return (
    <>
      <div className="content">{teamMember.map(getEmployeeCard)}</div>
    </>
  );
};

export default App;
