import React from 'react';
import {Navigate} from "react-router-dom";
import PropTypes from 'prop-types';

function Private(props) {
    if(localStorage.getItem("token")) {
        return <>{props.children}</> ;
    }else {
        return <Navigate to="/" />
    }
}
Private.propTypes = {
    children: PropTypes.node.isRequired
};
export default Private;
