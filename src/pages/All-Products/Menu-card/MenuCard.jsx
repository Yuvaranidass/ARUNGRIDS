import { useNavigate } from "react-router-dom";
import SmartCard from "../../../components/SmartCard/SmartCard";
import {
  MENU_FOUR,
  MENU_ONE,
  MENU_THREE,
  MENU_TWO,
} from "../../../services/ImageServices";
const MenuCard = () => {
  const navigate = useNavigate();
  const ImageShowItem = [
    {
      id: 1,
      subtitle: "Menu Card",
      image: MENU_ONE,
    },
    {
      id: 2,
      subtitle: "Menu Card",
      image: MENU_TWO,
    },
    {
      id: 3,
      subtitle: "Menu Card",
      image: MENU_THREE,
    },
    {
      id: 4,
      subtitle: "Menu Card",
      image: MENU_FOUR,
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">MENU CARD</p>
          </p>
          <button
            className="button is-info is-rounded is-outlined is-size-7-mobile"
            // onClick={() => navigate("/job-card")}
          >
            Get Quotation
          </button>
        </p>
        <SmartCard ImageShowItem={ImageShowItem} width={3} />
      </div>
    </>
  );
};

export default MenuCard;
