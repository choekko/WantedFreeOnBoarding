import { Component } from "react";
import BRAND_LIST from "../../utils/constants/BRAND_LIST";

class BrandFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { checkedBrand: new Map() };
  }

  render() {
    const { checkedBrand, handleCheckboxChange } = this.props;
    return (
      <div>
        {BRAND_LIST.map((brand, index) => (
          <label key={index}>
            <input type="checkbox" name={brand} checked={checkedBrand.get(brand)} onChange={handleCheckboxChange} />
            {brand}
          </label>
        ))}
      </div>
    );
  }
}

export default BrandFilter;
