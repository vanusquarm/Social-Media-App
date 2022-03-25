import React from 'react';
import classNames from 'classnames';
import './Table.css'
import team_2 from '../assets/team-2.jpg'
//import Data from '../data/Data.json'

export default function EmployeeTable({name, email, picture}) {

  return( <>
  <tr>
    <td>
      <div className="d-flex px-2 py-1">
        <div>
          <img src={picture} className="avatar avatar-sm me-3 border-radius-lg" alt="user1"/>
        </div>
        <div className="d-flex flex-column justify-content-center">
          <h6 className="mb-0 text-sm">{name}</h6>
          <p className="text-xs text-secondary mb-0">{email}</p>
        </div>
      </div>
    </td>
    <td>
      <p className="text-xs font-weight-bold mb-0">Manager</p>
      <p className="text-xs text-secondary mb-0">Organization</p>
    </td>
    <td className="align-middle text-center text-sm">
      <span className="badge badge-sm bg-gradient-success">Online</span>
    </td>
    <td className="align-middle text-center">
      <span className="text-secondary text-xs font-weight-bold">23/04/18</span>
    </td>
    <td className="align-middle">
      <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
        Edit
      </a>
    </td>     
  </tr>
  </>
  );
}
