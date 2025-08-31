(function() {

  var script = document.createElement('script');
  script.src = "https://cdn.weglot.com/weglot.min.js";
  script.async = true;

  script.onload = function() {
    Weglot.initialize({
      api_key: "wg_3b7195a82cf565434937d2153e01d5521"
    });
  };

  document.head.appendChild(script);
})()
