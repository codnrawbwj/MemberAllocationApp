 const Footer = () => {

   var today = new Date();
   
  return (
    <header className='container'>
      <div className='row justify-content-center mt-5 mb-4'>
        <div className='col-8'>
          <h5>Team Allocation App - {today.getFullYear()}</h5>
        </div>
      </div>
    </header>
  )
}

export default Footer