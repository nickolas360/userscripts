// ==UserScript==
// @name        Droplr
// @namespace   https://taylor.fish/userscripts/
// @description Download files from Droplr (d.pr).
// @match       *://d.pr/*
// @version     0.1.1
// @grant       GM_xmlhttpRequest
// @grant       GM.xmlhttpRequest
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
    var sendXHR;
    if (typeof(GM) !== "undefined") sendXHR = GM.xmlHttpRequest;
    if (sendXHR == null) sendXHR = GM_xmlhttpRequest;

    var button = document.querySelector("a.button.download");
    if (button == null) return;
    var url = (
        button.href.replace("/f/", "/").replace(/^http:/, "https:") +
        "?link=" + button.dataset.link +
        "&filename=" + button.dataset.filename +
        "&dtoken=" + button.dataset.dtoken +
        "&storage_provider=" + button.dataset.storageProvider
    );

    button.addEventListener("click", function(event) {
        event.preventDefault();
        sendXHR({
            url: url,
            method: "GET",
            headers: {
                "X-Requested-With": "XMLHttpRequest",
            },
            onreadystatechange: function(response) {
                if (response.readyState !== XMLHttpRequest.DONE) return;
                if (response.status !== 200) return;
                var json = JSON.parse(response.responseText);
                if (json.signed_link != null) {
                    window.location = json.signed_link;
                }
            },
        });
    });
})();
