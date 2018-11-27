# base64tofile

> get file from base64 string, or upload file to specific service


## Install

```
$ npm install --save base64tofile 
```


## Usage

```ts

var file=File();

file.download('dGVzdA==');

//<input id="inputID" type="file"/>
file.upload('./upload/','inputID');
file.upload('./upload/','inputID',{'fileName':'text1.txt'});
file.upload('./upload/','inputID',{'fileName':'text1.txt',success:function(){},fail:function(){}});


```

```js

File.download('dGVzdA==');
//<input id="inputID" type="file"/>
File.upload('./upload/','inputID');
File.upload('./upload/','inputID',{'fileName':'text1.txt'});
File.upload('./upload/','inputID',{'fileName':'text1.txt',success:function(){},fail:function(){}});
```
**



