var load = require('bundle-loader!./a.js');  // 异步加载，main.js打到bundle.js中，a.js打到1.bundle.js中

load(function(file) {
  document.open();
  document.write('<h1>' + file + '</h1>');
  document.close();
});
