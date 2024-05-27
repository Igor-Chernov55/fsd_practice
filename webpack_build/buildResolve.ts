import {ResolveOptions} from 'webpack'
import {BuildOptions} from "keycloakify/bin/keycloakify/buildOptions";
import {BuildPaths} from "./types/config";

export const buildResolve = ({src}: BuildPaths): ResolveOptions => {

    return {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.scss'],
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc'
        },
        // preferAbsolute: true,
        // modules: [src, "node-modules"],
        // mainFiles: ['index'],
    }
};
