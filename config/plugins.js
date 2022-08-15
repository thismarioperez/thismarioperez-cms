module.exports = (env) => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 14,
      amountLimit: 200,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
