require.ensure(['./a'], function(require) { // 异步加载，main.js打到bundle.js中，a.js打到1.bundle.js中
  var content = require('./a');
  document.open();
  document.write('<h1>' + content + '</h1>');
  document.close();
});
