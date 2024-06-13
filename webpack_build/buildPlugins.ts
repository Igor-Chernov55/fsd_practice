import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildPaths, BuildPathWithDev} from "./types/config";

export const buildPlugins = ({isDev, paths}: BuildPathWithDev ) => {
    return [
        new HtmlWebPackPlugin({
            template: paths.template,
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new webpack.DefinePlugin({
            "__IS_DEV__": JSON.stringify(isDev)
        })
        // new Dotenv({
        //     path: './.env',
        //     safe: true
        // }),
    ]
}
