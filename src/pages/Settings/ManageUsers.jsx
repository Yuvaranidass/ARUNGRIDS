/* eslint-disable react/prop-types */
import { useState } from "react";
import "bulma/css/bulma.min.css";
import "./ManageUsers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SmartDarkButton } from "dark_power25";
// import { useSiteContext } from "../../context/SiteDarkProvider";
import { faUser, faTasks, faSearch } from "@fortawesome/free-solid-svg-icons";

const ManageUsers = () => {
  // const { closeModal } = useSiteContext();
  const [users, setUsers] = useState([]);
  const [caUsers, setCaUsers] = useState([]);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCaModalOpen, setIsCaModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    role: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e, setModalOpen, setUserList) => {
    e.preventDefault();
    setUserList((prevUsers) => [...prevUsers, formData]);
    setFormData({ name: "", mobile: "", role: "" });
    setModalOpen(false);
  };

  return (
    <div className="">
      <div className="subtitle">
        <b>Manage Users</b>
      </div>
      <div className="columns">
        <div className="column is-6">
          <div className="box">
            <div className="has-text-success">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Number of Users
            </div>
            <span>{users.length + caUsers.length}</span>
          </div>
        </div>
        <div className="column is-6">
          <div className="box">
            <div className="has-text-info">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faTasks} />
              </span>
              Activities Performed
            </div>
            0
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-8">
          <div className="field">
            <div className="control has-icons-left">
              <input
                className="input is-rounded"
                type="text"
                placeholder="Search"
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="columns">
            <div className="column is-6">
              <SmartDarkButton
                label="Add your CA"
                leftIcon="fa fa-plus"
                onClick={() => setIsCaModalOpen(true)}
                classList={["is-warning"]}
              />

              {/* <button className="button has-background-warning" onClick={() => setIsCaModalOpen(true)}>Add your CA</button> */}
            </div>
            <div className="column is-6">
              <SmartDarkButton
                label="Add New User"
                leftIcon="fa fa-plus"
                onClick={() => setIsUserModalOpen(true)}
                classList={["is-link"]}
              />
              {/* <button className="button has-background-info" onClick={() => setIsUserModalOpen(true)}>Add New User</button> */}
            </div>
          </div>
        </div>
      </div>

      <UserTable users={users} />

      {isUserModalOpen && (
        <UserModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={(e) =>
            handleFormSubmit(e, setIsUserModalOpen, setUsers)
          }
          closeModal={() => setIsUserModalOpen(false)}
        />
      )}
      {isCaModalOpen && (
        <UserModal1
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={(e) =>
            handleFormSubmit(e, setIsCaModalOpen, setCaUsers)
          }
          closeModal={() => setIsCaModalOpen(false)}
        />
      )}
    </div>
  );
};

const UserTable = ({ users }) => (
  <table className="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile Number</th>
        <th>User Role</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.mobile}</td>
          <td>{user.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const UserModal = ({
  formData,
  handleInputChange,
  handleFormSubmit,
  closeModal,
}) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={closeModal}></div>
    <div className="modal-content">
      <div className="box">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2 className="title is-4">Add New User</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">phone Number</label>
            <div className="control">
              <input
                className="input"
                type="tel"
                placeholder="Phone Number"
                pattern="\d{10}"
                title="Please enter exactly 10 digits"
                maxLength={10}
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">User Role</label>
            <div className="control">
              <select
                className="input"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="">Select role</option>
                <option value="Sales Man">Sales Man</option>
                <option value="Stock Manger">Stock Manger</option>
                <option value="Delivery Man">delivery Man</option>
              </select>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <SmartDarkButton
                label="SUBMIT"
                leftIcon="fa fa-check"
                classList={["is-link my-6 ml-2"]}
                //onClick={openAddModal}
              />
            </div>

            <div className="control">
              <SmartDarkButton
                label="CANCEL"
                leftIcon="fa fa-times"
                classList={["is-danger has-text-white  my-6 ml-3"]}
                onClick={closeModal}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={closeModal}
    ></button>
  </div>
);

const UserModal1 = ({
  formData,
  handleInputChange,
  handleFormSubmit,
  closeModal,
}) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={closeModal}></div>
    <div className="modal-content">
      <div className="box">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h2 className="title is-4">Add Your CA</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="columns">
            <div className="column is-6">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label className="label">CA Whatsapp Number</label>
                <div className="control">
                  <input
                    className="input"
                    type="tel"
                    placeholder="WhatsApp Number"
                    onChange={handleInputChange}
                    pattern="\d{10}"
                    title="Please enter exactly 10 digits"
                    maxLength={10}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6">
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                    type="mail"
                    placeholder="Enter your Email"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="column is-6">
              <div className="field">
                <label className="label">User Role</label>
                <div className="control">
                  <select
                    className="input"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select role</option>
                    <option value="CA">CA</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <SmartDarkButton
                label="SUBMIT"
                leftIcon="fa fa-check"
                classList={["is-link my-6 ml-2"]}
                //onClick={openAddModal}
              />
            </div>

            <div className="control">
              <SmartDarkButton
                label="CANCEL"
                leftIcon="fa fa-times"
                classList={["has-text-white is-danger  my-6 ml-3"]}
                onClick={closeModal}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={closeModal}
    ></button>
  </div>
);

export default ManageUsers;

/*import { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './ManageUsers.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTasks, faSearch, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { SmartDarkTable} from "dark_power25";


const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    role: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({ name: '', mobile: '', role: '' });
    setIsModalOpen(false);
  };

  return (
    <div className="box">
      <div className="subtitle">
        <b>Manage Users</b>
      </div>
      <div className="columns">
        <div className="column is-4">
          <div className="box">
            <div className="has-text-success">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faUser} />
              </span>
              Number of Users
            </div>
            <span>{users.length}</span>
          </div>
        </div>
        <div className="column is-4">
          <div className="box">
            <div className="has-text-info">
              <span className="icon is-small">
                <FontAwesomeIcon icon={faTasks} />
              </span>
              Activities Performed
            </div>
            0
          </div>
        </div>
      </div>
      <div className="columns">
        <div className="column is-8">
          <div className="field">
            <div className="control has-icons-left">
              <input className="input" type="text" placeholder="Search" />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="columns">
            <div className="column is-6">
              <button className="button has-background-warning">Add your CA</button>
            </div>
            <div className="column is-6">
              <button className="button has-background-info" onClick={() => setIsModalOpen(true)}>Add New user</button>
            </div>
          </div>
        </div>
      </div>

      <UserTable users={users} />

      {isModalOpen && (
        <UserModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
      {isModalOpen && (
        <UserModal
          formData={formData}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

const UserTable = ({ users }) => (
  <table className="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile Number</th>
        <th>User Role</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.mobile}</td>
          <td>{user.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
  
);

const UserTable1 = ({ users }) => (
  <table className="table is-fullwidth is-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Mobile Number</th>
        <th>User Role</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.mobile}</td>
          <td>{user.role}</td>
        </tr>
      ))}
    </tbody>
  </table>
  
);
{/* <SmartDarkTable columns={} data={} />  

const UserModal = ({ formData, handleInputChange, handleFormSubmit, closeModal }) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={closeModal}></div>
    <div className="modal-content">
      <div className="box">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className="title is-4">Add New User</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Mobile Number</label>
            <div className="control">
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="input"
                type="number"
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">User Role</label>
            <div className="control">
              <div className="select">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button type="button" className="button is-light" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
  </div>
);
const UserModal1 = ({ formData, handleInputChange, handleFormSubmit, closeModal }) => (
  <div className="modal is-active">
    <div className="modal-background" onClick={closeModal}></div>
    <div className="modal-content">
      <div className="box">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2 className="title is-4">Add Your CA</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input"
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Mobile Number</label>
            <div className="control">
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                className="input"
                type="number"
                placeholder="Enter your mobile number"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">User Role</label>
            <div className="control">
              <div className="select">
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select role</option>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button type="submit" className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button type="button" className="button is-light" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
  </div>
);

export default ManageUsers; */
