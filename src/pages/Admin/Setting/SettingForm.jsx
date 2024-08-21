import { useState } from "react";
import Gstinvoice from "./Gstinvoice";
import Gst2invoice from "./Gst2invoice";
import Gst3invoice from "./Gst3invoice";
import Gst4invoice from "./Gst4invoice";
import Billbook from "./Billbook";
import Gst5invoice from "./Gst5invoice";
import "./SettingForm.css";

const themes = [
  {
    id: 1,
    name: "Stylish",
    description: "Stylish Theme Description",
    image: "https://via.placeholder.com/150?text=Stylish",
    component: <Gstinvoice />,
  },
  {
    id: 2,
    name: "Advanced GST (Tally)",
    description: "Advanced GST (Tally) Theme Description",
    image: "https://via.placeholder.com/150?text=Advanced+GST+%28Tally%29",
    component: <Gst2invoice />,
  },
  {
    id: 3,
    name: "Advanced GST",
    description: "Advanced GST Theme Description",
    image: "https://via.placeholder.com/150?text=Advanced+GST",
    component: <Gst3invoice />,
  },
  {
    id: 4,
    name: "Billbook",
    description: "Billbook Theme Description",
    image: "https://via.placeholder.com/150?text=Billbook",
    component: <Billbook />,
  },
  {
    id: 5,
    name: "Advanced GST A5",
    description: "Advanced GST A5 Theme Description",
    image: "https://via.placeholder.com/150?text=Advanced+GST+A5",
    component: <Gst4invoice />,
  },
  {
    id: 6,
    name: "Billbook A5",
    description: "Billbook A5 Theme Description",
    component: <Gst5invoice />,
  },
];

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState(null);

  return (
    <div className="App box">
      <h2 className="title">Invoice Setting</h2>
      <div className="columns">
        <div className="column is-one-quarter">
          <aside className="menu">
            <ul className="menu-list">
              {themes.map((theme) => (
                <li key={theme.id} style={{ marginBottom: "10px" }}>
                  <button
                    className={`button is-fullwidth ${
                      selectedTheme && selectedTheme.id === theme.id
                        ? "is-primary"
                        : "is-info"
                    }`}
                    onClick={() => setSelectedTheme(theme)}
                  >
                    {theme.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="column">
          <div className="invoice-container">
            {selectedTheme ? (
              selectedTheme.component
            ) : (
              <p>Please select an invoice theme.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
