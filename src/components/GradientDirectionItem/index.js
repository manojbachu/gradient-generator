import {DirectionItem, GradientBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionDetails, onDirection, isActive} = props
  const {value, displayText} = directionDetails

  const onClickDirection = () => {
    onDirection(value)
  }

  return (
    <DirectionItem>
      <GradientBtn isActive={isActive} onClick={onClickDirection} type="button">
        {displayText}
      </GradientBtn>
    </DirectionItem>
  )
}

export default GradientDirectionItem
