import React from "react";

const NumberedList = props => <ol {...props.attributes}>{props.children}</ol>;

export default NumberedList;
