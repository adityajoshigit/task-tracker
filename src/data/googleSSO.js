const googleSSODetails = {
  web:
  {
    client_id:"-ontm",
    project_id:"",
    auth_uri:"https://accounts.google.com/o/oauth2/auth",
    token_uri:"https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
    client_secret:"-",
    redirect_uris:[
      "http://localhost",
      "http://localhost:3000"
    ],
    javascript_origins:[
      "http://localhost","http://localhost:3000"
    ]
  }
};
const GOOGLE_SSO_DETAILS = {
GOOGLE_API_CLIENT_ID : googleSSODetails.web.client_id,
GOOGLEAPI_CLIENT_SECRET : googleSSODetails.web.client_secret,
};
export default GOOGLE_SSO_DETAILS;