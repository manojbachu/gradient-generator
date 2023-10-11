// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValues});
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ededed;
`
export const MainHeading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
`
export const SubHeading = styled.p`
  font-family: 'Roboto';
`
export const DirectionBtns = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`
export const ColorsPickContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`

export const GradientLabel = styled.p`
  color: #ffffff;
  margin-bottom: 10px;
`

export const ColorInput = styled.input`
  padding: none;
  background: none;
  border: none;
  width: 100px;
  height: 42px;
`
export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  border: none;
  color: #1e293b;
  font-weight: 500;
  font-family: 'Roboto';
  padding: 8px 20px 8px 20px;
  border-radius: 3px;
  margin-top: 25px;
`
