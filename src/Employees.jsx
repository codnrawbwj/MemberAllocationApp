import femaleProfile from './images/female.png'
import maleProfile from './images/male.png'

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamSelectionChange}) => {
  
  return (
    <div>
      <div className='container'>
        <div className="row justify-content-center mt-3 mb-3" value={selectedTeam} onChange={handleTeamSelectionChange}>
          <div className="col-6">
            <select className="form-select form-select-lg">
              <option value='TeamA'>Team A</option>
              <option value='TeamB'>Team B</option>
              <option value='TeamC'>Team C</option>
              <option value='TeamD'>Team D</option>
            </select>
          </div>
        </div>
      </div>
    
      <div className="container">
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-8">
            <div className="card-collection">
              {
                employees.map((employee) => (
                  <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor: 'pointer'}} onClick={handleEmployeeCardClick}>
                    {(employee.gender === 'female')?
                    <img src={femaleProfile} className='card-img-top' />:
                    <img src={maleProfile} className='card-img-top' />}
                    <div className='card-body'>
                      <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                      <p className='card-text'><b>Designation: </b>{employee.designation}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employees