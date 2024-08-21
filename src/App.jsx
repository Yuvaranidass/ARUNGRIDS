import ParentRoute from "./routing/ParentRoute";
import { SiteProvider } from "./context/SiteDarkProvider";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const disableRightClick = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", disableRightClick);
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);
  return (
    <SiteProvider>
      <div className="App">
        <ParentRoute />
      </div>
    </SiteProvider>
  );
};

export default App;
