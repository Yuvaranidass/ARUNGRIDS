import { useNavigate } from "react-router-dom";
import SmartCard from "../../../components/SmartCard/SmartCard";
import {
  BANNER_FOUR,
  BANNER_ONE,
  BANNER_THREE,
  BANNER_TWO,
} from "../../../services/ImageServices";
const DigitalBanner = () => {
  const navigate = useNavigate();
  const ImageShowItem = [
    {
      id: 1,
      subtitle: "Digital Banner",
      image: BANNER_ONE,
    },
    {
      id: 2,
      subtitle: "Digital Banner",
      image: BANNER_TWO,
    },
    {
      id: 3,
      subtitle: "Digital Banner",
      image: BANNER_THREE,
    },
    {
      id: 4,
      subtitle: "Digital Banner",
      image: BANNER_FOUR,
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">DIGITAL BANNER</p>
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

export default DigitalBanner;
