
let form = document.querySelector('#book-form');


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    constructor(){

    }
    addToBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);
    }

    clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }

    showAtert(message,className){
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        console.log(div);
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        },3000);
    }
}

form.addEventListener('submit',newBook);

function newBook(e){
    e.preventDefault();

    let title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

    let ui = new UI();

    if(title === '' || author === '' || isbn === ''){
        ui.showAtert("Please Fill All Fields!", "error");
    }else{
        let book = new Book(title, author, isbn);
        ui.addToBookList(book);
        ui.clearFields();

        ui.showAtert("Book Added!", "success");
    }

    
}