const url = "https://api.coincap.io/v2/assets?limit=20";

function getAssets() {
  return fetch(`${url}`)
    .then(res => {
      return res.json();
    })
    .then(res => {
      return res.data;
    });
}

export default {
  getAssets
};
