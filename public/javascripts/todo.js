function log(x) {
    if (window.console) {
        console.log(x);
    }
}

$(window).keydown(function(e) {
    switch (e.which) {
    case 38: // up
        break;
    case 40: // down
        break;
    case 37: // left
        break;
    case 39: // right
        break;
    case 9: // tab
        if (e.shiftKey) {
            $('.todo.selected').removeClass('selected').prev('.todo').andSelf().slice(0,1).addClass('selected');
        } else {
            $('.todo.selected').removeClass('selected').next('.todo').andSelf().slice(0,1).addClass('selected');
        }
        // e.altKey
        // e.ctrlKey
        break;
    case 74: // j
        $('.todo.selected').removeClass('selected').prev('.todo').andSelf().slice(0,1).addClass('selected');
        break;
    case 75: // k
        $('.todo.selected').removeClass('selected').next('.todo').andSelf().slice(0,1).addClass('selected');
        break;
    }
    log('down:' + e.which)
});

$(window).mousewheel(function(e) {
    log(e.wheelDelta);
});

$(document).ready(function() {
    
});

