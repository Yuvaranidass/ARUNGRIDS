import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import PropTypes from "prop-types";
import SmartModal from "../components/Smart-Model/SmartModel";
import PageLoader from "../components/Page-Loader/PageLoader";
import { toast } from "react-toastify";

const SiteContext = createContext();

export const useSiteContext = () => {
  return useContext(SiteContext);
};

export const SiteProvider = ({ children }) => {
  const [modalOptions, setModalOptions] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionUser = localStorage.getItem("user");
    if (sessionUser) {
      setUser(JSON.stringify(sessionUser));
    }
  }, []);

  const openModal = useCallback((options) => {
    setModalOptions(options);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOptions(null);
    setIsModalOpen(false);
  }, []);

  const setLoading = useCallback((status, msg = "") => {
    setIsLoading(status);
    setLoadingMsg(msg);
  }, []);

  const login = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("Logged out successfully", { autoClose: 800 });
  }, []);

  return (
    <SiteContext.Provider
      value={{
        user,
        login,
        logout,
        openModal,
        closeModal,
        setLoading,
      }}
    >
      {children}
      <PageLoader loading={isLoading} msg={loadingMsg} />
      {isModalOpen && (
        <SmartModal modalOptions={modalOptions} closeModal={closeModal} />
      )}
    </SiteContext.Provider>
  );
};

SiteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
