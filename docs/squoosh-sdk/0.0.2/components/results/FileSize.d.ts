import { Component } from 'preact';
interface Props {
    blob: Blob;
    compareTo?: Blob;
}
interface State {
}
export default class FileSize extends Component<Props, State> {
    render({ blob, compareTo }: Props): JSX.Element;
}
export {};
