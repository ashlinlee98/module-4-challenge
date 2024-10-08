// TODO: Create a variable that selects the form element
const selectForm = document.getElementById('formGroup');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function submitForm(event) {
    event.preventDefault();

    const newPost = {
      username: document.getElementById('username').value,
      title: document.getElementById('title').value,
      content: document.getElementById('content').value
  }

    if (newPost.username === "" || newPost.title === "" || newPost.content === "") {
        // Sends message if any field is empty
        alert("All fields must be filled out");
        return;
    } else {
        // Saves to local storage
        let postsArray = JSON.parse(localStorage.getItem("postsList")) || [];
        postsArray.push(newPost);
        localStorage.setItem("postsList", JSON.stringify(postsArray));

        // Clears info that user put into the form
        document.getElementById('username').value = "";
        document.getElementById('title').value = "";
        document.getElementById('content').value = "";

        // Redirects to blog page (function initialized in logic.js)
        redirectPage('blog.html');
    }

}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
selectForm.addEventListener('click', function(event) {
  if (event.target.id === 'submit') {
    event.preventDefault();
    submitForm(event);
    }
  });