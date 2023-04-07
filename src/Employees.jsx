import Teams from './Teams.jsx';
import TeamMembers from './TeamMembers.jsx';

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
  
  return (
    <div>
      <div className='container'>
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-6">
            <Teams selectedTeam={selectedTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
          </div>
        </div>
      </div>
    
      <div className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <div className="card-collection">
                <TeamMembers employees={employees} 
                             selectedTeam={selectedTeam} 
                             handleEmployeeCardClick={handleEmployeeCardClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees