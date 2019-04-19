/*define(function(require,exports,module) {
    var title= document.getElementById('title');
    title.innerHTML = "yes it works"
})*/

/*define(function (require, exports, module) {
    var change = require('change');
    // var title = document.getElementById('title');
        // title.innerHTML = change.init();
    var $ = require('jquery');
    $('#title').text(change.init());
})*/

define(function (require, exports, module) {
    var change = require('change');
    var $ = require('jquery');
    var showText = function () {
        $('#title').text(change.init());
    };
    exports.showText = showText;
})


