import axiosInstance from "./axiosSetup";

async function getConfig() {
  try {
    return await axiosInstance.get("/getConfig", {
      params: {
        clientId: 2,
      },
    });
  } catch (e) {
    return e.response;
  }
}

export { getConfig };
