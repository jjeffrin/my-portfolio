import { Heading } from '@chakra-ui/react'
import React, { FC } from 'react'

interface HeaderProps {
    title?: string
}

const Header:FC<HeaderProps> = ({ title }) => {
    return (
        <div>
            <Heading
                bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
            >{ title }</Heading>
        </div>
    )
}

Header.defaultProps = {
    title: "Default title"
}

export default Header
