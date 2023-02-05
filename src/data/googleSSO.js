const googleSSODetails = {
  web:
  {
    client_id:"156590472230-b4s8upj3qoalcpt49brlokkajd417m5e.apps.googleusercontent.com",
    project_id:"teak-amphora-376918",
    auth_uri:"https://accounts.google.com/o/oauth2/auth",
    token_uri:"https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
    client_secret:"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",
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