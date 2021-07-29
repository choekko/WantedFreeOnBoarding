import { Component } from "react";

class BrandFilter extends Component {
  render() {
    const { brandList, handleCheckbox } = this.props;
    return (
      <div>
        {brandList.map((brand, index) => (
          <label key={index}>
            <input type="checkbox" checked={index} onChange={() => handleCheckbox(index, brand)} />
            {brand}
          </label>
        ))}
      </div>
    );
  }
}

export default BrandFilter;
