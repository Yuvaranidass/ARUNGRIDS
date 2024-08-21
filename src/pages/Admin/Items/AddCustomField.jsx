import { useState } from 'react';
import { SmartDarkButton } from 'dark_power25';
import { useSiteContext } from '../../../context/SiteDarkProvider';

const CustomFieldsPopup = ({onclose}) => {
  const [fields, setFields] = useState([]);
  const {closeModal}=useSiteContext();
  
  // Add a new field with only name and label
  const addField = () => {
    setFields([...fields, { name: '' }]);
  };

  // Handle changes to field inputs
  const handleFieldChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFields = fields.map((field, i) =>
      i === index ? { ...field, [name]: value } : field
    );
    setFields(updatedFields);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add Item Custom Fields</p>
          <button className="delete" aria-label="close" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">
          <div className="content">
            {fields.map((field, index) => (
              <div className="field" key={index}>
                <label className="label">Field Name {index + 1}</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Enter customer fieldsName"
                    value={field.name}
                    onChange={(e) => handleFieldChange(index, e)}
                  />
                  
                </div>
              </div>
            ))}
            <button className="button is-primary mt-3" onClick={addField}>
              Add Another Field
            </button>
          </div>
        </section>
        <footer className="modal-card-foot is-size-4 is-flex is-justify-content-end">
          
            <SmartDarkButton label="Clear" classList={["is-light m-3"]} onClick={closeModal} />
          <SmartDarkButton label="Save" classList={["is-link"]} />
      
       
        </footer>
      </div>
    </div>
  );
};




export default CustomFieldsPopup;
