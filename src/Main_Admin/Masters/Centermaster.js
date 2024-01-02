
import React from 'react';
import AdminDashboard from './Admin_Dashboard/AdminDashboard';

function Centermaster() {
  return (
    <>
      <style>
        {`
        .centermaster-container {
          box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          padding: 20px;
          margin-top: 90px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 90%; 

        }

        .input-group {
          display: flex;
          width: 100%;
          max-width: 500px; /* Adjust as needed */
          align-items: center;
          justify-content: space-between; /* Distributes space between elements */
        }

        .input-group > * {
          flex: 1; /* Gives equal width to children */
        }

        @media (max-width: 768px) {
          .centermaster-container {
            padding: 20px;
          }

          .input-group {
            flex-direction: column; /* Stack elements vertically on small screens */
            align-items: flex-start;
          }

          .input-group > * {
            margin-bottom: 20px; /* Add space between stacked elements */
            flex-basis: auto; /* Auto adjust the width */
          }

          .btn-container {
            display: flex;
            justify-content: center;
            width: 100%;
          }
        }
        `}
      </style>
    
      <AdminDashboard/>
      
      <div className="centermaster-container" style={{marginLeft:'100px'}}>
        <div className="input-group">
          <div style={{marginRight: '10px'}}> {/* Adjust spacing as needed */}
            <h4 style={{fontWeight: 'bold', textShadow: '2px 2px 10px black',marginLeft:'-400px'}}>Center Name *</h4>
            <input type="search" id="form1" className="form-control" style={{marginLeft:'-200px',marginTop:'-40px'}} />
          </div>
          <div style={{marginRight: '10px'}}>
            <h4 style={{fontWeight: 'bold', textShadow: '2px 2px 10px black',marginLeft:'-100px',marginTop:'30px'}}>Active/Inactive *</h4>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
            </div>
          </div>
          <div>
            <button type="button" className="btn btn-success" style={{marginLeft:'50px'}}>Add Center</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Centermaster;
