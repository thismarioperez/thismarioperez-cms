module.exports = ({ env }) => ({
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
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'import-export-entries': {
    enabled: true,
  },
  "vercel-deploy": {
    enabled: process.env.NODE_ENV === 'production',
    config: {
      deployHook: env('VERCEL_DEPLOY_HOOK', ''),
      apiToken: env('VERCEL_API_TOKEN', ''),
      appFilter: env('VERCEL_APP_FILTER', ''),
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
