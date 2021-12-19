import type { App } from 'vue';
import ElTest from './el-test';
declare const version = "0.0.0-development";
declare const install: (app: App) => void;
export { ElTest, version, install, };
declare const _default: {
    version: string;
    install: (app: App<any>) => void;
};
export default _default;
