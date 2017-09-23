// ==UserScript==
// @name        Zippyshare
// @namespace   https://taylor.fish/userscripts/
// @description Download files from Zippyshare (zippyshare.com).
// @match       *://*.zippyshare.com/v/*
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
    var dlbutton = document.getElementById("dlbutton");
    if (dlbutton == null) return;

    var scripts = document.getElementsByTagName("script");
    var pattern = new RegExp(
        /'dlbutton'\)\.href = /.source +
        /"(.+?)" \+ \((\d+) % (\d+) \+ (\d+) % (\d+)\) \+ "(.+?)"/.source
    );

    var match = null;
    for (var i = 0; i < scripts.length && match == null; i++) {
        var script = scripts[i];
        match = script.textContent.match(pattern);
    }

    var number = parseInt(match[2]) % parseInt(match[3]);
    number += parseInt(match[4]) % parseInt(match[5]);
    var url = match[1] + number.toString() + match[6];
    dlbutton.href = url;
})();
