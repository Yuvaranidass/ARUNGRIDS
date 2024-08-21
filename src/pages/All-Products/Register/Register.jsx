import { useNavigate } from "react-router-dom";
import SmartCard from "../../../components/SmartCard/SmartCard";
import {
  REGISTER_FOUR,
  REGISTER_ONE,
  REGISTER_THREE,
  REGISTER_TWO,
} from "../../../services/ImageServices";

const Register = () => {
  const navigate = useNavigate();
  const ImageShowItem = [
    {
      id: 1,
      subtitle: "Register Office book",
      image: REGISTER_ONE,
    },
    {
      id: 2,
      subtitle: "Attendance Register",
      image: REGISTER_TWO,
    },
    {
      id: 3,
      subtitle: "Organization Register",
      image: REGISTER_THREE,
    },
    {
      id: 4,
      subtitle: "Material Register",
      image: REGISTER_FOUR,
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">REGISTER BOOKS</p>
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

export default Register;
