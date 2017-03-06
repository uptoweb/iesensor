/**
 * For IE recognizing and adding IE version class to html element
 * @author uptoweb
 * http://uptoweb.info/iesensor-js/
 */

(function () {
    var c = document.documentElement.className || "",
        a = navigator.userAgent,
        n = parseInt((/Edge\/([\d]+)/.exec(a) || /Trident.*rv:([\d]+)/.exec(a) || /MSIE ([\d]+)/.exec(a) || [])[1]);
    if (n > 7) {
        document.documentElement.className = c === "" ? "ie" + n : c + " ie" + n;
    } else if (n === 7) {
        document.documentElement.className = c === "" ? "ie-old" : c + " ie-old";
    }
}());
