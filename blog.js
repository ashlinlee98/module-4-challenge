// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const selectMain = document.getElementById('mainContent');
const backButton = document.getElementById('backButton');

// TODO: Create a function that builds an element and appends it to the DOM
function addNewPost() {
    const newPost = {
        authorUsername: localStorage.getItem("username"),
        newTitle: localStorage.getItem("title"),
        newContent: localStorage.getItem("content")
    }

    // Dynamically creates new HTML elements
    const newPostSection = document.createElement('section');
    const newTitle = document.createElement('h1');
    const byLine = document.createElement('h2');
    const body = document.createElement('p');
    
    // Adds the content to the new dynamic HTML elements
    newTitle.textContent = newPost.newTitle;
    byLine.textContent = `By: ${newPost.authorUsername}`;
    body.textContent = newPost.newContent;

    // Makes other elements children of the new <section> element
    newPostSection.appendChild(newTitle);
    newPostSection.appendChild(byLine);
    newPostSection.appendChild(body);

    selectMain.appendChild(newPostSection);
}

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
