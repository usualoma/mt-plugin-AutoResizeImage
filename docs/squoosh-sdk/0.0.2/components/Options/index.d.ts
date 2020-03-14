import { Component } from 'preact';
import { EncoderState, EncoderType, EncoderOptions, EncoderSupportMap } from '../../codecs/encoders';
import { PreprocessorState } from '../../codecs/preprocessors';
import { SourceImage } from '../compress';
interface Props {
    mobileView: boolean;
    source?: SourceImage;
    encoderState: EncoderState;
    preprocessorState: PreprocessorState;
    onEncoderTypeChange(newType: EncoderType): void;
    onEncoderOptionsChange(newOptions: EncoderOptions): void;
    onPreprocessorOptionsChange(newOptions: PreprocessorState): void;
}
interface State {
    encoderSupportMap?: EncoderSupportMap;
}
export default class Options extends Component<Props, State> {
    state: State;
    constructor();
    private onEncoderTypeChange;
    private onPreprocessorEnabledChange;
    private onQuantizerOptionsChange;
    private onResizeOptionsChange;
    render({ source, encoderState, preprocessorState, onEncoderOptionsChange, }: Props, { encoderSupportMap }: State): JSX.Element;
}
export {};
