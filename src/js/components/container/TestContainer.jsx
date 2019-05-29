import React from 'react';
import ReactDOM from 'react-dom';
import TestPresentational from '../presentational/TestPresentational.jsx';

class TestContainer extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <TestPresentational/>
        )
    }
}

export default TestContainer;