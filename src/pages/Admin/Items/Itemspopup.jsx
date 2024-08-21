import { SmartDarkButton } from "dark_power25";

const Itemspopup = () => {
  return (
    <div>
      <div className="box itembox px-5">
        <b>ADD GODOWN</b>
        <hr />
        <label className="ml-4">Godown Name</label>

        <input type="text" className="input ml-6 " style={{ width: 600 }} />

        <hr />

        <label className="ml-4">Street Address</label>
        <input
          type="text"
          className="input "
          style={{ width: 600, marginLeft: 49 }}
        />
        <hr />
        <label className="ml-4">Place of Supply</label>
        <select className="input " style={{ width: 600, marginLeft: 47 }}>
          <option value="">--Enter State--</option>
          <option value="">9</option>
          <option value="">8.4</option>
          <option value="">8.9</option>
        </select>
        <hr />
        <label className="ml-4">PinCode</label>
        <input
          type="text"
          className="input"
          style={{ width: 600, marginLeft: 91 }}
        />
        <hr />
        <label className="ml-4">City</label>
        <input
          type="text"
          className="input "
          style={{ width: 600, marginLeft: 118 }}
        />
        <hr />
        <div className="columns is-flex is-justify-content-end">
          <SmartDarkButton label="Close" leftIcon="fa fa-times"  classList={["is-light mr-5"]} />

          <SmartDarkButton label="Save" leftIcon="fa fa-check" classList={["is-link"]} />
        </div>
      </div>
    </div>
  );
};

export default Itemspopup;
