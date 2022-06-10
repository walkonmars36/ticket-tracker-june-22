import React from "react";
import "./App.scss";
import teamMember from "./data/team";

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import AddEmployee from "./components/AddEmployee/AddEmployee";

const App = () => {
  const getEmployeeCard = (teamMember) => (
    <div key={teamMember.id}>
      <EmployeeCard teamMember={teamMember} />
    </div>
  );

  return (
    <>
      <HeaderSection />
      <AddEmployee />

      <div className="content">{teamMember.map(getEmployeeCard)}</div>
    </>
  );
};

export default App;
