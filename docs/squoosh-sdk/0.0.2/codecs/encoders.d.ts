import * as identity from './identity/encoder-meta';
import * as optiPNG from './optipng/encoder-meta';
import * as mozJPEG from './mozjpeg/encoder-meta';
import * as webP from './webp/encoder-meta';
import * as browserPNG from './browser-png/encoder-meta';
import * as browserJPEG from './browser-jpeg/encoder-meta';
import * as browserWebP from './browser-webp/encoder-meta';
import * as browserGIF from './browser-gif/encoder-meta';
import * as browserTIFF from './browser-tiff/encoder-meta';
import * as browserJP2 from './browser-jp2/encoder-meta';
import * as browserBMP from './browser-bmp/encoder-meta';
import * as browserPDF from './browser-pdf/encoder-meta';
export interface EncoderSupportMap {
    [key: string]: boolean;
}
export declare type EncoderState = identity.EncoderState | optiPNG.EncoderState | mozJPEG.EncoderState | webP.EncoderState | browserPNG.EncoderState | browserJPEG.EncoderState | browserWebP.EncoderState | browserGIF.EncoderState | browserTIFF.EncoderState | browserJP2.EncoderState | browserBMP.EncoderState | browserPDF.EncoderState;
export declare type EncoderOptions = identity.EncodeOptions | optiPNG.EncodeOptions | mozJPEG.EncodeOptions | webP.EncodeOptions | browserPNG.EncodeOptions | browserJPEG.EncodeOptions | browserWebP.EncodeOptions | browserGIF.EncodeOptions | browserTIFF.EncodeOptions | browserJP2.EncodeOptions | browserBMP.EncodeOptions | browserPDF.EncodeOptions;
export declare type EncoderType = keyof typeof encoderMap;
export declare const encoderMap: {
    [identity.type]: typeof identity;
    [optiPNG.type]: typeof optiPNG;
    [mozJPEG.type]: typeof mozJPEG;
    [webP.type]: typeof webP;
    [browserPNG.type]: typeof browserPNG;
    [browserJPEG.type]: typeof browserJPEG;
    [browserWebP.type]: typeof browserWebP;
    [browserBMP.type]: typeof browserBMP;
    [browserGIF.type]: typeof browserGIF;
    [browserTIFF.type]: typeof browserTIFF;
    [browserJP2.type]: typeof browserJP2;
    [browserPDF.type]: typeof browserPDF;
};
export declare const encoders: (typeof identity | typeof optiPNG | typeof mozJPEG | typeof webP | typeof browserPNG | typeof browserJPEG | typeof browserWebP | typeof browserBMP | typeof browserGIF | typeof browserTIFF | typeof browserJP2 | typeof browserPDF)[];
/** Does this browser support a given encoder? Indexed by label */
export declare const encodersSupported: Promise<EncoderSupportMap>;
