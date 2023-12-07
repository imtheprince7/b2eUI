// userUtils.js
const getUserIdFromUrl = (url) => {
    const matches = url.match(/\/transaction\/(\d+)/);
    return matches ? matches[1] : null;
  };
  
  export default getUserIdFromUrl;
  