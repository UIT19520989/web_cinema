const CallAPI = (url = "http://www.abc.cd/test", options = null) => {
  return fetch(url, options).then((data) => data.json());
};
export default CallAPI;
