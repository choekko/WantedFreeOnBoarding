import React from "react";
import "./style.css";
import BRAND_LIST from "../../utils/constants/BRAND_LIST";
import BrandFilter from "../../components/BrandFilter";

class RecentListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedBrand: [], checkedState: new Array(BRAND_LIST.length).fill(false) };
    this.handleSelectedBrand = this.handleSelectedBrand.bind(this);
  }

  handleSelectedBrand(index, brand) {
    const updatedCheckedState = this.state.checkedState.map((item, i) => (i === index ? !item : item));
    console.log(updatedCheckedState);
  }

  render() {
    return (
      <div className="recentList-page">
        <BrandFilter brandList={BRAND_LIST} checkedState={this.state.checkedState} handleCheckbox={this.handleSelectedBrand} />
      </div>
    );
  }
}

export default RecentListPage;
