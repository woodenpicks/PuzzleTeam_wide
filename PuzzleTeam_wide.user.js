// ==UserScript==
// @name         Clean PuzzleTeam
// @version      1.0
// @description  Adjust layout on PuzzleTeam websites, remove ads.
// @author       woodenpicks
// @include      /^https:\/\/www\.puzzle-.*/
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('load', function() {
        var mainContainer = document.getElementById('MainContainer');
        if (mainContainer) {
            while (mainContainer.children.length > 1) {
                mainContainer.removeChild(mainContainer.firstChild);
            }
            mainContainer.style.width = '99.9%';
        }

        var nextElement = mainContainer.nextElementSibling;
        if (nextElement) {
            nextElement.parentNode.removeChild(nextElement);
        }
    });
})();
