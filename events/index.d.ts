/// <reference types="@ccts/craftos-types" />
export interface IEvent {
    get_name(): string;
    get_args(): any[];
}
export declare class CharEvent implements IEvent {
    character: string;
    get_name(): string;
    get_args(): string[];
    static init(args: any[]): IEvent | null;
}
export declare class KeyEvent implements IEvent {
    key: Key;
    isHeld: boolean;
    isUp: boolean;
    get_name(): "key_up" | "key";
    get_args(): (number | boolean)[];
    static init(args: any[]): IEvent | null;
}
export declare class PasteEvent implements IEvent {
    text: string;
    get_name(): string;
    get_args(): any[];
    static init(args: any[]): IEvent | null;
}
export declare class TimerEvent implements IEvent {
    id: number;
    isAlarm: boolean;
    get_name(): "alarm" | "timer";
    get_args(): number[];
    static init(args: any[]): IEvent | null;
}
export declare class TaskCompleteEvent implements IEvent {
    id: number;
    success: boolean;
    error: string | null;
    params: any[];
    get_name(): string;
    get_args(): (string | number | boolean)[];
    static init(args: any[]): IEvent | null;
}
export declare class RedstoneEvent implements IEvent {
    get_name(): string;
    get_args(): any[];
    static init(args: any[]): IEvent | null;
}
export declare class TerminateEvent implements IEvent {
    get_name(): string;
    get_args(): any[];
    static init(args: any[]): IEvent | null;
}
export declare class DiskEvent implements IEvent {
    side: string;
    eject: boolean;
    get_name(): "disk_eject" | "disk";
    get_args(): string[];
    static init(args: any[]): IEvent | null;
}
export declare class PeripheralEvent implements IEvent {
    side: string;
    detach: boolean;
    get_name(): "peripheral_detach" | "peripheral";
    get_args(): string[];
    static init(args: any[]): IEvent | null;
}
export declare class RednetMessageEvent implements IEvent {
    sender: number;
    message: any;
    protocol: string | null;
    get_name(): string;
    get_args(): any[];
    static init(args: any[]): IEvent | null;
}
export declare class ModemMessageEvent implements IEvent {
    side: string;
    channel: number;
    replyChannel: number;
    message: any;
    distance: number;
    get_name(): string;
    get_args(): any[];
    static init(args: any[]): IEvent | null;
}
export declare class HTTPEvent implements IEvent {
    url: string;
    handle: HTTPResponse | null;
    error: string | null;
    get_name(): "http_success" | "http_failure";
    get_args(): (string | HTTPResponse)[];
    static init(args: any[]): IEvent | null;
}
export declare class WebSocketEvent implements IEvent {
    handle: WebSocket | null;
    error: string | null;
    get_name(): "websocket_success" | "websocket_failure";
    get_args(): (string | WebSocket)[];
    static init(args: any[]): IEvent | null;
}
export declare enum MouseEventType {
    Click = 0,
    Up = 1,
    Scroll = 2,
    Drag = 3,
    Touch = 4,
    Move = 5
}
export declare class MouseEvent implements IEvent {
    button: number;
    x: number;
    y: number;
    side: string | null;
    type: MouseEventType;
    get_name(): string;
    get_args(): (string | number)[];
    static init(args: any[]): IEvent | null;
}
export declare class ResizeEvent implements IEvent {
    side: string | null;
    get_name(): "term_resize" | "monitor_resize";
    get_args(): string[];
    static init(args: any[]): IEvent | null;
}
export declare class TurtleInventoryEvent implements IEvent {
    get_name(): string;
    get_args(): any[];
    static init(args: any[]): IEvent | null;
}
export declare class GenericEvent implements IEvent {
    args: any[];
    get_name(): string;
    get_args(): any[];
    static init(args: any[]): IEvent | null;
}
declare type Constructor<T extends {} = {}> = new (...args: any[]) => T;
export declare function pullEventRaw(filter?: string | null): IEvent | null;
export declare function pullEvent(filter?: string | null): IEvent | null;
export declare function pullEventRawAs<T extends IEvent>(type: Constructor<T>, filter?: string | null): T | null;
export declare function pullEventAs<T extends IEvent>(type: Constructor<T>, filter?: string | null): T | null;
export {};
