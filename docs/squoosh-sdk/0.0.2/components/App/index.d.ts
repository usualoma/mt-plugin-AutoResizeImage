import { Component } from 'preact';
import { Fileish } from '../../lib/initial-util';
import 'file-drop-element';
import SnackBarElement from '../../lib/SnackBar';
import '../../lib/SnackBar';
import '../custom-els/LoadingSpinner';
interface Props {
}
interface State {
    awaitingShareTarget: boolean;
    file?: File | Fileish;
    isEditorOpen: Boolean;
    Compress?: typeof import('../compress').default;
}
export default class App extends Component<Props, State> {
    state: State;
    compressInstance?: import('../compress').default;
    snackbar?: SnackBarElement;
    constructor();
    openFile(file: File | Fileish): void;
    private onFileDrop;
    private onIntroPickFile;
    private showSnack;
    private onPopState;
    private openEditor;
    render({}: Props, { file, isEditorOpen, Compress, awaitingShareTarget }: State): JSX.Element;
}
export {};
