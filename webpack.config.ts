import path from 'path';
import {buildConfig} from "./webpack_build/buildConfig";

export default (env: any) => {
    const mode = env.mode || 'development';

    const paths = {
        entry: path.resolve(__dirname, 'src/app', 'index.tsx'),
        template: path.resolve(__dirname, 'public', 'index.html'),
        path: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, "src")
    }

    const isDev = mode === 'development';
    const targetProxy = 'http://10.24.65.8:8001'
    const portDevServer = 3001

    return buildConfig({paths, mode, isDev, port: portDevServer, target: targetProxy });
};
