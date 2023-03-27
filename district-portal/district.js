const elementToMove = document.querySelector('.h5');
elementToMove.remove()

const parentElm = document.getElementById("ember13").parentNode
const newElm = document.createElement("h2")
const parent = document.getElementById("ember13")

newElm.innerHTML = "Recent"
newElm.classList.add("h5")
parentElm.insertBefore(newElm, parent)

function replaceInternalCss(internalCssPath, externalCssUrl) {
  fetch(externalCssUrl)
    .then(response => response.text())
    .then(css => {
      const style = document.createElement('style');
      style.innerHTML = css;
      const existingStyle = document.querySelector(`link[href="${internalCssPath}"],style[data-href="${internalCssPath}"]`);
      if (existingStyle) {
        existingStyle.replaceWith(style);
      } else {
        document.head.appendChild(style);
      }
    })
    .catch(error => console.error(error));
}

replaceInternalCss('https://assets.identitymgmt.net/rapididentity/2023.01.0-hotfix1/sso-portal-assets/rapididentity-sso-portal-5fe3822d8d9892a8ba97a596dc07ee65.css.gz', 'https://cattn.github.io/random-redesign/district-portal/district.css?palmbeach.k12.fl.us');
replaceInternalCss('https://assets.identitymgmt.net/rapididentity/2023.01.0-hotfix1/sso-portal-assets/vendor-67beec1f7f68283e116de48356bd3b19.css.gz', 'https://cattn.github.io/random-redesign/district-portal/district2.css?palmbeach.k12.fl.us');

function removeInlineStyleFromCardTiles() {
  const cardTiles = document.querySelectorAll('div.card-tile');
  for (const cardTile of cardTiles) {
    cardTile.removeAttribute('style');
  }
}
removeInlineStyleFromCardTiles();
