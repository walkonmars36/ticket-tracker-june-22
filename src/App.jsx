import React, {useState} from "react";
import "./App.scss";
import teamMember from "./data/team";

import EmployeeCard from "./components/EmployeeCard/EmployeeCard";
import HeaderSection from "./components/HeaderSection/HeaderSection";
import AddEmployee from "./components/AddEmployee/AddEmployee";

const App = () => {
  const [AddEmployeeForm, setAddEmployeeForm] = useState(false);

  const toggleAddEmployee = () => {
    setAddEmployeeForm(!AddEmployeeForm);
  };

  const getEmployeeCard = (teamMember) => (
    <div key={teamMember.id}>
      <EmployeeCard teamMember={teamMember} />
    </div>
  );

  return (
    <>
      <HeaderSection toggleForm={toggleAddEmployee} />
      {AddEmployeeForm && <AddEmployee />}

      <div className="content">{teamMember.map(getEmployeeCard)}</div>
    </>
  );
};

export default App;
