var socket = io();

socket.on('connect', function() {
  console.log('connected');
});
socket.on('newChat', function (data) {
  console.log('newChat', data);
});
