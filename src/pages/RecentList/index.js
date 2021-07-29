import React from "react";
import "./style.css";
import PRODUCT_LIST from "../../utils/constants/PRODUCT_LIST";
import BrandFilter from "../../components/BrandFilter";

class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedBrand: [] };
    this.handleSelectedBrand = this.handleSelectedBrand.bind(this);
  }

  handleSelectedBrand(index, checkedList, emptyList) {}

  render() {
    const brandSet = new Set();
    PRODUCT_LIST.map(product => brandSet.add(product.brand));
    const brandList = Array.from(brandSet);
    const emptyList = new Array(brandList.length).fill(false);

    return (
      <div className="recentList-page">
        <BrandFilter brandList={brandList} handleCheckbox={this.handleSelectedBrand} />
      </div>
    );
  }
}

export default RecentListPage;
