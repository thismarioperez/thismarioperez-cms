module.exports = ({ env }) => ({
    navigation: {
        enabled: true,
    },
    graphql: {
        enabled: true,
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
        }
    }
});