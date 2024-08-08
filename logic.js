// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const lightMode = {
  background: 'white',
  textColor: 'black'
};

const darkMode = {
  background: 'black',
  textColor: 'white'
};

// Function to apply light mode styles
const applyLightMode = () => {
  document.body.style.backgroundColor = lightMode.background;
  document.body.style.color = lightMode.textColor;

  // Apply styles to other elements
  const elements = document.querySelectorAll('header, main, footer');
  elements.forEach(element => {
    element.style.backgroundColor = 'initial'; // or set specific colors if needed
    element.style.color = lightMode.textColor;
  });
};

// Function to apply dark mode styles
const applyDarkMode = () => {
  document.body.style.backgroundColor = darkMode.background;
  document.body.style.color = darkMode.textColor;

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
