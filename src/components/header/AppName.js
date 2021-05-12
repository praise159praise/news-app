import React from 'react'
import styled from 'styled-components'

const AppName = ({ aname }) => {
    return (
        <Name className='app-name'>
                {aname}
            </Name>
    )
}

export default AppName

const Name = styled.div`
    font-size:20px;
`