import StyledComponent from './lib/StyledComponent'

export const Card = {
  Container: StyledComponent.div`
    border-radius: 5px;
    background-color: #f1faee;
    color: #e63946;
    padding: 10px;
    display: grid;
    grid-template-columns: 35% 75%;
    `,
  Cover: StyledComponent.img`
    width: 100%;
    height: 111px;
    border-radius: 2px;

    `,
  data: StyledComponent.div`
    width: 90%;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-between;
    `,
  Title: StyledComponent.div`
    color: #457b9d;
    font-weight: bold;
    font-size: 14px;
  `,
  Meta: StyledComponent.div`
    font-size: 14px;
  `,
}

export const Result = {
  Container: StyledComponent.div`
    text-align: center;
    display: grid;
    grid-template-columns: 25% 50% 25%;
      `,
  List: StyledComponent.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 50%);
    position: relative;
    grid-gap: 20px;
      `,
  Section: StyledComponent.div`
    display: flex;
    align-items: center;
    justify-content: center;
        `,
  Next: StyledComponent.i`
    width: 10px; 
    height: 10px; 
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    cursor: pointer;
    ${props => props.disable && 'display: none'};
      `,
  Prev: StyledComponent.i`
  width: 10px; 
  height: 10px; 
  border: 3px solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  cursor: pointer;
  ${props => props.disable && 'display: none'};
      `,
}

export const Form = {
  Container: StyledComponent.div`
    text-align: center;
    display: grid;
    grid-template-columns: 20% 40% 20%;
    margin-bottom: 20px;
      `,
  Input: StyledComponent.input`
    grid-template-columns: 25% 50% 25%;
    border: none;
    padding: 10px 20px;
    font-size: 24px;
    grid-column-start: 2;
    border-radius: 5px 0 0 5px;
    color: #457b9d;
      `,
  Button: StyledComponent.button`
    text-align: center;
    cursor: pointer;
    border: none;
    background-color: #1d3557;
    color: #a8dadc;
    font-size: 24px;
    border-radius: 0 5px 5px 0;
      `,
}

export const Alert = StyledComponent.div`
    width:100%;
    display: flex; 
    align-items: center;
    justify-content: center;
  `
