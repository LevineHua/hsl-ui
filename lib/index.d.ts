import type { App } from 'vue';
import ElTest from './el-test';
import ElMenu from './el-menu';
import ElForm, { useForm } from './el-form';
declare const version = "0.0.0-development";
declare const install: (app: App) => void;
export { ElTest, ElForm, ElMenu, version, install, };
export { useForm, };
declare const _default: {
    version: string;
    install: (app: App<any>) => void;
};
export default _default;
