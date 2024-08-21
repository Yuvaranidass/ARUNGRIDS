import { useNavigate } from "react-router-dom";
import {
  PRINT1,
  PRINT2,
  PRINT3,
  PRINT4,
} from "../../../services/ImageServices";
import SmartCard from "../../../components/SmartCard/SmartCard";
const DigitalPrintout = () => {
  const navigate = useNavigate();

  const print = [
    {
      id: 1,
      // subtitle:'',
      image: PRINT1,
    },
    {
      id: 1,
      // subtitle:'',
      image: PRINT2,
    },
    {
      id: 1,
      // subtitle:'',
      image: PRINT3,
    },
    {
      id: 1,
      // subtitle:'',
      image: PRINT4,
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">DIGITAL PRINTOUT</p>
          </p>
          <button
            className="button is-info is-rounded is-outlined is-size-7-mobile"
            // onClick={() => navigate("/job-card")}
          >
            Get Quotation
          </button>
        </p>
        <SmartCard ImageShowItem={print} width={3} />
      </div>
    </>
  );
};

export default DigitalPrintout;
