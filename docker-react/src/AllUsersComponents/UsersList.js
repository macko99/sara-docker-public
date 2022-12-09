import React from 'react';
import {Table} from "react-bootstrap";

const UsersList = (props) => {

    const users = props.users;

    // ----- STATES -----
    // ----- FUNCTIONS -----

    // ----- RENDER -----
    if (!Array.isArray(users))
        return <div>Błąd</div>

    return (
        <Table className="action-list" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Username</th>
                    <th>Imię</th>
                    <th>Nazwisko</th>
                    <th>Telefon</th>
                    <th>Rodzaj</th>
                </tr>
            </thead>
            <tbody>
            {
                users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.phone}</td>
                        <td>{user.is_one_time ? "Jednorazowy" : "Stały"}</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
};

export default UsersList;