/**
 * Created by Administrator on 2017/8/12.
 */
var fs = require('fs');
var path = require('path');
module.exports = function (dir, txt, callback) {
    fs.readdir(dir, function (err, list) {
        if (err)
            return callback(err);
        list = list.filter(function (file) {
            return path.extname(file) === '.txt'
        })
        callback(null, list)
    })
}
