import webpack from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildPaths} from "./types/config";
// import Dotenv from "dotenv-webpack";

export const buildPlugins = (options: BuildPaths) => {
    return [
        new HtmlWebPackPlugin({
            template: options.template,
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        // new Dotenv({
        //     path: './.env',
        //     safe: true
        // }),
    ]
}
