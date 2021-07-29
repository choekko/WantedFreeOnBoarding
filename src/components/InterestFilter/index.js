import { Component } from "react";

class InterestFilter extends Component {
  render() {
    const { handleInterestCheckboxChange } = this.props;
    return (
      <div>
        <input type="checkbox" onChange={handleInterestCheckboxChange} />
        관심 없는 상품 숨기기
      </div>
    );
  }
}

export default InterestFilter;
