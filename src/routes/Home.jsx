import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Home() {
    const [contacts, setContacts] = useState([]); //Initialize as empty array

    //Get contacts from API
    useEffect(() => {
        // Fetch data from API
        async function fetchData() {
            const response = await fetch('http://localhost:3000/api/contacts/get/all');

            if (response.ok) {
                const data = await response.json();
                if (!ignore) {
                    setContacts(data);
                }
            } else {
                setContacts(null);
            }
        }

        let ignore = false;
        fetchData();
        return () => {
            ignore = true;
        }
    }, []); //Run only once


    return (
        <main>
            <h1>Home page</h1>
            <Link to="/create">Add New Contact</Link><br></br>
           
            <Link to="/update">Update Contact</Link><br></br>
            <Link to="/delete">Delete Contact</Link><br></br>

            <p>All Contacts</p>
            {
                contacts.length > 0 ?
                    contacts.map(contact => (
                        <div>
                            {contact.firstName + ' ' + contact.lastName}
                        </div>
                    )) :
                    <p>No contacts.</p>
            }



        </main>
    )
}