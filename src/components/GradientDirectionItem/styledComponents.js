// Style your elements here
import styled from 'styled-components/macro'

export const ListItem = styled.li`
  width: 49;
  list-style-type: none;
  @media screen and(min-width: 768px) {
    width: 24%;
  }
`

export const DirectionButton = styled.button`
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: '#ffffff';
  font-family: 'Roboto';
  font-size: 14px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  width: 100px;
  text-align: center;
  border-radius: 6px;
  border: none;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 10px;
`
