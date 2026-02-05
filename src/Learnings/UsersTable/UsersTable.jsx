import React, { useState } from 'react'
const USERS = [
    { id: 1, name: "Abhishek", age: 25, role: "Admin" },
    { id: 2, name: "Rohit", age: 30, role: "User" },
    { id: 3, name: "Sneha", age: 22, role: "User" },
    { id: 4, name: "Anita", age: 28, role: "Manager" },
    { id: 5, name: "Vikram", age: 35, role: "Admin" },
    { id: 6, name: "Abhishek", age: 25, role: "Admin" },
    { id: 7, name: "Rohit", age: 30, role: "User" },
    { id: 8, name: "Sneha", age: 22, role: "User" },
    { id: 9, name: "Anita", age: 28, role: "Manager" },
    { id: 10, name: "Vikram", age: 35, role: "Admin" },
    { id: 11, name: "Abhishek", age: 25, role: "Admin" },
    { id: 12, name: "Rohit", age: 30, role: "User" },
    { id: 13, name: "Sneha", age: 22, role: "User" },
    { id: 14, name: "Anita", age: 28, role: "Manager" },
    { id: 15, name: "Vikram", age: 35, role: "Admin" },
    { id: 16, name: "Abhishek", age: 25, role: "Admin" },
    { id: 17, name: "Rohit", age: 30, role: "User" },
    { id: 18, name: "Sneha", age: 22, role: "User" },
    { id: 19, name: "Anita", age: 28, role: "Manager" },
    { id: 20, name: "Vikram", age: 35, role: "Admin" },
];
const UsersTable = () => {



    const [searchText, setSearchText] = useState("");


    // this was my first approach which was fine but needs improvement.
    // const searchUserByName = USERS.filter((user) => {
    //     if (searchText === "") {
    //         return user;
    //     }
    //     return user.name.toLowerCase().includes(searchText.toLowerCase());
    // })

    return (
        <div style={{ height: "500px", width: "500px", border: "1px solid black" }}>
            <input type="text" placeholder="Search by name" style={{ marginBottom: "10px", width: "100%" }} value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <table border="1" cellPadding="10" cellSpacing="0" style={{ width: "100%", overflowY: "scroll", display: "block", height: "100%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {searchUserByName && searchUserByName.map((user) =>

                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.role}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default UsersTable
