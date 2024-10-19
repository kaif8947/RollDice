
import styled from "styled-components";

const RoleDice = ({currentdice,roleDice}) => {
 
  return (
    <DiceContainer>
      <div className="dice"
      onClick={roleDice}>
        <img src={`images/dice/dice${currentdice}.png`} alt="dice1" className="img1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;

  p{
    font-size: 24px;
  }
  .dice{
    cursor: pointer;
    width: 400px;
    height: 400px;
  } 
  .img1{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;