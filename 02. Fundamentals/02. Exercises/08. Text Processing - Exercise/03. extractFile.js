function extractFile(path) {

    let info = path.split('\\').pop();
    let index = info.lastIndexOf('.');

    let name = info.slice(0, index)
    let ext = info.slice(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);

}