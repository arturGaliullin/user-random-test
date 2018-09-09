import React, { Component } from 'react'
import { Card, CardBody, CardTitle } from 'reactstrap'

export default class UserCard extends Component {
    onClick = user => {
        console.log(user)
        this.props.showUser(user)
    }

    capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        const { user } = this.props
        const capitalizeFirstLetter = this.capitalizeFirstLetter

        return (
            <div onClick={ () => this.onClick(user) }>
                <Card className='user-card'>
                    <CardBody className='user-card__content'>
                        <img
                            className='user-card__img'
                            src={user.picture.medium}
                            alt={`${user.name.title} ${user.name.first} ${user.name.last}`}
                        />
                        <CardTitle className='user-card__title'>
                            {capitalizeFirstLetter(user.name.title)} {capitalizeFirstLetter(user.name.first)} {capitalizeFirstLetter(user.name.last)}
                        </CardTitle>
                    </CardBody>
                </Card>
            </div>

        )
    }
}