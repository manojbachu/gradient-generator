import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  AppContainer,
  MainHeading,
  SubHeading,
  DirectionBtns,
  ColorsPickContainer,
  GradientContainer,
  ColorInput,
  GradientLabel,
  GenerateBtn,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secondColor: '#014f7b',
    direction: gradientDirectionsList[0].value,
    gradientValues: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onDirection = value => {
    this.setState({direction: value})
  }

  onClickGenerate = () => {
    const {firstColor, secondColor, direction} = this.state
    this.setState({
      gradientValues: `to ${direction}, ${firstColor}, ${secondColor}`,
    })
  }

  render() {
    const {gradientValues, firstColor, secondColor, direction} = this.state

    return (
      <AppContainer
        gradientValues={gradientValues}
        data-testid="gradientGenerator"
      >
        <MainHeading>Generate a CSS Color Gradient</MainHeading>
        <SubHeading>Choose Direction</SubHeading>
        <DirectionBtns>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              directionDetails={eachDirection}
              onDirection={this.onDirection}
              isActive={eachDirection.value === direction}
            />
          ))}
        </DirectionBtns>
        <SubHeading>Pick the Colors</SubHeading>
        <ColorsPickContainer>
          <GradientContainer>
            <GradientLabel>{firstColor}</GradientLabel>
            <ColorInput
              value={firstColor}
              type="color"
              onChange={this.onChangeFirstColor}
            />
          </GradientContainer>
          <GradientContainer>
            <GradientLabel>{secondColor}</GradientLabel>
            <ColorInput
              onChange={this.onChangeSecondColor}
              value={secondColor}
              type="color"
            />
          </GradientContainer>
        </ColorsPickContainer>
        <GenerateBtn type="button" onClick={this.onClickGenerate}>
          Generate
        </GenerateBtn>
      </AppContainer>
    )
  }
}

export default GradientGenerator
