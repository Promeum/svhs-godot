

/**
 * Runs when page is loaded
 */
function initialize() {
  // scroll snap thing
  window.addEventListener("resize", function(e) {
    if (checkOverflowY(document.getElementsByTagName("html")[0])) {
      window.addEventListener("scroll", function(e) { // scroll if user not past title bar
        document.documentElement.style.scrollSnapType = window.scrollY < document.getElementById('topNav').scrollHeight ? "y mandatory" : "none";
      });
    } else {
      this.window.removeEventListener("resize", function(e){});
      document.documentElement.style.scrollSnapType = "none";
    }
  });

  window.dispatchEvent(new Event("resize"), false, false, true);
  


  console.log("init finished");
}

/**
 * Determines if the passed element is overflowing its bounds vertically.
 * @param {HTMLElement} el An HTMLElement.
 */
function checkOverflowY(el) {
  return el.clientHeight < el.scrollHeight;
}



/**
 * Runs when gaming page is loaded
 */
function initializeGamingTab() {
  gameFrame = document.getElementsByTagName('iframe')[0];
  gameName = new URLSearchParams(window.location.search).get('game')

  if (['Maximum-Lazer'].includes(gameName)) {
    document.getElementById('awayText').innerHTML = gameName.replace('-', ' ');
  }

  gameFrame.setAttribute('src', `godot-games/${gameName}/${gameName}.html`)
  document.title = `${gameName.replace('-', ' ')} - SVHS Godot Portfolio`

  // auto-sizes the godot iframe to fill up the page
  window.addEventListener("resize", function(e) {
    titlebar = getComputedStyle(document.getElementById("topNavGamingTab"));
    titlebarHeight = parseFloat(titlebar.height.split('px')[0])
    gameFrame.height = window.innerHeight - titlebarHeight;
  });
  
  // run this thing when page loads
  window.dispatchEvent(new Event('resize'))
}
