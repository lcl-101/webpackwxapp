const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const throttle = (method,delay) => {
  var content = this, args = arguments;
  clearTimeout(method.Id);
  method.Id= setTimeout(function(){
      method.apply(content,args);
  },delay);
}

module.exports = {
  formatTime: formatTime,
  throttle: throttle
}
