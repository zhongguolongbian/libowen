/**
 * Created by Administrator on 2017/8/14.
 */
var net = require('net');

net.createServer(function(socket){
    var date= new Date();
    socket.end(date.toLocaleDateString());
}).listen(process.argv[2]);
