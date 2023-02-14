import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./pricebar.css"

export default function PriceBar({rangeUpdateHandler, rangeValue, maxRange}) {

  return (
    <RangeSlider onInput={e => rangeUpdateHandler(e)} value={rangeValue} min={0} max={maxRange}/>
  )
}