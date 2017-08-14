/**
 * Created by Administrator on 2017/8/14.
 */
var http = require(‘http’)
var map = require(‘through2-map’)
var server = http.createServer(function (req, res) {
    if (req.method != ‘post’)
    return res.end(‘send me a POST\n’)

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(res)
})

server.listen(Number(process.argv[2]))

