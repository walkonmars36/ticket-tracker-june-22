import React, {useState} from "react";
import "./App.scss";
import teamMembers from "./data/team";

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import AddEmployee from "./components/AddEmployee/AddEmployee";

const App = () => {
  const [AddEmployeeForm, setAddEmployeeForm] = useState(false);
  const [team, setTeam] = useState(teamMembers);

  const handleAddMember = (e) => {
    console.log(e.target.value);
    const newMember = {
      id: team.length + 1,
      name: e.target.name.value,
      role: e.target.role.value,
    };

    setTeam([...team, newMember]);
    e.target.reset();
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
      {AddEmployeeForm && <AddEmployee handleAddMember={handleAddMember} />}

      <div className="content">{team.map(getEmployeeCard)}</div>
    </>
  );
};

export default App;
