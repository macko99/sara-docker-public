import React from "react";
import {Link} from "react-router-dom";
import {Button, Table} from "react-bootstrap"
import {BsArrowRightSquareFill, BsFillPeopleFill} from "react-icons/bs";

const ActionList = (props) => {

    const actions = props.actions;

    // ----- STATES -----
    // ----- FUNCTIONS -----


    // ----- RENDER -----
    if (!Array.isArray(actions))
        return <div>Błąd</div>

    return (
        <Table className="action-list" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Opis</th>
                    <th>Start</th>
                    <th> </th>
                    <th> </th>
                </tr>
            </thead>
            <tbody>
            {actions.map((action) => (
                <tr key={action.id}>
                    <td>{action.id}</td>
                    <td className="">{action.name}</td>
                    <td className="">{action.description}</td>
                    <td className="">
                        {(new Date(action.start_time*1000)).toLocaleDateString()}
                        <br/>
                        {(new Date(action.start_time*1000)).toLocaleTimeString()}
                    </td>
                    <td className="">
                        <Button
                            variant="secondary"
                            onClick={() => props.setActionUsersModal({show: true, action: action})}
                        >
                            <BsFillPeopleFill/>
                        </Button>
                    </td>
                    <td className="">
                        <Link to={`/action-edition/${action.id}`}>
                            <Button
                                className="small-font"
                                variant={action.is_active ? "success" : "secondary"}
                            >
                               <BsArrowRightSquareFill />
                            </Button>
                        </Link>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default ActionList;