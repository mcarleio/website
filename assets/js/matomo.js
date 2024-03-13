var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="//piwik.mcarle.io/";
_paq.push(['setTrackerUrl', u+'matomo.php']);
_paq.push(['setSiteId', '3']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();

$('#navbar-main li.nav-item a.nav-link').on('click', function(event) {
  var section = this.hash.substr(1);
  _paq.push(['setCustomUrl', '/' + section]);
  _paq.push(['setDocumentTitle', section]);
  _paq.push(['trackPageView']);
});