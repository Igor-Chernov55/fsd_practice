export const buildOptimization = () => {
    return {
        minimize: false,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                defaultVendors: false,
            },
        }
    }
}
