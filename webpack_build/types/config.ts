import path from "path";

export interface BuildPaths {
    entry: string
    template: string
    path: string
    src: string
}

export type BuildPathWithDev = Pick<BuildConfig, "isDev" | "paths">

export interface BuildConfig {
    mode: string;
    paths: BuildPaths
    isDev: boolean
    target: string
    port: number
}

type BuildTargets = Omit<BuildConfig, 'paths' | 'mode'>

export interface BuildProxy {
    paths: BuildPaths
    valueProxy: BuildTargets
}

