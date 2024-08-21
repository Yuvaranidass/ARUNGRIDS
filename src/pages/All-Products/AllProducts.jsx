import SmartCard from "../../components/SmartCard/SmartCard";
import {
  MENUCARD,
  FRIENDSCARD,
  BOOK1,
  REGISTER_ONE,
  TC_ONE,
  preview,
  IDCARD1,
  BAG_ONE,
  BANNER_ONE,
  CALENDER_ONE,
  PRINT1,
  RUBBERSTAMP
} from "../../services/ImageServices";
const AllProducts = () => {
  const ImageShowItem = [
    {
      id: 1,
      subtitle: "Friends Card",
      image: FRIENDSCARD,
      link: "/friends-card",
      description: [
        "Amazing companion for adventures, laughter, and support. Always there through thick and thin, making life brighter.",
      ],
    },
    {
      id: 2,
      subtitle: "Menu Card",
      image: MENUCARD,
      link: "/menu-card",
      description: ["Main Course: Satisfying dishes from various cuisines."],
    },
    {
      id: 3,
      subtitle: "Binding",
      image: BOOK1,
      link: "/binding",
      description: [
        "Professional binding services for documents, reports, and presentations with durable, custom covers and precise finishing touches.",
      ],
    },
    {
      id: 4,
      subtitle: "Register",
      image: REGISTER_ONE,
      link: "/register",
      description: [
        "Professional binding services for documents, reports, and presentations, ensuring durability and a polished finish. Ideal for corporate and academic use.",
      ],
    },
    {
      id: 5,
      subtitle: "Transfer Certificate Design",
      image: TC_ONE,
      link: "/transfer",
      description: [
        "Transfer Certificate: Official document verifying student's departure and achievements from educational institution.",
      ],
    },
    {
      id: 6,
      subtitle: "Visiting Card",
      image: preview,
      link: "/visiting-card",
      description: [
        "Creative designs for business branding. Specializing in digital and print media. Contact us for custom solutions.",
      ],
    },
    {
      id: 7,
      subtitle: "ID Card",
      image: IDCARD1,
      link: "/id-card",
      description: ["ID card for all your needs."],
    },
    {
      id: 8,
      subtitle: "Thamboola bag",
      image: BAG_ONE,
      link: "/thamboolam-bag",
      description: ["Thamboola bag for all your needs."],
    },
    {
      id: 9,
      subtitle: "Digital Banner",
      image: BANNER_ONE,
      link: "/digital-banner",
      description: [
        "Eye-catching digital banners designed to captivate and convey your message effectively.",
      ],
    },
    {
      id: 10,
      subtitle: "Calender",
      image: CALENDER_ONE,
      link: "/calendar",
      description: [
        "Minimalist calendar design featuring clean layout, elegant typography, and functional date organization.",
      ],
    },
    {
      id: 11,
      subtitle: "Digital Printout",
      image: PRINT1,
      link: "/digital-printout",
      description: [
        "Custom digital printouts with professional binding services for documents, reports, and presentations, ensuring quality and durability.",
      ],
    },
    {
      id: 12,
      subtitle: "Rubber Stamp",
      image: RUBBERSTAMP,
      link: "/rubber-stamp",
      // description: [
      //   "Professional Xerox services for crisp prints, available in color and black & white.",
      // ],
    },
  ];
  return (
    <>
      <div className="section">
        <p className="title is-5 is-size-6-mobile has-text-centered-mobile">
          Products & Services
        </p>
        <SmartCard ImageShowItem={ImageShowItem} width={3} />
      </div>
    </>
  );
};

export default AllProducts;
