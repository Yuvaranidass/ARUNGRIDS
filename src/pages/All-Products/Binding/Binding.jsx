import SmartCard from "../../../components/SmartCard/SmartCard";
import { BOOK1, BOOK2, BOOK3, BOOK4 } from "../../../services/ImageServices";
import { useNavigate } from "react-router-dom";

const Binding = () => {
  const navigate = useNavigate();
  const binding = [
    {
      id: 1,
      subtitle: "Binding1",
      image: BOOK1,
    },
    {
      id: 1,
      subtitle: "Binding2",
      image: BOOK2,
    },
    {
      id: 1,
      subtitle: "Binding3",
      image: BOOK3,
    },
    {
      id: 1,
      subtitle: "Binding4",
      image: BOOK4,
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile is-flex is-justify-content-space-between">
          <p className="is-clickable is-flex" onClick={() => navigate(-1)}>
            <i className="fa fa-arrow-circle-left" aria-hidden="true"></i>
            <p className="ml-2">BINDING</p>
          </p>
          <button
            className="button is-info is-rounded is-outlined is-size-7-mobile"
            // onClick={() => navigate("/job-card")}
          >
            Get Quotation
          </button>
        </p>
        <SmartCard ImageShowItem={binding} width={3} />
      </div>
    </>
  );
};

export default Binding;
