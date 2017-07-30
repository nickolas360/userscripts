// ==UserScript==
// @name        Sellfy
// @namespace   https://taylor.fish/userscripts/
// @description Download files from Sellfy (sellfy.com).
// @match       *://sellfy.com/p/*
// @version     0.1.0
// @grant       GM_xmlhttpRequest
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
    var linkButtons = document.querySelectorAll("button[href]");
    for (var i = 0; i < linkButtons.length; i++) {
        var link = document.createElement("a");
        var button = linkButtons[i];

        link.id = button.id;
        link.className = button.className;
        link.rel = "noreferrer";
        link.href = button.attributes.href.value;
        link.innerHTML = button.innerHTML;
        button.parentNode.replaceChild(link, button);
    }

    var submit = document.getElementById("submit_checkout");
    var form = document.getElementById("billing_information");
    form.elements.save.value = "true";
    form.elements.payer_email.required = true;
    form.elements.csrf_draft_token.parentNode.removeChild(
        form.elements.csrf_draft_token
    );

    submit.addEventListener("click", function(event) {
        event.preventDefault();
        if (!form.reportValidity()) return;
        GM_xmlhttpRequest({
            url: location.origin + "/order_draft/",
            method: "POST",
            data: urlEncodeForm(form),
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": (
                    "application/x-www-form-urlencoded; charset=UTF-8"
                ),
            },
            onreadystatechange: function(response) {
                if (response.readyState !== XMLHttpRequest.DONE) return;
                if (response.status !== 200) return;
                var json = JSON.parse(response.responseText);
                download(json.key);
            },
        });
    });

    function download(key) {
        GM_xmlhttpRequest({
            url: location.origin + "/payments/download/",
            method: "POST",
            data: urlEncode({"draft": key}),
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": (
                    "application/x-www-form-urlencoded; charset=UTF-8"
                ),
            },
            onreadystatechange: function(response) {
                if (response.readyState !== XMLHttpRequest.DONE) return;
                if (response.status !== 200) return;
                var json = JSON.parse(response.responseText);
                var url = json.download_url.replace(/^\/+/, "");
                window.location = location.origin + "/" + url;
            },
        });
    }

    function urlEncode(obj) {
        return Object.keys(obj).map(function(key) {
            return [key, obj[key]].map(encodeURIComponent).join("=");
        }).join("&");
    }

    function urlEncodeForm(form) {
        var obj = {};
        Array.prototype.slice.call(form.elements).forEach(function(element) {
            obj[element.name] = element.value;
        });
        return urlEncode(obj);
    }
})();
