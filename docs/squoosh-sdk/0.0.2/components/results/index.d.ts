import { Component, ComponentChildren } from 'preact';
import { CopyAcrossIconProps } from '../../lib/icons';
import '../custom-els/LoadingSpinner';
import { SourceImage } from '../compress';
import { Fileish } from '../../lib/initial-util';
interface Props {
    loading: boolean;
    source?: SourceImage;
    imageFile?: Fileish;
    downloadUrl?: string;
    children: ComponentChildren;
    copyDirection: CopyAcrossIconProps['copyDirection'];
    buttonPosition: keyof typeof buttonPositionClass;
    onCopyToOtherClick(): void;
}
interface State {
    showLoadingState: boolean;
}
declare const buttonPositionClass: {
    'stack-right': string;
    'download-right': string;
    'download-left': string;
};
export default class Results extends Component<Props, State> {
    state: State;
    /** The timeout ID between entering the loading state, and changing UI */
    private loadingTimeoutId;
    componentDidUpdate(prevProps: Props, prevState: State): void;
    private onCopyToOtherClick;
    onDownload(): void;
    render({ source, imageFile, downloadUrl, children, copyDirection, buttonPosition }: Props, { showLoadingState }: State): JSX.Element;
}
export {};
