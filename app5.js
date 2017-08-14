/**
 * Created by Administrator on 2017/8/11.
 */
var fs = require('fs');
var path = require('path');
fs.readdir('path', function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) == '.txt')
            console.log(file)   })
})