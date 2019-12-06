export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  STRIPE_KEY: "pk_test_XEgQe9GY7vU6BT9nGbDDeP3F00Ju9srgkb",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-uploads-ricky"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://6y7ztf5fyk.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_aVD61AfKz",
    APP_CLIENT_ID: "6okq1nl80qpfjus70s7o16ivkq",
    IDENTITY_POOL_ID: "ap-southeast-2:ff1c440f-712a-4673-b5c3-2db5cefe7e79"
  }
};