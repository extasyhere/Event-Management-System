import AdminNavBar from "../adminNavBar";
import "./updateUser.scss";

export default function NewUser() {
  return (
    <>
    <AdminNavBar/>
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>        
        <div className="newUserItem">
          <label>img</label>
          <input type="img" placeholder="img link" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <button className="newUserButton">Create</button>
        <button className="newUserButton">Delete</button>
      </form>
    </div>
    </>
  );
}
