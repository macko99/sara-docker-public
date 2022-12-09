import React from 'react';
import {Table} from "react-bootstrap";
import DelFromAreaButton from "../AreasUsersButtons/DelFromAreaButton";
import AddToAreaButton from "../AreasUsersButtons/AddToAreaButton";


const AreaChooseUsersList = (props) => {

    const usrLen = 14;

    return (
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                {props.inArea
                    ? <th className="table-header" colSpan="6">USERZY W OBSZARZE</th>
                    : <th className="table-header" colSpan="6">POZOSTALI USERZY</th>
                }
            </tr>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Rodzaj</th>
                <th> </th>
            </tr>
            </thead>
            <tbody>
            {
                props.users.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username.length > usrLen ? user.username.slice(0,usrLen) + '...' : user.username}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.is_one_time ? "Jednorazowy" : "Stały"}</td>
                        <td>{props.inArea
                            ? <DelFromAreaButton
                                user={user}
                                setDelUser={props.setUserChange} />
                            : <AddToAreaButton
                                user={user}
                                setAddUser={props.setUserChange} />
                        }</td>
                    </tr>
                ))
            }
            </tbody>
        </Table>
    );
};

export default AreaChooseUsersList;