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

function createButton() {
  // Create button element
  const button = document.createElement("button");
  
  // Set button attributes
  button.setAttribute("dropzone", "");
  button.setAttribute("draggable", "true");
  button.classList.add("card", "__ri-application-frame__grid-view__card__69056", "large", "ember-view");
  
  // Remove ID attribute
  button.removeAttribute("id");
  
  // Create card-tile element
  const cardTile = document.createElement("div");
  cardTile.setAttribute("data-test-card-tile", "");
  cardTile.classList.add("card-tile");
  
  // Create image element
  const image = document.createElement("img");
  image.setAttribute("data-test-image", "");
  image.classList.add("card-img-top");
  image.setAttribute("role", "presentation");
  // Customize image source and alt text as needed
  image.setAttribute("src", "");
  image.setAttribute("alt", "");
  
  // Append image to card-tile
  cardTile.appendChild(image);
  
  // Append card-tile to button
  button.appendChild(cardTile);
  
  // Create card-body element
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  
  // Create card-title element
  const cardTitle = document.createElement("span");
  cardTitle.setAttribute("data-test-card-title", "");
  cardTitle.classList.add("card-title", "text-center", "two-lines");
  // Customize title text as needed
  cardTitle.textContent = "";
  
  // Append card-title to card-body
  cardBody.appendChild(cardTitle);
  
  // Append card-body to button
  button.appendChild(cardBody);
  
  // Return the button element
  return button;
}

/* 
const button = createButton();
button.querySelector("img").setAttribute("src", "https://example.com/image.png");
button.querySelector("img").setAttribute("alt", "Example image");
button.querySelector(".card-title").textContent = "Example title";
document.body.appendChild(button);

*/

function addCustomTileForm() {
  const customTileFormContainer = document.createElement('div');
  
  // Create and append the button to show the form
  const addCustomTileBtn = document.createElement('button');
  addCustomTileBtn.textContent = 'Add Custom Tile';
  customTileFormContainer.appendChild(addCustomTileBtn);
  
  // Create and append the form
  const customTileForm = document.createElement('form');
  customTileForm.style.display = 'none';
  
  const imgLinkInput = document.createElement('input');
  imgLinkInput.setAttribute('type', 'text');
  imgLinkInput.setAttribute('placeholder', 'Image Link');
  customTileForm.appendChild(imgLinkInput);
  
  const imgAltInput = document.createElement('input');
  imgAltInput.setAttribute('type', 'text');
  imgAltInput.setAttribute('placeholder', 'Image Alt');
  customTileForm.appendChild(imgAltInput);
  
  const cardTitleInput = document.createElement('input');
  cardTitleInput.setAttribute('type', 'text');
  cardTitleInput.setAttribute('placeholder', 'Card Title');
  customTileForm.appendChild(cardTitleInput);
  
  const btnLinkInput = document.createElement('input');
  btnLinkInput.setAttribute('type', 'text');
  btnLinkInput.setAttribute('placeholder', 'Button Link');
  customTileForm.appendChild(btnLinkInput);
  
  const submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  customTileForm.appendChild(submitBtn);

  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Clear';
  clearBtn.setAttribute('style', 'display: inline-block; margin-left: 1rem;')
  customTileFormContainer.appendChild(clearBtn);
  
  customTileFormContainer.appendChild(customTileForm);
  
  // Add event listener to show/hide the form
  addCustomTileBtn.addEventListener('click', () => {
    customTileForm.style.display = 'block';
  });

  clearBtn.addEventListener('click', () => {
    localStorage.removeItem('customTiles');
  });
  
  // Add event listener to save the form data on submit
  submitBtn.addEventListener('click', () => {
    const customTiles = JSON.parse(localStorage.getItem('customTiles')) || [];
    customTiles.push({
      imgLink: imgLinkInput.value,
      imgAlt: imgAltInput.value,
      cardTitle: cardTitleInput.value,
      btnLink: btnLinkInput.value,
    });
    localStorage.setItem('customTiles', JSON.stringify(customTiles));
    
    // Reset form values and hide the form
    imgLinkInput.value = '';
    imgAltInput.value = '';
    cardTitleInput.value = '';
    btnLinkInput.value = '';
    customTileForm.style.display = 'none';
  });
  
  // Add the custom tile form container to the page
  const portalContainer = document.querySelector('.portal.comfy.dark');
  portalContainer.appendChild(customTileFormContainer);
}

addCustomTileForm();


function addCustomSection() {
  // Get the portal div
  const portal = document.querySelector('.portal.comfy.dark');

  // Create a new section with class "large"
  const newSection = document.createElement('section');
  newSection.classList.add('large');

  // Create the h2 element and add it to the new section
  const h2 = document.createElement('h2');
  h2.classList.add('h5');
  h2.textContent = 'Custom Tiles';
  newSection.appendChild(h2);

  // Create the div with id "ember19" and class "single-row-grid-view __ri-application-frame__single-row-grid-view__5ff25 large comfy dark ember-view"
  const newDiv = document.createElement('div');
  newDiv.id = 'ember19';
  newDiv.classList.add('single-row-grid-view', '__ri-application-frame__single-row-grid-view__5ff25', 'large', 'comfy', 'dark', 'ember-view');

  // Create the div with id "ember20" and class "grid-view __ri-application-frame__grid-view__4781d large comfy dark ember-view"
  const newInnerDiv = document.createElement('div');
  newInnerDiv.id = 'ember20';
  newInnerDiv.classList.add('grid-view', '__ri-application-frame__grid-view__4781d', 'large', 'comfy', 'dark', 'ember-view');

  // Get custom tiles from local storage
  const customTiles = JSON.parse(localStorage.getItem('customTiles'));

  // Create a button for each custom tile and add it to the inner div
  customTiles.forEach(tile => {
    const newButton = document.createElement('button');
    newButton.classList.add('card', '__ri-application-frame__grid-view__card__69056', 'large', 'ember-view');
    newButton.setAttribute('type', 'button');

    const newImg = document.createElement('img');
    newImg.classList.add('card-img-top');
    newImg.setAttribute('src', tile.imgLink);
    newImg.setAttribute('alt', tile.imgAlt);
    newImg.setAttribute('style', 'width:8.5rem;height:8rem;padding:1rem;');
    newButton.appendChild(newImg);

    const newBodyDiv = document.createElement('div');
    newBodyDiv.classList.add('card-body');

    const newTitleSpan = document.createElement('span');
    newTitleSpan.classList.add('card-title', 'text-center', 'two-lines');
    newTitleSpan.setAttribute('role', 'presentation');
    newTitleSpan.textContent = tile.cardTitle;
    newButton.appendChild(newTitleSpan);
    
    newButton.onclick = () => {
      window.open(tile.btnLink, '_blank');
    };
    newButton.appendChild(newBodyDiv);
    newInnerDiv.appendChild(newButton);
  });

  // Append the new div to the new section, and the inner div to the new div
  newDiv.appendChild(newInnerDiv);
  newSection.appendChild(newDiv);

  // Add the new section to the end of the portal div
  portal.appendChild(newSection);
}
addCustomSection();