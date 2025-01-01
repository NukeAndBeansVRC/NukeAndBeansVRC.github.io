var url = "http://nukeandbeans.dev";
var navLinks = document
    .getElementsByTagName("nav")[0]
    .getElementsByTagName("a");

var idx = 0;
var currentPage = url[url.length - 1];
for (idx; i < navLinks.length; i++) {
    var lb = navLinks[i].href.split("/");
    if (lb[lb.length - 1] == currentPage) {
        navLinks[i].className = "current";
    }
}
