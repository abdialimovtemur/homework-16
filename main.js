



// birinchi topshiriq



document.querySelector('.box-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const width = document.querySelector('.input-width').value + 'px';
    const height = document.querySelector('.input-height').value + 'px';
    const radius = document.querySelector('.input-radius').value + 'px';
    const color = document.querySelector('.input-color').value;

    const newBox = document.createElement('div');
    newBox.style.width = width;
    newBox.style.height = height;
    newBox.style.borderRadius = radius;
    newBox.style.backgroundColor = color;
    document.querySelector('.box-container').appendChild(newBox);
});





// ikkinchi topshiriq





document.getElementById('addUserBtn').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();

    if (name) {
        const userItem = document.createElement('li');
        userItem.innerHTML = `<input type="checkbox" class="user-checkbox" value="${name}"> ${name}`;
        document.getElementById('usersList').appendChild(userItem);
        nameInput.value = '';
    } else {
        alert('Iltimos, ism kiriting!');
    }
});

document.getElementById('transferToActive').addEventListener('click', () => {
    transferItems('usersList', 'activeList');
});

document.getElementById('transferToUsers').addEventListener('click', () => {
    transferItems('activeList', 'usersList');
});

function transferItems(fromListId, toListId) {
    const fromList = document.getElementById(fromListId);
    const toList = document.getElementById(toListId);
    const checkboxes = fromList.querySelectorAll('input[type="checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        const listItem = checkbox.parentElement;
        checkbox.checked = false;
        toList.appendChild(listItem);
    });
}



// uchinchi topshiriq

const boilingForm = document.querySelector('.boiling__form');
const boilingInput = document.querySelector('.boiling__input');
const boilingContent = document.querySelector('.boiling__content');

boilingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const inputValue = boilingInput.value; 
    boilingContent.innerText = `${inputValue}`; 
    console.log("adfassdjfaisdd");
    

    console.log('adsfjasdgfiasgfiuga');
    
    boilingInput.value = ''; 
});




