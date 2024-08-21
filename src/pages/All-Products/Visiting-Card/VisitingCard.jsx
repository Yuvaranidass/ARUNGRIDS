import SmartCard from "../../../components/SmartCard/SmartCard";
import {
  preview,
  preview1,
  preview2,
  preview3,
} from "../../../services/ImageServices";
import { useNavigate } from "react-router-dom";

const VisitingCard = () => {
  const navigate = useNavigate();
  const item = [
    {
      id: 1,
      // subtitle: "Card1",
      image: preview,
    },
    {
      id: 1,
      // subtitle: "Card1",
      image: preview1,
    },
    {
      id: 1,
      // subtitle: "Card1",
      image: preview2,
    },
    {
      id: 1,
      // subtitle: "Card1",
      image: preview3,
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">THAMBOOLAM BAG</p>
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

export default VisitingCard;
