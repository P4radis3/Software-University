import Search from '../search/Search';

export default function UserSection() {
    return (
            <section className="card users-container">
                <Search />

                <UserList />

                <button className="btn-add btn">Add new user</button>

              
            </section>
    );
}