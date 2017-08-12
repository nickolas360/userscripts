// ==UserScript==
// @name        SampleSwap
// @namespace   https://taylor.fish/userscripts/
// @description Operate SampleSwap (sampleswap.org).
// @match       *://sampleswap.org/*
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
    if (location.protocol == "http:") {
        location.protocol = "https:";
        return;
    }

    if (document.contentType != null && document.contentType !== "text/html") {
        return;
    }

    Array.prototype.slice.call(
        document.querySelectorAll("a")
    ).forEach(function(link) {
        var regExp = /\bhttp:(\/\/sampleswap.org)\b/;
        var replacement = "https:$1";
        link.href = link.href.replace(regExp, replacement);
        link.innerHTML = link.innerHTML.replace(regExp, replacement);
    });

    var loginForm = document.querySelector(".login-form");
    var registerForm = document.querySelector(".register-form");
    var forgetForm = document.querySelector(".forget-form");

    function hideForms() {
        [loginForm, registerForm, forgetForm].forEach(function(form) {
            form.style.display = "none";
        });
    }

    function showForm(form) {
        hideForms();
        form.style.display = "block";
    }

    if (location.pathname == "/login.php") {
        Array.prototype.slice.call(
            document.querySelectorAll(".register-btn")
        ).forEach(function(element) {
            element.addEventListener("click", function(event) {
                event.preventDefault();
                showForm(registerForm);
            });
        });

        document.querySelector(
            ".passwordHelp"
        ).addEventListener("click", function(event) {
            event.preventDefault();
            showForm(forgetForm);
        });

        Array.prototype.slice.call(
            document.querySelectorAll("#back-btn, #register-back-btn")
        ).forEach(function(element) {
            element.addEventListener("click", function(event) {
                event.preventDefault();
                showForm(loginForm);
            });
        });
    }

    if (location.pathname == "/filebrowser-new.php") {
        var statusFrame = document.getElementById("cartgauge");
        Array.prototype.slice.call(document.querySelectorAll(
            ".playlist.samples input[type=checkbox]"
        )).forEach(function(checkbox) {
            var match = checkbox.id.match(/^check(\d+)$/);
            if (match == null) return;
            var id = match[1];
            checkbox.addEventListener("click", function(event) {
                statusFrame.src = (
                    "/download/cartstatus.php?toggle=" +
                    encodeURIComponent(id)
                );
            });
        });
    }

    function hideMenus() {
        Array.prototype.slice.call(
            document.querySelectorAll(".dropdown-menu")
        ).forEach(function(menu) {
            menu.style.display = "none";
        });
    }

    Array.prototype.slice.call(
        document.querySelectorAll(".dropdown-toggle")
    ).forEach(function(element) {
        element.addEventListener("click", function(event) {
            event.preventDefault();
            var menu = element.parentNode.querySelector(".dropdown-menu");
            if (menu.style.display && menu.style.display != "none") {
                menu.style.display = "none";
                return;
            }
            hideMenus();
            menu.style.display = "block";
        });
    });

    var topNav = document.querySelector(".page-header-menu ul.navbar-nav");
    if (topNav != null) {
        var downloadsLink = document.createElement("a");
        downloadsLink.href = "/home/downloads.php";
        downloadsLink.innerHTML = "Downloads";
        var li = document.createElement("li");
        li.appendChild(downloadsLink);
        topNav.appendChild(li);
    }
})();
