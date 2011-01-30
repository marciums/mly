(function($) {
    $.fn.mousewheel = function(callback) {
        var f = function(e) {
            var delta = (e.wheelDelta / 40) || (e.detail * -1);
            delta *= window.opera ? -1 : 1;
            e.wheelDelta = delta;
            callback(e);
        }
        if (window.addEventListener) {
            this.bind('mousewheel', f);
            this.bind('DOMMouseScroll', f);
        } else {
            this.bind('onmousewheel', f);
        }
        return this;
    }
})(jQuery);
