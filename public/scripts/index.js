import { Contact } from './Contact.js';
import { PhoneBook } from './PhoneBook.js';

// var john = new Contact( 'John', '123-456-789', 'john@example.com' );
// var jane = new Contact( 'Jane', '234-567-890', 'jane@example.com' );

// const contacts = [ john, jane ];

let contacts;

if( localStorage.getItem( 'contacts' ) !== null ) {
    contacts = JSON.parse( localStorage.getItem( 'contacts' ) ).map( item => new Contact( item.name, item.tel, item.email ) );
} else {
    contacts = [];
}

const phoneBook = new PhoneBook( document.getElementById( 'root' ), contacts );
phoneBook.render();