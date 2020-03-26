import { Contact } from './Contact.js';

export class ContactForm {
    constructor( wrapper, addContact ) {
        this.wrapper = wrapper;
        this.addContact = addContact;
    }

    render() {
        this.wrapper.innerHTML = `
            <div class="contact-form">
                <form>
                    <div class="form-row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" name="name" id="name" class="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" name="phone" id="phone" class="form-control" placeholder="" />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" name="email" id="email" class="form-control" placeholder="" />
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" />
                    </div>
                </form>
            </div>
        `;

        this.bindListeners();
    }

    bindListeners() {
        this.wrapper.querySelector( 'form' ).addEventListener( 'submit', function( event ) {
            event.preventDefault();

            const name = this.wrapper.querySelector( '#name' ).value;
            const phone = this.wrapper.querySelector( '#phone' ).value;
            const email = this.wrapper.querySelector( '#email' ).value;

            const contact = new Contact( name, phone, email );
            this.addContact( contact );
        }.bind( this ));
    }
}