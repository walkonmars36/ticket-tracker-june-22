import React, {useState} from "react";
import "./App.scss";
import teamMembers from "./data/team";

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import {faSleigh} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [AddEmployeeForm, setAddEmployeeForm] = useState(false);
  const [team, setTeam] = useState(teamMembers);

  const handleAddMember = (e) => {
    e.preventDefault();

    const newMember = {
      id: team.length + 1,
      name: e.target[1].value,
      role: e.target[2].value,
    };

    setTeam([...team, newMember]);
    setAddEmployeeForm(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setAddEmployeeForm(false);
  };

  const toggleAddEmployee = () => {
    setAddEmployeeForm(!AddEmployeeForm);
  };

  const getEmployeeCard = (team) => (
    <div key={team.id}>
      <EmployeeCard team={team} />
    </div>
  );

  return (
    <>
      <HeaderSection toggleForm={toggleAddEmployee} />
      {AddEmployeeForm && <AddEmployee handleAddMember={handleAddMember} handleCancel={handleCancel} />}

      <div className="content">{team.map(getEmployeeCard)}</div>
    </>
  );
};

export default App;
