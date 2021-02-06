import React, { Component } from 'react';
import UserService from '../../Services/UserService';
import { createBrowserHistory } from 'history';
import './Style/UserListStyle.css'
//import Navigation from '../Header/Navigation';
export const history = createBrowserHistory();


class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInformation: [],
        }

        this.editUserInformation = this.editUserInformation.bind(this);
        this.deleteUserInformation = this.deleteUserInformation.bind(this);

    }
    componentDidMount() {
        UserService.getUser()
            .then((res) => {
                this.setState({ userInformation: res.data });
                console.log("get memeber api response:" + this.state.userInformation);
            });

    }



    editUserInformation(id) {

        this.props.history.push(`/update-user/${id}`)

    }

    deleteUserInformation(id) {
        UserService.deleteUser(id).then((res) => {
            this.setState({ userInformation: this.state.userInformation.filter(user => user.id !== id) });
            console.log("delete api response" + res)
        });
    }




    render() {
        return (
            <div>
                {/* <Navigation /> */}
                <div className="list_member">
                    <div className="list_member_heading">
                        <h2 className="h3" >User List</h2>
                    </div>
                    <div className="list_member_tableB">

                        <table className="list_member_tRow" >
                            <thead>
                                <tr>
                                    <th>User Id</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Gender</th>
                                    <th>Email ID</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip</th>
                                    <th>Country</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.userInformation.map(
                                        user =>
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.firstName}</td>
                                                <td>{user.lastName}</td>
                                                <td>{user.gender}</td>
                                                <td>{user.email}</td>
                                                <td>{user.city}</td>
                                                <td>{user.state}</td>
                                                <td>{user.zip}</td>
                                                <td>{user.country}</td>
                                                <td>
                                                    <button onClick={() => this.editUserInformation(user.id)} className="btn btn-info"><i class="fas fa-pencil-alt"></i></button>
                                                </td>
                                                <td>
                                                    <button style={{ marginLeft: "10px" }} onClick={() => this.deleteUserInformation(user.id)} className="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                                                </td>

                                            </tr>
                                    )
                                }
                            </tbody>

                        </table>

                    </div>
                </div>
            </div>
        );
    }
}

export default UserList;