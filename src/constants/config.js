// API_NOTIFICATION_MESSAGES
export const API_NOTIFICATION_MESSAGES = {
  loading: {
    title: "Loading...",
    message: "Data is being loaded, please wait.",
  },
  success: {
    title: "Success",
    message: "Data loaded successfully.",
  },
  responseFailure: {
    title: "Error",
    message:
      "Error occured while fetching response from the server, please try again.",
  },
  requestFailure: {
    title: "Error",
    message: "Error occured while parsing request data.",
  },
  networkFailure: {
    title: "Error",
    message: "Please check your connectivity and try again.",
  },
};

export const SERVICE_URLS = {
  userSignup: {
    url: "/signup",
    method: "POST",
  },
  userLogin: {
    url: "/login",
    method: "POST",
  },
  fileUpload: {
    url: "/file/upload",
    method: "POST",
  },
  createPost: {
    url: "/create-post",
    method: "POST",
  },
  getAllPosts: {
    url: "/posts",
    method: "GET",
    params: true,
  },
  getPostById: {
    url: "post",
    method: "GET",
    query: true,
  },
};

export const BASE_URL = "/bloom-media-react-app";
