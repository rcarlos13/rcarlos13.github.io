window.onscroll = function() {
    bar()
};

function bar() {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (scroll / height) * 100;
    document.getElementById("bar").style.width = scrolled + "%";
};
