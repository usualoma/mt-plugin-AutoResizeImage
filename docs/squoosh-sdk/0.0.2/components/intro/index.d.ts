import { Component } from 'preact';
import { Fileish } from '../../lib/initial-util';
import '../custom-els/LoadingSpinner';
import SnackBarElement from '../../lib/SnackBar';
interface Props {
    onFile: (file: File | Fileish) => void;
    showSnack: SnackBarElement['showSnackbar'];
}
interface State {
    fetchingDemoIndex?: number;
}
export default class Intro extends Component<Props, State> {
    state: State;
    private fileInput?;
    private resetFileInput;
    private onFileChange;
    private onButtonClick;
    private onDemoClick;
    render({}: Props, { fetchingDemoIndex }: State): JSX.Element;
}
export {};
