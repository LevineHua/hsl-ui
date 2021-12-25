declare const _default: import("vue").DefineComponent<{
    item: ObjectConstructor;
    defaultActive: StringConstructor;
}, {
    getShowMenu: import("vue").ComputedRef<boolean>;
    menuHasChildren: (menuTreeItem: any) => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    item?: unknown;
    defaultActive?: unknown;
} & {} & {
    item?: Record<string, any>;
    defaultActive?: string;
}>, {}>;
export default _default;
