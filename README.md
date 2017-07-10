Userscripts
===========

This repository contains free/libre userscripts for operating sites that
normally require proprietary JavaScript.

Before installing these userscripts, you should install a script blocker like
[NoScript], [uMatrix], or [LibreJS] and configure it to block each site's
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

[1]: mediafire.user.js
[2]: https://github.com/taylordotfish/userscripts/raw/master/mediafire.user.js
[3]: droplr.user.js
[4]: https://github.com/taylordotfish/userscripts/raw/master/droplr.user.js
[5]: dropbox.user.js
[6]: https://github.com/taylordotfish/userscripts/raw/master/dropbox.user.js
[7]: google-drive.user.js
[8]: https://github.com/taylordotfish/userscripts/raw/master/google-drive.user.js


Installing
----------

Before installing these userscripts, you should install a script blocker like
[NoScript], [uMatrix], or [LibreJS] and configure it to block each site's
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
   that supports dragging and dropping files. (If you don't have a file manager
   that does this, download and install [dragon] and run
   ``dragon <path-to-userscript>``.)

3. Enter “chrome://extensions” into Chromium's address bar and press enter.

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
