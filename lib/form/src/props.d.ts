import type { CSSProperties, PropType } from 'vue';
export declare const basicProps: {
    labelWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    labelPosition: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    size: import("vue-types").VueTypeDef<string> & {
        default: string;
    };
    disabled: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    schemas: {
        type: ArrayConstructor[];
        default: () => any[];
    };
    submitOnReset: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    transformDateFunc: {
        type: FunctionConstructor;
        default: (date: any) => any;
    };
    showActionButtonGroup: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    actionColOptions: ObjectConstructor;
    showResetButton: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    } & {
        default: boolean;
    };
    resetButtonOptions: ObjectConstructor;
    submitButtonOptions: ObjectConstructor;
    resetFunc: PropType<() => Promise<void>>;
    submitFunc: PropType<() => Promise<void>>;
    labelCol: ObjectConstructor;
    wrapperCol: ObjectConstructor;
    rowProps: ObjectConstructor;
    baseRowStyle: {
        type: PropType<CSSProperties>;
    };
    baseColProps: {
        type: ObjectConstructor;
    };
};
