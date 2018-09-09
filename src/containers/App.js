import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, sortBy, showUser, hideUser } from '../actions'
import UsersList from '../components/UsersList'
import UserInfo from '../components/UserInfo'
import Filter from '../components/Filter'

class App extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }


    render() {
        return (
            <div className="container-fluid">
                <Filter sortBy={ this.props.sortBy } users={ this.props.users } />
                {this.props.user.name ? <UserInfo user={ this.props.user } hideUser={ this.props.hideUser } /> : null}
                <UsersList users={ this.props.users } showUser={this.props.showUser} loading={ this.props.loading } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, user, loading } = state.users
    return { users, user, loading }
}

export default connect(mapStateToProps, { fetchUsers, sortBy, showUser, hideUser })(App)
