module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '06cf7144e4cf6d4d41d6abf1e6c950e0'),
  },
});
