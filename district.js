const elementToMove = document.querySelector('.h5');
elementToMove.remove()

const parentElm = document.getElementById("ember13").parentNode
const newElm = document.createElement("h2")
const parent = document.getElementById("ember13")

newElm.innerHTML = "Home"
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
  
  replaceInternalCss('https://assets.identitymgmt.net/rapididentity/2023.01.0-hotfix1/sso-portal-assets/rapididentity-sso-portal-5fe3822d8d9892a8ba97a596dc07ee65.css.gz`', 'https://cdn.discordapp.com/attachments/1002668973336313916/1087900430048182383/amoled.css');