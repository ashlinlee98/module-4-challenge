// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
let modeToggleButton = document.getElementById('modeToggle');
let submitButton = document.getElementById('submit');
let backButton = document.getElementById('backButton');

const lightMode = {
  background: 'white',
  textColor: 'black',
  buttonColor: '#e2e6e6',
  submitButtonColor: '#aee9fe',
  inputBackgroundColor: 'white',
  textareaBackgroundColor: 'white'
};

const darkMode = {
  background: 'black',
  textColor: 'white',
  buttonColor: '#333535',
  submitButtonColor: '#05305d',
  inputBackgroundColor: '#333',
  textareaBackgroundColor: '#333'
};

// Function to apply light mode styles
const applyLightMode = () => {
  document.body.style.backgroundColor = lightMode.background;
  document.body.style.color = lightMode.textColor;

  // Apply styles to buttons
  modeToggleButton.style.backgroundColor = lightMode.buttonColor;
  modeToggleButton.style.color = lightMode.textColor;

  if (submitButton){
    submitButton.style.backgroundColor = lightMode.submitButtonColor;
    submitButton.style.color = lightMode.textColor;
  }

  if (backButton){
    backButton.style.backgroundColor = lightMode.buttonColor;
    backButton.style.color = lightMode.textColor;
  }

  // Apply styles to text input boxes
  const inputs = document.querySelectorAll('input');
  const textareas = document.querySelectorAll('textarea');
  
  if (inputs){
    inputs.forEach(input => {
      input.style.backgroundColor = lightMode.inputBackgroundColor;
      input.style.color = lightMode.textColor;
      input.style.border = '1px solid lightgray';
    });
  }

  if (textareas) {
    textareas.forEach(textarea => {
      textarea.style.backgroundColor = lightMode.textareaBackgroundColor;
      textarea.style.color = lightMode.textColor;
    });
  }

  // Apply styles to other elements
  const elements = document.querySelectorAll('header, main, footer');
  elements.forEach(element => {
    element.style.backgroundColor = lightMode.background;
    element.style.color = lightMode.textColor;
  });
};

// Function to apply dark mode styles
const applyDarkMode = () => {
  document.body.style.backgroundColor = darkMode.background;
  document.body.style.color = darkMode.textColor;

  // Apply styles to buttons
  modeToggleButton.style.backgroundColor = darkMode.buttonColor;
  modeToggleButton.style.color = darkMode.textColor;

  if (submitButton){
    submitButton.style.backgroundColor = darkMode.submitButtonColor;
    submitButton.style.color = darkMode.textColor;
  }

  if (backButton){
    backButton.style.backgroundColor = darkMode.buttonColor;
    backButton.style.color = darkMode.textColor;
  }

  // Apply styles to input boxes
  const inputs = document.querySelectorAll('input');
  const textareas = document.querySelectorAll('textarea');
  
  if (inputs) {
    inputs.forEach(input => {
      input.style.backgroundColor = darkMode.inputBackgroundColor;
      input.style.color = darkMode.textColor;
      input.style.border = '1px solid #666';
    });
  }

  if (textareas) {
    textareas.forEach(textarea => {
      textarea.style.backgroundColor = darkMode.textareaBackgroundColor;
      textarea.style.color = darkMode.textColor;
    });
  }

  // Apply styles to other elements
  const elements = document.querySelectorAll('header, main, footer');
  elements.forEach(element => {
    element.style.backgroundColor = '#333'; // dark background for sections
    element.style.color = darkMode.textColor;
  });
};

// Function to toggle light/dark mode
const toggleMode = () => {
  // Check the current mode in local storage
  const currentTheme = localStorage.getItem('theme');
  
  // Determine if we need to apply dark mode or light mode
  if (currentTheme === 'dark') {
    applyLightMode();
    localStorage.setItem('theme', 'light');
  } else {
    applyDarkMode();
    localStorage.setItem('theme', 'dark');
  }
};

// Add event listener to the mode toggle button
const modeToggle = document.getElementById('modeToggle');
if (modeToggle) {
  modeToggle.addEventListener('click', toggleMode);
}

// Load the saved theme from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  applyDarkMode();
} else {
  applyLightMode();
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
const readLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
const storeLocalStorage = (key, newData) => {
  const existingData = readLocalStorage(key);
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData));
};

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};