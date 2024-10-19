import { useState } from "react";
import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore"
import styled from "styled-components"
import Rules from "./rules";
import { Button, OutlineButton } from "../Styled/Button";
const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const[currentdice,setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [showRules,setShowRules] = useState(false);
  
  const generateRandomNumber = (min,max) =>{
    return Math.floor(Math.random()*(max-min)+min);
  };
  const roleDice = () =>{
    if(!selectedNumber)
    {
      setError("You have not Selected any Number");
      return;
    }
   
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    

    if(selectedNumber==randomNumber){
      setScore((prev)=>prev+randomNumber);
    }
    else{
      setScore((prev)=>prev-2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = ()=>{
    setScore(0);
  }
  return (
    <Maincontainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
        error={error}
        setError={setError}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}/>
        </div>
        <RoleDice roleDice={roleDice}
        currentdice={currentdice}/>
        <div className="btns">
          <OutlineButton 
          onClick={resetScore}>Reset Score</OutlineButton>
          <Button
          onClick={()=>setShowRules(prev=>!prev)}
          
          >{
            showRules ?"Hide":"Show"}Rules</Button>
        </div>
        {showRules &&<Rules/>}
    </Maincontainer>
    
  );
};

export default GamePlay

const Maincontainer = styled.main`
padding-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    gap: 10px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`