const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

// Get a random color from the COLORS array
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

// Create a new card
function createCard() {
  // 1 - Random color for card
  const cardColor = randomColor();

  // 2 - Set card text
  const cardText = document.createElement('p');
  cardText.innerText = 'Hello';  // You can update this text if needed

  // 3 - Set card footer
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer');
  
  const footerText = document.createElement('span');
  footerText.innerText = '';  // You can customize footer text

  // 4 - Manage footer button
  const footerButton = document.createElement('button');
  footerButton.innerText = 'Remove';
  
  // Attach a click event to the button to delete the card
  footerButton.addEventListener('click', () => {
    card.remove();
  });

  // Append footer elements
  cardFooter.appendChild(footerText);
  cardFooter.appendChild(footerButton);

  // 5 - Add card to container
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.backgroundColor = cardColor;  // Apply the random color to the card
  card.appendChild(cardText);
  card.appendChild(cardFooter);

  // Get the container and append the new card
  const container = document.querySelector('.container');
  container.appendChild(card);
}

//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);
