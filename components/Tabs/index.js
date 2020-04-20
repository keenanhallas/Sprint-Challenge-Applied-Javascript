// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

topicsDiv = document.querySelector(`.topics`);

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        response.data.topics.forEach(topic => {
            tabDiv = document.createElement(`div`); //is it ok that these won't have unique variable names, for future access? Numbered classes?
            tabDiv.classList.add(`tab`);
            tabDiv.textContent = topic;
            topicsDiv.appendChild(tabDiv);
        });
    })
    .catch(err => {
        console.log(err);
    });