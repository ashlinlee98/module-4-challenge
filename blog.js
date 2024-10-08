// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const selectMain = document.getElementById('mainContent');

// TODO: Create a function that builds an element and appends it to the DOM
function appendToDOM(username, title, content) {
    // Dynamically creates new HTML elements
    const newPostSection = document.createElement('section');
    const newTitle = document.createElement('h1');
    const byLine = document.createElement('h2');
    const body = document.createElement('p');
    
    // Adds the content to the new dynamic HTML elements
    newTitle.textContent = title;
    byLine.textContent = `By: ${username}`;
    body.textContent = content;

    // Style the elements
    newPostSection.style.textAlign = 'center'; // Center text in the section
    newPostSection.style.borderBottom = '1px solid #ccc'; // Divider line between posts
    newPostSection.style.marginBottom = '20px'; // Space between posts

    newTitle.style.fontSize = '2em'; // H1 size
    byLine.style.fontSize = '1.2em'; // H2 size
    body.style.fontSize = '1em'; // Paragraph size

    // Makes other elements children of the new <section> element
    newPostSection.appendChild(newTitle);
    newPostSection.appendChild(byLine);
    newPostSection.appendChild(body);

    selectMain.appendChild(newPostSection);
}

// TODO: Create a function that handles the case where there are no blog posts to display
function noPosts() {
    const noPost = document.createElement('h1');
    noPost.textContent = "You haven't written any blog posts yet. Post will be displayed here once you write something!";
    noPost.style.textAlign = 'center'; // Center text in no posts message
    selectMain.appendChild(noPost);
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const postsArray = JSON.parse(localStorage.getItem("postsList")) || [];
    // Clear existing content
    selectMain.innerHTML = '';
    if (postsArray.length == 0) {
        noPosts();
        return;
    } else {
        for (let i = 0; i < postsArray.length; i++){
            let addPost = postsArray[i];
            let username = addPost.username;
            let title = addPost.title;
            let content = addPost.content;

            appendToDOM(username, title, content);
        }
    }
    
}

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', () => {
    console.log('Back button clicked!');
    redirectPage('index.html');
  });
  