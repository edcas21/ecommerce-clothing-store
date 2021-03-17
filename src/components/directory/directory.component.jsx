import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';


// Components
import MenuItem from "../menu-item/menu-item.component";

// Styles
import "./directory.styles.scss";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(
      // Destructuring section keys. Already called this.state so now within scope of these keys
      ({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      )
    )}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
