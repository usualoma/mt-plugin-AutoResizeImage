import { Component } from 'preact';
import { Fileish } from '../../lib/initial-util';
import { EncoderState } from '../../codecs/encoders';
import { PreprocessorState } from '../../codecs/preprocessors';
import './custom-els/MultiPanel';
import SnackBarElement from '../../lib/SnackBar';
import { InputProcessorState } from '../../codecs/input-processors';
export declare enum SquooshStartEventType {
    START = "squoosh:start"
}
export declare class SquooshStartEvent extends Event {
    constructor(init?: EventInit);
}
export declare const enum SquooshSideEventType {
    DONE = "squoosh:done",
    ABORT = "squoosh:abort",
    ERROR = "squoosh:error"
}
export interface SquooshSideEventInit extends EventInit {
    side: 0 | 1;
    error?: Error;
}
export declare class SquooshSideEvent extends Event {
    side: 0 | 1;
    error?: Error;
    constructor(name: SquooshSideEventType, init: SquooshSideEventInit);
}
declare global {
    interface GlobalEventHandlersEventMap {
        [SquooshStartEventType.START]: SquooshStartEvent;
        [SquooshSideEventType.DONE]: SquooshSideEvent;
        [SquooshSideEventType.ABORT]: SquooshSideEvent;
        [SquooshSideEventType.ERROR]: SquooshSideEvent;
    }
}
export interface SourceImage {
    file: File | Fileish;
    decoded: ImageData;
    processed: ImageData;
    vectorImage?: HTMLImageElement;
    inputProcessorState: InputProcessorState;
}
interface SideSettings {
    preprocessorState: PreprocessorState;
    encoderState: EncoderState;
}
interface Side {
    preprocessed?: ImageData;
    file?: Fileish;
    downloadUrl?: string;
    data?: ImageData;
    latestSettings: SideSettings;
    encodedSettings?: SideSettings;
    loading: boolean;
    /** Counter of the latest bmp currently encoding */
    loadingCounter: number;
    /** Counter of the latest bmp encoded */
    loadedCounter: number;
}
interface Props {
    file: File | Fileish;
    showSnack: SnackBarElement['showSnackbar'];
    onBack: () => void;
}
interface State {
    source?: SourceImage;
    sides: [Side, Side];
    /** Source image load */
    loading: boolean;
    loadingCounter: number;
    error?: string;
    mobileView: boolean;
}
export default class Compress extends Component<Props, State> {
    widthQuery: MediaQueryList;
    state: State;
    private readonly encodeCache;
    private readonly leftProcessor;
    private readonly rightProcessor;
    private readonly updateImageTimeoutIds;
    constructor(props: Props);
    private onMobileWidthChange;
    private onEncoderTypeChange;
    private onPreprocessorOptionsChange;
    private onEncoderOptionsChange;
    private updateDocumentTitle;
    componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    private onCopyToOtherClick;
    private onInputProcessorChange;
    private updateFile;
    /**
     * Debounce the heavy lifting of updateImage.
     * Otherwise, the thrashing causes jank, and sometimes crashes iOS Safari.
     */
    private queueUpdateImage;
    private dispatchSideEvent;
    private signalLoadingStart;
    private signalProcessingDone;
    private signalProcessingAbort;
    private signalProcessingError;
    private updateImage;
    render({ onBack }: Props, { loading, sides, source, mobileView }: State): JSX.Element;
}
export {};
