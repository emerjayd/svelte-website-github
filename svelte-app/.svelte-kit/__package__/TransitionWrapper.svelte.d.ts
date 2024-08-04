/** @typedef {typeof __propDef.props}  TransitionWrapperProps */
/** @typedef {typeof __propDef.events}  TransitionWrapperEvents */
/** @typedef {typeof __propDef.slots}  TransitionWrapperSlots */
export default class TransitionWrapper extends SvelteComponent<{
    [x: string]: never;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type TransitionWrapperProps = typeof __propDef.props;
export type TransitionWrapperEvents = typeof __propDef.events;
export type TransitionWrapperSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};
export {};
