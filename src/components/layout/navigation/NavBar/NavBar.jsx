import React from 'react';
import SearchBar from './SearchBar/SearchBar'
import { Container, StyledLink, SpanText } from './NavBar.styles.js'


const NavBar = ({ onSearch }) => {
    return (
        <Container>
            <SpanText><StyledLink to="/">Inicio</StyledLink></SpanText>
            <SpanText><StyledLink to="/about">About</StyledLink></SpanText>
            <SearchBar onSearch={onSearch}></SearchBar>
        </Container>
    );
};


export default NavBar;
