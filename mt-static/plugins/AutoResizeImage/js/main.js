import MTPluginAutoResizeImageSquoosh from "./sdk.js";

jQuery($ => {
  async function init() {
    const editor = document.querySelector("#mt-plugin-autoresizeimage-editor");

    const {
      back,
      setFile,
      getBlob,
      resizeToLimit,
      setQuality,
    } = await MTPluginAutoResizeImageSquoosh(
      editor,
      "https://usualoma.github.io/mt-plugin-AutoResizeImage/squoosh-sdk/0.0.2/"
    );

    const uploadFiles = window.uploadFiles;
    window.uploadFiles = (files, items) => {
      let promise = Promise.resolve();
      for (let i = 0; i < files.length; i++) {
        if (files[i].size === 0) {
          // Maybe directory
          continue;
        }
        if (
          items &&
          items[i].webkitGetAsEntry &&
          items[i].webkitGetAsEntry().isDirectory
        ) {
          // Maybe directory only for Chrome
          continue;
        }

        const f = files[i];

        if (f.type !== "image/jpeg") {
          uploadFiles([f]);
          continue;
        }

        promise = promise.then(async () => {
          const blob = await fetch(URL.createObjectURL(f)).then(resp =>
            resp.blob()
          );
          setFile(blob, f.name);

          await resizeToLimit(
            parseInt(editor.dataset.autoresizeimageWidth),
            parseInt(editor.dataset.autoresizeimageHeight)
          );
          await setQuality(parseInt(editor.dataset.autoresizeimageQuality));

          return new Promise(resolve => {
            async function upload() {
              const newBlob = await getBlob(1);
              if (newBlob) {
                uploadFiles([new File([newBlob], f.name, { type: f.type })]);
                resolve();
              } else {
                setTimeout(upload, 100);
              }
            }
            upload();
          });
        });
      }
    };
  }
  init();
});
