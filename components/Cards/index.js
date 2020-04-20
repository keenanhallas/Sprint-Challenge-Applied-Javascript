// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function cardCreator(article){
    const cardDiv = document.createElement(`div`);
    cardDiv.classList.add(`card`);

        const headlineDiv = document.createElement(`div`);
        headlineDiv.classList.add(`headline`);
        headlineDiv.textContent = article.headline;
        cardDiv.appendChild(headlineDiv);

        const authorDiv = document.createElement(`div`);
        authorDiv.classList.add(`author`);
        cardDiv.appendChild(authorDiv);

            const imgContainer = document.createElement(`div`);
            imgContainer.classList.add(`img-container`);
            authorDiv.appendChild(imgContainer);

                const authorImg = document.createElement(`img`);
                authorImg.src = article.authorPhoto;
                imgContainer.appendChild(authorImg);

            const nameSpan = document.createElement(`span`);
            nameSpan.textContent = `By ${article.authorName}`;
            authorDiv.appendChild(nameSpan);

    return cardDiv;
}

const cardsContainer = document.querySelector(`.cards-container`);

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log(response);
        const topics = Object.keys(response.data.articles);
        topics.forEach(topic => {
            response.data.articles[topic].forEach(article => {
                cardsContainer.appendChild(cardCreator(article)); //is it better to add the cards to the dom in the card creator function?
            });
        });
    })
    .catch(err => {
        console.log(err);
    });
