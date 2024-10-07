import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <main>
        <h1>Home page</h1>
        <Link to="/create">Add New Contact</Link><br></br>
        <Link to="/update">Update Contact</Link><br></br>
        <Link to="/delete">Delete Contact</Link><br></br>
        
        <p>Display all contacts</p>
    

        </main>
    )
}