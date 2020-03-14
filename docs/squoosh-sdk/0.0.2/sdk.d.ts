import { ProxyResult } from 'comlink';
import { API } from './components/App/client-api';
/**
 * This function will load an iFrame
 * @param {HTMLIFrameElement} ifr iFrame that will be used to load squoosh
 * @param {string} src URL of squoosh instance to use
 */
export default function loader(ifr: HTMLIFrameElement, src?: string): Promise<ProxyResult<API>>;
