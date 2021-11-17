const modal = document.querySelector('.modal');
const main = document.querySelector('#main');

export default function loadModal(meals, i) {
  main.classList.add('isblur');
  modal.classList.remove('hidden');
  main.classList.add('noscroll');
  modal.id = meals[i].idMeal;
  const photoDiv = document.createElement('div');
  photoDiv.classList.add('meal_photo');
  modal.appendChild(photoDiv);
  const image = document.createElement('img');
  image.src = meals[i].strMealThumb;
  // image.alt = 'Roast Chicken';
  image.height = '300';
  photoDiv.appendChild(image);
  const closeBtn = document.createElement('i');
  closeBtn.classList.add('fas');
  closeBtn.classList.add('fa-times');
  closeBtn.classList.add('close_btn');
  photoDiv.appendChild(closeBtn);
  const dishTitle = document.createElement('h3');
  dishTitle.classList.add('dish_title');
  dishTitle.innerHTML = meals[i].strMeal;
  modal.appendChild(dishTitle);
  const dishInfo = document.createElement('div');
  dishInfo.classList.add('dish_info');
  modal.appendChild(dishInfo);
  const category = document.createElement('p');
  const mainI = document.createElement('p');
  const area = document.createElement('p');
  const video = document.createElement('p');
  category.innerHTML = `Category: ${meals[i].strCategory}`;
  mainI.innerHTML = `Main ingredient: ${meals[i].strIngredient1}`;
  area.innerHTML = `Area: ${meals[i].strArea}`;
  video.innerHTML = `Youtube: <a href="${meals[i].strYoutube}">Tutorial</a>`;
  dishInfo.appendChild(category);
  dishInfo.appendChild(mainI);
  dishInfo.appendChild(area);
  dishInfo.appendChild(video);
  const comments = document.createElement('div');
  comments.classList.add('comments');
  modal.appendChild(comments);
  const commentTitle = document.createElement('h3');
  commentTitle.id = 'comment_title';
  comments.appendChild(commentTitle);
  commentTitle.innerHTML = 'Comments';
  const commentDiv = document.createElement('div');
  comments.appendChild(commentDiv);
  commentDiv.innerHTML += '<p class="comment">Comment: Comment 1</p>';
  const form = document.createElement('form');
  form.id = 'comment_form';
  modal.appendChild(form);
  const formTitle = document.createElement('h3');
  formTitle.innerHTML = 'Add a comment';
  form.appendChild(formTitle);
  const nameInp = document.createElement('input');
  nameInp.type = 'text';
  nameInp.placeholder = 'Your name';
  nameInp.className = 'form_item';
  nameInp.required = true;
  form.appendChild(nameInp);
  const commentText = document.createElement('textarea');
  commentText.name = 'insights';
  commentText.id = 'insight';
  commentText.cols = '30';
  commentText.rows = '10';
  commentText.className = 'form_item';
  commentText.placeholder = 'Your Comment';
  commentText.required = true;
  form.appendChild(commentText);
  const submitCom = document.createElement('button');
  submitCom.type = 'submit';
  submitCom.className = 'form_item';
  submitCom.id = 'submit_btn';
  submitCom.innerHTML = 'Comment';
  form.appendChild(submitCom);
  const closeModal = () => {
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
    modal.classList.add('hidden');
    main.classList.remove('isblur');
    main.classList.remove('noscroll');
  };
  closeBtn.addEventListener('click', closeModal);
}

export { loadModal };