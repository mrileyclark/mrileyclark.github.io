// references the form, list and search in html
const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add list item to DOM via template by passing in todo
const generateTemplate = todo => {
  // template
    const html = `
     <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
  `;
  // adds template string to the list
    list.innerHTML += html;
};

// listens for clicking todo box
addForm.addEventListener('submit', e => {

    e.preventDefault();
    // gets value user types in todo box removing whitespaces
    const todo = addForm.add.value.trim(); 
    // check if has length adds to todo but not if empty resets form
    if(todo.length) {
      generateTemplate(todo);
      addForm.reset();
    }
        
});

// delete todos

list.addEventListener('click', e => {
  // check if we click trash can, removes todo 
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } 

});


// search todos using filter
const filterTodos = (term) => {

  // converts to array to use methods for arrays to filter
  // filters todo returns dont contain term
  // forEach cycles thru todo and add filter class hide it with css

  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

    // gets array, filters through each, if match remove class so doesnt hide them
  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
    };
   


// get term user adds in input field remvoing whitepsace fires teh function
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});