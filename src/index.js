function displayRamens() {
  fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(ramens => {
      ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;

        img.addEventListener('click', (e) => handleClick(ramen, e));
        
        document.getElementById('ramen-menu').appendChild(img);
      });
    });
}

function handleClick(ramen, event) {
  document.querySelector('#ramen-detail .detail-image').src = ramen.image;
  document.querySelector('#ramen-detail .name').textContent = ramen.name;
  document.querySelector('#ramen-detail .restaurant').textContent = ramen.restaurant;
  document.getElementById('rating-display').textContent = ramen.rating;
  document.getElementById('comment-display').textContent = ramen.comment;
}

function addSubmitListener() {
  const form = document.getElementById('new-ramen');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newRamen = {
      name: form.name.value,
      restaurant: form.restaurant.value,
      image: form.image.value,
      rating: form.rating.value,
      comment: form.comment.value
    };

    const img = document.createElement('img');
    img.src = newRamen.image;
    img.alt = newRamen.name;

    img.addEventListener('click', (e) => handleClick(newRamen, e));

    document.getElementById('ramen-menu').appendChild(img);
    
    form.reset();
  });
}


const main = () => {
  displayRamens();
  addSubmitListener();
};

// Ensure the script runs only after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", main);

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };

