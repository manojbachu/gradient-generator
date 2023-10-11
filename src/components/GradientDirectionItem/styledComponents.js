import styled from 'styled-components'

export const DirectionItem = styled.li`
  list-style-type: none;
  margin: 5px;
  @media (max-width: 576px) {
    width: 45%;
  }
`
export const GradientBtn = styled.button`
  background-color: ${props => (props.isActive ? '#ededed' : '#ffffff79')};
  width: 80px;
  border: none;
  padding: 8px 10px 8px 10px;
  border-radius: 6px;
  font-family: 'Roboto';
  color: #014f7b;
  font-weight: 500;
  opacity; ${props => (props.isActive ? 1 : 0.5)};
  @media (max-width: 576px) {
    width: 100%;
  }
`
