import { useNavigate } from "react-router-dom";
import SmartCard from "../../../components/SmartCard/SmartCard";
import {
  TC_FOUR,
  TC_ONE,
  TC_THREE,
  TC_TWO,
} from "../../../services/ImageServices";

const Transfer = () => {
  const navigate = useNavigate();
  const ImageShowItem = [
    {
      id: 1,
      subtitle: "Transfer Certificate",
      image: TC_ONE,
    },
    {
      id: 2,
      subtitle: "Transfer Certificate",
      image: TC_TWO,
    },
    {
      id: 3,
      subtitle: "Transfer Certificate",
      image: TC_THREE,
    },
    {
      id: 4,
      subtitle: "Transfer Certificate",
      image: TC_FOUR,
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">TRANSFER CERTIFICATE</p>
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

export default Transfer;
