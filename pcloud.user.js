// ==UserScript==
// @name        pCloud
// @namespace   https://taylor.fish/userscripts/
// @description Download files from pCloud (pcloud.com, pc.cd).
// @match       *://my.pcloud.com/publink/*
// @match       *://pc.cd/*
// @version     0.1.0
// @grant       none
// ==/UserScript==

/*
 * @licstart  The following is the entire license notice for the
 * JavaScript code in this page.
 *
 * Copyright (C) 2017 taylor.fish <contact@taylor.fish>
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * As a special exception to the GPL, any HTML file which merely
 * makes function calls to this code, and for that purpose includes
 * it by reference shall be deemed a separate work for copyright law
 * purposes.  In addition, the copyright holders of this code give
 * you permission to combine this code with free software libraries
 * that are released under the GNU LGPL.  You may copy and distribute
 * such a system following the terms of the GNU GPL for this code and
 * the LGPL for the libraries.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 */

(function() {
    if (location.hostname == "pc.cd") {
        var match = location.pathname.match(new RegExp("^/(.+)(/|$)"));
        if (match == null) return;
        var code = match[1];
        window.location = "https://my.pcloud.com/publink/show?code=" + code;
        return;
    }

    function findDownloadURL(text) {
        var match = text.match(/"downloadlink":\s+"(.*?)"/);
        if (match == null) return null;
        return match[1].replace(/\\(.)/g, "$1");
    }

    var scripts = document.getElementsByTagName("script");
    var downloadURL = null;
    for (var i = 0; i < scripts.length; i++) {
        var script = scripts[i];
        downloadURL = findDownloadURL(script.text);
        if (downloadURL != null) break;
    }

    if (downloadURL == null) return;
    var container = document.createElement("div");
    var downloadLink = document.createElement("a");
    downloadLink.href = downloadURL;
    downloadLink.innerHTML = "Download file";

    container.appendChild(downloadLink);
    container.style.fontSize = "1.5em";
    container.style.padding = "1.5em";
    document.body.insertBefore(container, document.body.firstChild);
})();
