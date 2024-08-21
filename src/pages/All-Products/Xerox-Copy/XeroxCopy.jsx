import { useNavigate } from "react-router-dom";
import {
  STAMP1,
  STAMP2,
  STAMP3,
  STAMP4,
} from "../../../services/ImageServices";
import SmartCard from "../../../components/SmartCard/SmartCard";
const XeroxCopy = () => {
  const navigate = useNavigate();
  const item = [
    {
      id: 1,
      subtitle: "stamp1",
      image: STAMP1,
    },
    {
      id: 1,
      subtitle: "stamp2",
      image: STAMP2,
    },
    {
      id: 1,
      subtitle: "stamp3",
      image: STAMP3,
    },
    {
      id: 1,
      subtitle: "stamp4",
      image: STAMP4,
    },
  ];

  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2"> STAMP</p>
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

export default XeroxCopy;
