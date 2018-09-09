import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    { value: 'first_name', label: 'Sort by first name' },
    { value: 'last_name', label: 'Sort by last name' },
    { value: 'reverse', label: 'Reverse order'}
]

export default class Filter extends Component {
    state = {
        selectOption: null
    }

    handleChange = selectedOption => {
        this.setState({ selectedOption })
        this.props.sortBy(selectedOption.value, this.props.users)
    }

    render() {
        const { selectedOption } = this.state

        return(
            <div style={{marginBottom: 20}}>
                <Select
                    value={ selectedOption }
                    onChange={this.handleChange}
                    options={options}
                />
            </div>
        )
    }
}
