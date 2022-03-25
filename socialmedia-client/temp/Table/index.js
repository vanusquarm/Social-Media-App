import React, { useState, useEffect } from 'react';
import './Table.css'
import team_2 from '../assets/team-2.jpg'
import EmployeeTable from "../EmployeeTable";

export default function Table() {
  const [employeeList, setEmployeeList] = useState([]);
  //let employeeList = null;
useEffect(
  ()=>{fetch('https://randomuser.me/api/?results=5')
  .then(response => {
    return response.json()
  })
  .then(data => {
    let newEmployeeList = data.results;
    setEmployeeList([...employeeList, ...newEmployeeList])                                          
  console.log(employeeList);
  })
 },[]
)


//  const getConversations = () => {
//     axios.get('https://randomuser.me/api/?results=5').then(response => {
//         let newConversations = response.data.results.map(result => {
//           return {
//             photo: result.picture.large,
//             name: `${result.name.first} ${result.name.last}`,
//             text: 'Hello world! This is a long message that needs to be truncated.'
//           };
//         });
//         setConversations([...conversations, ...newConversations])
//     });
//   }

  return <div>
      <div className="container-fluid py-4">
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Employees table</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employee</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Function</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                      <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Employed</th>
                      <th className="text-secondary opacity-7"></th>
                    </tr>
                  </thead>
                  <tbody>
                   {employeeList.map((user, index) => <EmployeeTable 
                      key={index}
                      name={user.name.first}
                      email={user.email} 
                      picture={user.picture.thumbnail}/>
                    )}
                   <EmployeeTable 
                      key={9}
                      name={"Polina"}
                      email={"sylroyalle@vicceo.com"} 
                      picture={team_2}/>
                    {console.log(<EmployeeTable 
                      index={10}
                      name={"Polina"}
                      email={"sylroyalle@vicceo.com"} 
                      picture={team_2}/>)}  
                    <tr>
                      <td>
                        <div className="d-flex px-2 py-1">
                          <div>
                            <img src="./assets/team-4.jpg" className="avatar avatar-sm me-3 border-radius-lg" alt="user6"/>
                          </div>
                          <div className="d-flex flex-column justify-content-center">
                            <h6 className="mb-0 text-sm">Miriam Eric</h6>
                            <p className="text-xs text-secondary mb-0">miriam@vissio.com</p>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-xs font-weight-bold mb-0">Programator</p>
                        <p className="text-xs text-secondary mb-0">Developer</p>
                      </td>
                      <td className="align-middle text-center text-sm">
                        <span className="badge badge-sm bg-gradient-secondary">Offline</span>
                      </td>
                      <td className="align-middle text-center">
                        <span className="text-secondary text-xs font-weight-bold">14/09/20</span>
                      </td>
                      <td className="align-middle">
                        <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card my-4">
            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                <h6 className="text-white text-capitalize ps-3">Projects table</h6>
              </div>
            </div>
            <div className="card-body px-0 pb-2">
              <div className="table-responsive p-0">
                <table className="table align-items-center justify-content-center mb-0">
                  <thead>
                    <tr>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Project</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Budget</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Status</th>
                      <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Completion</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img src="assets/logo-asana.svg" className="avatar avatar-sm rounded-circle me-2" alt="spotify"/>
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Asana</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$2,500</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">working</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">60%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: 0.6}}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-link text-secondary mb-0">
                          <i className="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img src="./assets/github.svg" className="avatar avatar-sm rounded-circle me-2" alt="invision"/>
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Github</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$5,000</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">done</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">100%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: 1}}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img src="logo-atlassian.svg" className="avatar avatar-sm rounded-circle me-2" alt="jira"/>
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Atlassian</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$3,400</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">canceled</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">30%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-danger" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="30" style={{width: 0.3}}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img src="./assets/bootstrap.svg" className="avatar avatar-sm rounded-circle me-2" alt="webdev"/>
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Bootstrap</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$14,000</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">working</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">80%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="80" style={{width: 0.8}}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img src="./assets/logo-slack.svg" className="avatar avatar-sm rounded-circle me-2" alt="slack"/>
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Slack</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$1,000</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">canceled</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">0%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="0" style={{width: 0}}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="d-flex px-2">
                          <div>
                            <img src="./assets/devto.svg" className="avatar avatar-sm rounded-circle me-2" alt="xd"/>
                          </div>
                          <div className="my-auto">
                            <h6 className="mb-0 text-sm">Devto</h6>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="text-sm font-weight-bold mb-0">$2,300</p>
                      </td>
                      <td>
                        <span className="text-xs font-weight-bold">done</span>
                      </td>
                      <td className="align-middle text-center">
                        <div className="d-flex align-items-center justify-content-center">
                          <span className="me-2 text-xs font-weight-bold">100%</span>
                          <div>
                            <div className="progress">
                              <div className="progress-bar bg-gradient-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: 1}}></div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="align-middle">
                        <button className="btn btn-link text-secondary mb-0" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer py-4  ">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-lg-between">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="copyright text-center text-sm text-muted text-lg-start">
                © <script>
                  document.write(new Date().getFullYear())
                </script>2022,
                made with <i className="fa fa-heart" aria-hidden="true"></i> by
                <a href="https://www.vissio.com/" className="font-weight-bold" target="_blank">Vissio Team</a>
                for a better web.
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                <li className="nav-item">
                  <a href="https://www.vissio.com/" className="nav-link text-muted" target="_blank">Vissio Team</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.vissio.com/presentation" className="nav-link text-muted" target="_blank">About Us</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.vissio.com/blog" className="nav-link text-muted" target="_blank">Blog</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.vissio.com/license" className="nav-link pe-0 text-muted" target="_blank">License</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>;
}
