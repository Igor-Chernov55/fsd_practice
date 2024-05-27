import path from "path";
import {BuildPaths} from "./types/config";

export const buildOutput = (options: BuildPaths) => {

     return {
         filename: '[name][contenthash].js',
         clean: true,
         path: options.path,
         publicPath: '/',
     }
}
