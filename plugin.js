(function() {

  var script = document.createElement('script');
  script.src = "https://cdn.weglot.com/weglot.min.js";
  script.async = true;

  script.onload = function() {
    Weglot.initialize({
      api_key: "wg_b8882c415ba6b2f667cf3bd8488a59411"
    });
  };

  document.head.appendChild(script);
})()
