import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectoryCategories } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryMenu } from "./directory.styles";

const Directory = ({ categories }) => (
  <DirectoryMenu>
    {categories.map(({ id, ...otherCategoryProps }) => (
      <MenuItem key={id} {...otherCategoryProps} />
    ))}
  </DirectoryMenu>
);

const mapStateToProps = createStructuredSelector({
  categories: selectDirectoryCategories
});
export default connect(mapStateToProps)(Directory);
