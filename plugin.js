(function() {

  var script = document.createElement('script');
  script.src = "https://cdn.weglot.com/weglot.min.js";
  script.async = true;

  script.onload = function() {
    Weglot.initialize({
      api_key: "TA_CLE_API_ICI"
    });
  };

  document.head.appendChild(script);
})()
