import type { Config } from 'jest';

const config: Config = {
    "watchPathIgnorePatterns": [
        "<rootDir>/node_modules",
    ],
    rootDir: 'src'
}
export default config