declare const _default: import("vue").DefineComponent<{
    menus: ArrayConstructor;
    showHomeMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    homePath: {
        type: StringConstructor;
        default: string;
    };
    webLogo: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    useRouter: {
        type: FunctionConstructor;
        required: true;
    };
}, {
    menuList: import("vue").ComputedRef<unknown[]>;
    childMenuList: import("vue").ComputedRef<any>;
    currentActiveMenu: import("vue").Ref<{}>;
    handleMenuClick: (route: [string, Object]) => void;
    menuHasChildren: (menuTreeItem: any) => boolean;
    getDefaultActive: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    menus?: unknown;
    showHomeMenu?: unknown;
    homePath?: unknown;
    webLogo?: unknown;
    useRouter?: unknown;
} & {
    showHomeMenu: boolean;
    homePath: string;
    webLogo: string;
    useRouter: Function;
} & {
    menus?: unknown[];
}>, {
    showHomeMenu: boolean;
    homePath: string;
    webLogo: string;
}>;
export default _default;
