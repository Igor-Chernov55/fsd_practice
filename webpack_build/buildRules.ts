export const buildRules = () => {
    return [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/i,
            use: [
                'style-loader', 'css-loader'
            ],
        },
        {
            test: /\.scss$/i,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
            ],

        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        },
        {
            test: /\.(png|jpg|jpeg|gif|woff2|woff)$/i,
            type: 'asset/resource',

        },


    ]
}
