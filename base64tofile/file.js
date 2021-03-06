"use strict";
exports.__esModule = true;
var File = /** @class */ (function () {
    function File(document) {
        this.document = document;
    }
    File.prototype.download = function (base64String, option) {
        if (option === void 0) { option = {}; }
        var bstr = atob(base64String);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        var blob = new Blob([u8arr], { type: 'application/octet-stream' });
        var a = this.document.createElement("a");
        a.href = URL.createObjectURL(blob);
        if (option && option.fileName) {
            a.download = option.fileName;
        }
        else {
            a.download = new Date().toString();
        }
        a.click();
        URL.revokeObjectURL(a.href);
        if (option && option.callback) {
            option.callback();
        }
    };
    File.prototype.upload = function (url, fileInputID, option) {
        if (option === void 0) { option = {}; }
        var fileContainer = this.document.getElementById(fileInputID);
        var fd = new FormData();
        for (var i = 0; i < fileContainer.files.length; i++) {
            var f = fileContainer.files[i];
            fd.append(f.name, f);
        }
        var xhr = new XMLHttpRequest();
        xhr.open('post', url, true);
        if (option.headers) {
            for (var h in option.headers) {
                xhr.setRequestHeader(h, option.headers[h]);
            }
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    if (option && option.success) {
                        option.success(xhr.responseText);
                    }
                }
                else {
                    if (option && option.fail) {
                        option.fail(xhr.responseText);
                    }
                }
            }
        };
        xhr.send(fd);
    };
    return File;
}());
exports.File = File;
