import axios from "axios";

const API_URL = "https://jprin.in/backendApi/public";
// const API_URL = "http://localhost:8000";

// Function to get and set CSRF token
const setCsrfToken = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/csrf-token`, {
      withCredentials: true,
    });
    const csrfToken = response.data.csrf_token;
    axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
    return csrfToken;
  } catch (error) {
    console.error("Error setting CSRF token:", error);
    return null;
  }
};

const createAxiosInstance = async () => {
  const csrfToken = await setCsrfToken();

  const axiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": csrfToken,
    },
  });

  return axiosInstance;
};

export default createAxiosInstance;
