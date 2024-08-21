import { SmartDarkButton } from "dark_power25";
import { CUSTOM} from '../../../services/ImageServices';
import ItemsCustomPopup from './ItemsCustomPopup';
import { useSiteContext } from "../../../context/SiteDarkProvider";

const CustomDetails = () => {
  const {  openModal,closeModal } = useSiteContext();

  const openMyModal = () => {
    let modalObject = {
      body: <ItemsCustomPopup />,
      modalClass: "smart-modal-50 mt-6",
    };
    openModal(modalObject);
  };
  return (
    <div>
      <div>
      <div className="columns  is-size-4 is-flex is-justify-content-end">
          <SmartDarkButton
            type="icon"
            leftIcon="fa fa-times"
            classList={["is-clickable"]}
            onClick={closeModal}
          />
        </div>
      </div>
       <div>
          <div className="">
            <center>
              <img className="image " src={CUSTOM} alt=""  style={{ height: 200, width: 200,marginLeft: 20,padding: 20}}/>
            </center>
          </div>
        </div>
        <center>
        <div>
          <b className="title is-5 mt-3">
            You dont have any custom fields created yet
          </b>
        </div>
        <SmartDarkButton
          label="Create Custom Fields"
          leftIcon="fa fa-plus"
          classList={["is-link mt-4"]}
          onClick={openMyModal}
        />
      </center>
    </div>
  )
}

export default CustomDetails
