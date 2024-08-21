import { SmartDarkButton, SmartDarkFile } from "dark_power25";

const SideSetting = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="box">
          <h1 className="title">Side Settings</h1>
          <form>
            <div className="columns">
              <div className="column">
                <label className="label">
                  Header Name
                  <span className="icon is-small is-right ml-1">
                    <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                  </span>
                </label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder=" Name"
                    required
                  />
                </div>
              </div>
              <div className="column">
                <div className="control has-icons-right">
                  {/* <input className="input" type="file" required /> */}
                  <SmartDarkFile
                    label="Upload Image"
                    placeHolder="Upload"
                    leftIcon="fa fa-upload"
                  />
                </div>
              </div>
            </div>
          </form>
          <SmartDarkButton
            label="Save"
            classList={["is-info ml-2 my-6 mr-2"]}
          />
        </div>
      </div>
    </section>
  );
};

export default SideSetting;
