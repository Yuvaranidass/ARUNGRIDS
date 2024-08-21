import SmartCard from "../../../components/SmartCard/SmartCard";
import {
  GREETING_FOUR,
  GREETING_ONE,
  GREETING_THREE,
  GREETING_TWO,
} from "../../../services/ImageServices";
import { useNavigate } from "react-router-dom";
const FriendsCard = () => {
  const navigate = useNavigate();
  const ImageShowItem = [
    {
      id: 1,
      subtitle: "Friends Card",
      image: GREETING_ONE,
      description: ["6X4 Sing & Fold"],
    },
    {
      id: 2,
      subtitle: "Greeting Birthday",
      image: GREETING_TWO,
      description: ["6X4 Sing & Fold"],
    },
    {
      id: 3,
      subtitle: "Marrige Card",
      image: GREETING_THREE,
      description: ["6X4 Sing & Fold"],
    },
    {
      id: 4,
      subtitle: "Birthday Card",
      image: GREETING_FOUR,
      description: ["6X4 Sing & Fold"],
    },
  ];

  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">FRIENDS CARD</p>
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

export default FriendsCard;
