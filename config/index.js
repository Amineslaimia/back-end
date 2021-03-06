const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
// config() will read your .env file, parse the contents, assign it to process.env.
dotenv.config();

module.exports = {
  port: process.env.PORT || 3000,
  databaseURL: process.env.DATABASE_URI,
  secretKey: process.env.SECRET_KEY,
  secretKey2: process.env.SECRET_KEY2,
  stripePublicKey: process.env.STRIPE_PUBLIC_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY
};
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});
