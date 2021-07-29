import React from "react";
import "./style.css";
import PRODUCT_LIST from "../../utils/constants/PRODUCT_LIST";
import BrandFilter from "../../components/BrandFilter";

class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
    this.setBrands = this.setBrands.bind(this);
  }

  setBrands(item) {
    console.log(item);
  }

  render() {
    const brandSet = new Set();
    PRODUCT_LIST.map(product => brandSet.add(product.brand));

    return (
      <div className="recentList-page">
        <div>RecentList page {this.setBrands(brandSet)}</div>
        <BrandFilter list={PRODUCT_LIST} />
      </div>
    );
  }
}

export default RecentListPage;
