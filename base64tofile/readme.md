# base64tofile

> get file from base64 string, or upload multiple files to specific service


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
file.upload('./upload/','inputID',{'headers':{'Authorization':'Bearer token'}});
file.upload('./upload/','inputID',{'headers':{'Authorization':'Bearer token'},success:function(){},fail:function(){}});


```

```js

File.download('dGVzdA==');
//<input id="inputID" type="file"/>
File.upload('./upload/','inputID');
File.upload('./upload/','inputID',{'headers':{'Authorization':'Bearer token'}});
File.upload('./upload/','inputID',{'headers':{'Authorization':'Bearer token'},success:function(){},fail:function(){}});
```
**



