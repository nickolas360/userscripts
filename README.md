Userscripts
===========

This repository contains free/libre userscripts for operating sites that
normally require proprietary JavaScript.

Before installing these userscripts, you should install a script blocker like
[NoScript], [uMatrix], or [LibreJS] and configure it to block each site’s
existing proprietary JavaScript.

[NoScript]: https://noscript.net/
[uMatrix]: https://github.com/gorhill/uMatrix
[LibreJS]: https://www.gnu.org/software/librejs/


List of userscripts
-------------------

* **MediaFire**
  ([mediafire.user.js][1])
  \[[Download/Install][2]\]\
  Download files from MediaFire (mediafire.com).

* **Droplr**
  ([droplr.user.js][3])
  \[[Download/Install][4]\]\
  Download files from Droplr (d.pr).

* **Dropbox**
  ([dropbox.user.js][5])
  \[[Download/Install][6]\]\
  Download files from Dropbox (dropbox.com).

* **Google Drive**
  ([google-drive.user.js][7])
  \[[Download/Install][8]\]\
  Download files from Google Drive (drive.google.com).

* **\<noscript\> Tags**
  ([noscript.user.js][9])
  \[[Download/Install][10]\]\
  Show \<noscript\> tags on pages where JavaScript is disabled. Some sites
  work without JavaScript only if \<noscript\> tags are shown, but some script
  blockers might not show them.

* **Sellfy**
  ([sellfy.user.js][11])
  \[[Download/Install][12]\]\
  Download files from Sellfy (sellfy.com).

* **pCloud**
  ([pcloud.user.js][13])
  \[[Download/Install][14]\]\
  Download files from pCloud (pcloud.com, pc.cd).

* **SampleSwap**
  ([sampleswap.user.js][15])
  \[[Download/Install][16]\]\
  Operate SampleSwap (sampleswap.org).

* **Zippyshare**
  ([zippyshare.user.js][17])
  \[[Download/Install][18]\]\
  Download files from Zippyshare (zippyshare.com).

* **Deltaprintr**
  ([deltaprintr.user.js][19])
  \[[Download/Install][20]\]\
  Operate and fix blank pages on deltaprintr.com.

[1]: mediafire.user.js
[2]: https://taylor.fish/userscripts/mediafire.user.js
[3]: droplr.user.js
[4]: https://taylor.fish/userscripts/droplr.user.js
[5]: dropbox.user.js
[6]: https://taylor.fish/userscripts/dropbox.user.js
[7]: google-drive.user.js
[8]: https://taylor.fish/userscripts/google-drive.user.js
[9]: noscript.user.js
[10]: https://taylor.fish/userscripts/noscript.user.js
[11]: sellfy.user.js
[12]: https://taylor.fish/userscripts/sellfy.user.js
[13]: pcloud.user.js
[14]: https://taylor.fish/userscripts/pcloud.user.js
[15]: sampleswap.user.js
[16]: https://taylor.fish/userscripts/sampleswap.user.js
[17]: zippyshare.user.js
[18]: https://taylor.fish/userscripts/zippyshare.user.js
[19]: deltaprintr.user.js
[20]: https://taylor.fish/userscripts/deltaprintr.user.js


Installing
----------

Before installing these userscripts, you should install a script blocker like
[NoScript], [uMatrix], or [LibreJS] and configure it to block each site’s
existing proprietary JavaScript.


### Firefox

Install [Greasemonkey]. Then, click the “Download/Install” link next to any of
the userscripts above. A dialog should appear prompting you to install the
userscript.

[Greasemonkey]: https://www.greasespot.net/


### Chromium

1. Right click the “Download/Install” link next to any of the userscripts above,
   click “Save link as...”, and save the userscript somewhere.

2. Open the directory containing the userscript in a graphical file manager
   that supports dragging and dropping files. (If you don’t have a file manager
   that does this, download and install [dragon] and run
   ``dragon <path-to-userscript>``.)

3. Enter “chrome://extensions” into Chromium’s address bar and press enter.

4. Drag the userscript from the file manager (or dragon) into Chromium. A
   dialog should appear prompting you to install the userscript.

[dragon]: https://github.com/mwh/dragon


License
-------

The userscripts in this repository are licensed under the GNU General Public
License, version 3 or any later version. See [LICENSE] and individual files for
details.

This README file has been released to the public domain using [CC0].

[LICENSE]: LICENSE
[CC0]: https://creativecommons.org/publicdomain/zero/1.0/
