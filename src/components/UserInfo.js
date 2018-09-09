import React, { Component } from 'react'
import {hideUser} from "../actions";


export default class UserInfo extends Component {
    capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const { user, hideUser } = this.props
        const capitalizeFirstLetter = this.capitalizeFirstLetter

        return(
            <div className='user'>
                <span onClick={ () => hideUser() } className='user_close'>X</span>
                <img
                    className='user__img'
                    src={user.picture.large}
                    alt={`
                     ${capitalizeFirstLetter(user.name.title)}
                     ${capitalizeFirstLetter(user.name.first)}
                     ${capitalizeFirstLetter(user.name.last)}
                     `}
                />
                <h3 className='user__title'>
                    {capitalizeFirstLetter(user.name.title)} {capitalizeFirstLetter(user.name.first)} {capitalizeFirstLetter(user.name.last)}
                </h3>
                <div className='user__content'>
                    <h3 className='user__title'>Contacts</h3>
                    <div><b>Email:</b>{user.email}</div>
                    <div><b>Phone:</b>{user.phone}</div>
                </div>
                <div className='user__content'>
                    <h3 className='user__title'>Location</h3>
                    <div><b>State:</b>{capitalizeFirstLetter(user.location.state)}</div>
                    <div><b>City:</b>{capitalizeFirstLetter(user.location.city)}</div>
                    <div><b>Street:</b>{user.location.street}</div>
                </div>
            </div>
        )
    }
}
