import SmartCard from "../../../components/SmartCard/SmartCard";
import {
  IDCARD1,
  IDCARD2,
  IDCARD3,
  IDCARD4,
} from "../../../services/ImageServices";
import { useNavigate } from "react-router-dom";


const IdCard = () => {
  const navigate = useNavigate();
  const item = [
    {
      id: 1,
      subtitle: "Card1",
      image: IDCARD1,
    },
    {
      id: 2,
      subtitle: "Card2",
      image: IDCARD2,
    },
    {
      id: 3,
      subtitle: "Card3",
      image: IDCARD3,
    },
    {
      id: 4,
      subtitle: "Card4",
      image: IDCARD4,
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">ID CARD</p>
          </p>
          <button
            className="button is-info is-rounded is-outlined is-size-7-mobile"
            // onClick={() => navigate("/job-card")}
          >
            Get Quotation
          </button>
        </p>
        <SmartCard ImageShowItem={item} width={3} />
      </div>
    </>
  );
};

export default IdCard;
