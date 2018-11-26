export class File {
    document: Document;
    constructor(document: Document) {
        this.document = document;
    }

    download(base64String: string, option: any={}): void {

        var bstr = atob(base64String);
        var n = bstr.length;
        var u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        var blob = new Blob([u8arr], { type: 'application/octet-stream' });

        var a = this.document.createElement("a");
        a.href = URL.createObjectURL(blob);

        if (option && option.fileName) {
            a.download = option.fileName;
        }

        a.click();
        URL.revokeObjectURL(a.href);
        if (option && option.callback) {
            option.callback();
        }
    }

    upload(url: string, fileInputID: string, option: any={}): void {
        var fileContainer = this.document.getElementById(fileInputID) as any;
        var fd = new FormData();

        fd.append('fileName', fileContainer.value.split("\\").pop());
        fd.append('file', fileContainer.files[0]);

        var xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if (option && option.success) {
                        option.success(xhr.responseText);
                    }
                } else {
                    if (option && option.fail) {
                        option.fail(xhr.responseText);
                    }
                }
            }
        };
        xhr.send(fd);
    }
}



