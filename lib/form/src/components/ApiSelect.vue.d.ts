import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    value: import("vue-types").VueTypeDef<string | number | {
        [key: string]: any;
    }>;
    numberToString: import("vue-types").VueTypeValidableDef<boolean> & {
        default: boolean;
    };
    api: {
        type: PropType<(arg?: any) => Promise<any[]>>;
        default: any;
    };
    params: {
        type: PropType<any>;
        default: () => {};
    };
    resultField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    labelField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
    valueField: import("vue-types").VueTypeValidableDef<string> & {
        default: string;
    } & {
        default: string;
    };
}, {
    getOptions: import("vue").ComputedRef<any>;
    emitChange: () => void;
    state: any;
    attrs: {} | import("vue").Ref<any>;
    handleChange: (_: any, ...args: any[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("options-change" | "change")[], "options-change" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    value?: unknown;
    numberToString?: unknown;
    api?: unknown;
    params?: unknown;
    resultField?: unknown;
    labelField?: unknown;
    valueField?: unknown;
} & {
    numberToString: boolean;
    params: any;
    resultField: string;
    labelField: string;
    valueField: string;
} & {
    value?: string | number | {
        [key: string]: any;
    };
    api?: (arg?: any) => Promise<any[]>;
}> & {
    "onOptions-change"?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
}, {
    numberToString: boolean;
    api: (arg?: any) => Promise<any[]>;
    params: any;
    resultField: string;
    labelField: string;
    valueField: string;
}>;
export default _default;
