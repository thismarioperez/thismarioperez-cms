module.exports = {
  apps: [
    {
      name: "com.thismarioperez-cms",
      cwd: "/home/ubuntu/Repositories/thismarioperez-cms",
      script: "yarn",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
