import {BuildProxy} from "./types/config";

export const buildDevServer = ({valueProxy}: BuildProxy) => {
    return {
        historyApiFallback: true,
        port:  valueProxy.port,
        // open: true,
        hot: true,
        // proxy: [
        //     {
        //         context: (param: string) => param.match(/\/api\//gm) || param.match(/\/path\//gm),
        //         target: valueProxy.target,
        //         secure: false,
        //         changeOrigin: true,
        //     }
        // ]
    }
}
