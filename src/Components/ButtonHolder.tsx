import React from 'react';
import styled from 'styled-components';
import { BsArrowClockwise } from 'react-icons/bs';

export const ButtonHolder = function(props: any) {
    return (<>
    <ButtonHolderWrapper>
        <TextHolder>Iteration count: {props.i}</TextHolder>
        <RefreshBtn onClick={props.onRefresh}><BsArrowClockwise></BsArrowClockwise></RefreshBtn>
        <TextHolder><small>Made by <A target="_blank" href="https://github.com/capure" >Capure</A></small></TextHolder>
    </ButtonHolderWrapper>
    </>);
}


const A = styled.a`
    text-decoration: none;
    color: white;
    outline: none;
    transition: 1s ease;
    &:hover {
        color: #f57a54;
    }
`;

const RefreshBtn = styled.div`
    color: white;
    font-size: 50px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s ease;
    &:hover {
        color: #427afd;
        cursor: pointer;
    }
`;

const TextHolder = styled.div`
    color: white;
    font-size: 30px;
    height: 100%;
    width: 320px;
    margin-left: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const ButtonHolderWrapper = styled.div`
    width: 100%;
    height: 150px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #1c1b1d;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;