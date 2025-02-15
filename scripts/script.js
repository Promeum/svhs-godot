

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

  if ([
       'Angry-Animals',
       'Chicken-Runner',
       'Dark-World',
       'Dotter-Man',
       'Eclipse-II-The-Darkest-Day',
       'Find-The-Sauce',
       'Ghosties-Bane',
       'Grab-The-Fruits',
       'Mob-Destroyer',
       'Maximum-Lazer',
       'Viking-Raider-Game'
      ].includes(gameName)) {
    document.getElementById('awayText').innerHTML = gameName.split('').map(c => c === '-' ? ' ' : c).reduce((p, c) => p + c);
    document.title = `${gameName.split('').map(c => c === '-' ? ' ' : c).reduce((p, c) => p + c)} - SVHS Godot Portfolio`;

    switch (gameName) {
      case 'Angry-Animals':
        gameFrame.setAttribute('src', `godot-games/${gameName}/${gameName}.html`)
        break;
      case 'Chicken-Runner':
        gameFrame.setAttribute('src', `godot-games/${gameName}/Chicken Runner.html`)
        break;
      case 'Dark-World':
        gameFrame.setAttribute('src', `godot-games/${gameName}/RPG (New).html`)
        break;
      case 'Dotter-Man':
        gameFrame.setAttribute('src', `godot-games/${gameName}/Dotter-Maner.html`)
        break;
      case 'Eclipse-II-The-Darkest-Day':
        gameFrame.setAttribute('src', `godot-games/${gameName}/index.html`)
        break;
      case 'Find-The-Sauce':
        gameFrame.setAttribute('src', `godot-games/${gameName}/GodotDynamicDialog.html`)
        break;
      case 'Ghosties-Bane':
        gameFrame.setAttribute('src', `godot-games/${gameName}/Ghosties Bane.html`)
        break;
      case 'Grab-The-Fruits':
        gameFrame.setAttribute('src', `godot-games/${gameName}/Grab the Fruits.html`)
        break;
      case 'Maximum-Lazer':
        gameFrame.setAttribute('src', `godot-games/${gameName}/${gameName}.html`)
        break;
      case 'Mob-Destroyer':
        gameFrame.setAttribute('src', `godot-games/${gameName}/New Game Project.html`)
        break;
      case 'Viking-Raider-Game':
        gameFrame.setAttribute('src', `godot-games/${gameName}/VikingRaiderGameLTS1_1.html`)
        break;
    }
  }

  // auto-sizes the godot iframe to fill up the page
  window.addEventListener("resize", function(e) {
    titlebar = getComputedStyle(document.getElementById("topNavGamingTab"));
    titlebarHeight = parseFloat(titlebar.height.split('px')[0])
    gameFrame.height = window.innerHeight - titlebarHeight;
  });
  
  // run this thing when page loads
  window.dispatchEvent(new Event('resize'))
}
