var axios = require("axios").default;

const options = {
  method: "POST",
  url: "https://iexcloud.io/oidc/me",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  data: {
    grant_type: "authorization_code",
    client_id: "B6285435A40E11EBAD5142010A8002B8",
    client_secret:
      "c5f3c0f2edb8864b0b061361f4bfdea2e706bb9c1b5fb651ccb1197ac6b2d6060fbfc9d71a0b650976d6f5d684ccfed389f8bdf656084b7e19d985d104e8ee92",
    code:
      "iVSmVF-TD_uuWp13amK3ilOcitEbZkYB2ju_otvVr_R&state=eyJyZXR1cm5UbyI6Ii9wcml2YXRlIn0",
    redirect_uri: "http://localhost:3001/private",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
