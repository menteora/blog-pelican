{% if GOOGLE_ANALYTICS %}
    <!-- Global Site Tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id={{GOOGLE_ANALYTICS}}"></script>
    <script type="text/plain" data-category="analytics">
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '{{GOOGLE_ANALYTICS}}', { 'anonymize_ip': true });
    </script>
{% endif %}
{% if GAUGES %}
    <script type="text/javascript">
    var _gauges = _gauges || [];
    (function() {
        var t   = document.createElement('script');
        t.type  = 'text/javascript';
        t.async = true;
        t.id    = 'gauges-tracker';
        t.setAttribute('data-site-id', '{{GAUGES}}');
        t.src = '//secure.gaug.es/track.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(t, s);
    })();
    </script>
{% endif %}
{% if PIWIK_URL and PIWIK_SITE_ID %}
    <script type="text/javascript">
    {% if PIWIK_SSL_URL %}
        var pkBaseURL = "{{ PIWIK_SSL_URL }}";
    {% else %}
        var pkBaseURL = "{{ PIWIK_URL }}";
    {% endif %}
    var _paq = _paq || [];
    _paq.push(["trackPageView"]);
    _paq.push(["enableLinkTracking"]);
    (function() {
        var u=(("https:" == document.location.protocol) ? "https" : "http")+"://"+pkBaseURL+"/";
        _paq.push(["setTrackerUrl", u+"piwik.php"]);
        _paq.push(["setSiteId", "{{ PIWIK_SITE_ID }}"]);
        var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0]; g.type="text/javascript";
        g.defer=true; g.async=true; g.src=u+"piwik.js"; s.parentNode.insertBefore(g,s);
    })();
    </script>
{% endif %}
