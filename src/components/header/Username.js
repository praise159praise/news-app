import React from 'react';
import styled from 'styled-components'

const Username = ({ usericon }) => {
    return (
        <User>
           {usericon} 
        </User>
    )
}

export default Username

const User = styled.div`
    width: 35px;
    height: 35px;
    background-color: purple;
    text-align: center;
    display: flex;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
`

