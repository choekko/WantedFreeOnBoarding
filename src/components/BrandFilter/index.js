import { Component } from "react";
import BRAND_LIST from "../../utils/constants/BRAND_LIST";

class BrandFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { checkedBrand: new Map() };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const brand = event.target.name;
    const isChecked = event.target.checked;
    this.setState(prev => ({ checkedBrand: prev.checkedBrand.set(brand, isChecked) }));
  }

  render() {
    return (
      <div>
        {BRAND_LIST.map((brand, index) => (
          <label key={index}>
            <input type="checkbox" name={brand} checked={this.state.checkedBrand.get(brand)} onChange={this.handleChange} />
            {brand}
          </label>
        ))}
        <div>{console.log(this.state.checkedBrand)}</div>
      </div>
    );
  }
}

export default BrandFilter;
