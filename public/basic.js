var socket = io();

socket.on('connect', function() {
  console.log('connected');
});
socket.on('newChat', function (data) {
  console.log('newChat', data);
});
socket.on('welcomeMess', function(data) {
  console.log('welcome Message', data);
});
// socket.on('notificationMess', function(data) {
//   console.log('notification Message', data);
// })
