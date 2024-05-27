import path from "path";
import {buildOutput} from "./buildOutput";
import {buildRules} from "./buildRules";
import {buildResolve} from "./buildResolve";
import {buildOptimization} from "./buildOptimization";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {BuildConfig} from "./types/config";

export const buildConfig = ({paths, mode, target, port}: BuildConfig) => {
    const valueProxy = {target, port}

    return {
        entry: paths.entry,
        mode,
        output: buildOutput(paths),
        module: {
            rules: buildRules(),
        },
        resolve: buildResolve(paths),
        optimization: buildOptimization(),
        devServer: buildDevServer({paths, valueProxy}),
        plugins: buildPlugins(paths)
    }
}
