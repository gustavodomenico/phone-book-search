import React from 'react';

import InputGroup from '../containers/groups/InputGroup.js'
import ButtonInputGroup from '../containers/groups/ButtonInputGroup.js'
import TextInput from '../elements/TextInput.js'
import Button from '../elements/Button.js'

const SearchBar = (props) => {
    return (
        <InputGroup>
            <TextInput placeHolder="Search..."/>
            <ButtonInputGroup>
                <Button icon="glyphicon-plus-sign" />
            </ButtonInputGroup>
        </InputGroup>
    );
};

export default SearchBar;
