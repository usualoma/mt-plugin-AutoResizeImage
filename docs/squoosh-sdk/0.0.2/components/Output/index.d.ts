import { Component } from 'preact';
import PinchZoom from './custom-els/PinchZoom';
import './custom-els/PinchZoom';
import './custom-els/TwoUp';
import { InputProcessorState } from '../../codecs/input-processors';
import { SourceImage } from '../compress';
interface Props {
    source?: SourceImage;
    inputProcessorState?: InputProcessorState;
    mobileView: boolean;
    leftCompressed?: ImageData;
    rightCompressed?: ImageData;
    leftImgContain: boolean;
    rightImgContain: boolean;
    onBack: () => void;
    onInputProcessorChange: (newState: InputProcessorState) => void;
}
interface State {
    scale: number;
    editingScale: boolean;
    altBackground: boolean;
}
export default class Output extends Component<Props, State> {
    state: State;
    canvasLeft?: HTMLCanvasElement;
    canvasRight?: HTMLCanvasElement;
    pinchZoomLeft?: PinchZoom;
    pinchZoomRight?: PinchZoom;
    scaleInput?: HTMLInputElement;
    retargetedEvents: WeakSet<Event>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    shouldComponentUpdate(nextProps: Props, nextState: State): boolean;
    private leftDrawable;
    private rightDrawable;
    private toggleBackground;
    private zoomIn;
    private zoomOut;
    private onRotateClick;
    private onScaleValueFocus;
    private onScaleInputBlur;
    private onScaleInputChanged;
    private onPinchZoomLeftChange;
    /**
     * We're using two pinch zoom elements, but we want them to stay in sync. When one moves, we
     * update the position of the other. However, this is tricky when it comes to multi-touch, when
     * one finger is on one pinch-zoom, and the other finger is on the other. To overcome this, we
     * redirect all relevant pointer/touch/mouse events to the first pinch zoom element.
     *
     * @param event Event to redirect
     */
    private onRetargetableEvent;
    render({ mobileView, leftImgContain, rightImgContain, source, onBack }: Props, { scale, editingScale, altBackground }: State): JSX.Element;
}
export {};
