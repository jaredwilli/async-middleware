import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import moduleName from '../';

class UserList extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser = user => {
        return (
            <div key={user.id} className="card card-block">
                <h4 className="card-title">{user.name}</h4>
                <p className="card-text">{user.company.name}</p>
                <a href={`http://${user.website}`} className="button primary">{user.website}</a>
            </div>
        );
    }

    render() {
        return (
            <div className="user-list">
                {this.props.users.map(this.renderUser)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps, actions)(UserList);
