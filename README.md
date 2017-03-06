# [ieSensor.js](http://uptoweb.info/iesensor-js)

![iesensor logo](http://uptoweb.info/wp-content/uploads/2015/05/iesensor-logo.png?raw=true)

A simple and smart script for ie recognizing and adding ie version class to html element. Here are its contents:

```javascript
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
```
Just copy code above in any place of your javascript or connect this script file anywhere in html page

```html
<script src="iesensor.js"></script>
```

and the corresponding IE class will be adding automatically to html element. Script works fine with all versions of ie, including EDGE !!!

![ie new html class](http://uptoweb.info/wp-content/uploads/2015/05/ie.png?raw=true)

Demo: [Open this in ie](http://uptoweb.info/code/iesensor/iesensor-demo.html)

More information [here](http://uptoweb.info/iesensor-js)

### Author
[uptoweb](http://uptoweb.info)
