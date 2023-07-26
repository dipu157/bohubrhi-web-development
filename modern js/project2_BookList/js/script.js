
let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');


class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {

    static addToBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>`;

        list.appendChild(row);
    }

    static clearFields() {
        document.querySelector("#title").value = '';
        document.querySelector("#author").value = '';
        document.querySelector("#isbn").value = '';
    }

    static showAtert(message,className){
        let div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        //console.log(div);
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div, form);

        setTimeout(() => {
            document.querySelector('.alert').remove();
        },3000);
    }

    static deleteFromBook(target){
        if(target.hasAttribute('href')){
            target.parentElement.parentElement.remove();
            Store.removeBook(target.parentElement.previousElementSibling.textContent.trim());
            UI.showAtert("Book Removed!", 'success');
        }
    }
}

class Store {
    static getbooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static addBook(book){
        let books = Store.getbooks();
        books.push(book);

        localStorage.setItem('books', JSON.stringify(books))
    }

    static displayBooks() {
        let books = Store.getbooks();

        books.forEach(book => {
            UI.addToBookList(book);
        });
    }

    static removeBook(isbn) {
        let books = Store.getbooks();

        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        })

        localStorage.setItem('books', JSON.stringify(books));
    }
}


// ADD Event Listener
form.addEventListener('submit',newBook);
booklist.addEventListener('click',removebook);
document.addEventListener('DOMContentLoaded',Store.displayBooks());

function newBook(e){
    e.preventDefault();

    let title = document.querySelector("#title").value,
    author = document.querySelector("#author").value,
    isbn = document.querySelector("#isbn").value;

    if(title === '' || author === '' || isbn === ''){
        UI.showAtert("Please Fill All Fields!", "error");
    }else{
        let book = new Book(title, author, isbn);
        UI.addToBookList(book);
        UI.clearFields();

        UI.showAtert("Book Added!", "success");

        Store.addBook(book);
    }    
}

function removebook(e){
    e.preventDefault();
    UI.deleteFromBook(e.target);
    
}