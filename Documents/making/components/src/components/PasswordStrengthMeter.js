import React from "react";
import zxcvbn from "zxcvbn";


const PasswordStrengthMeter = ({password}) => {

    const testResult =zxcvbn(password);
    // console.log(testResult); 
    // 스코어점수를 확인해 (점수는 0~4)

    const num = testResult.score * 100/4;
    // console.log(num); // 비번 암호화 정도에 따라, 0~100점으로 산출

    const createPassLabel =()=>{
        switch(testResult.score){
            // case 0:
                // return '사용할 수 없습니다.';
                case 1:
                return '보안정도 : 취약';
                case 2:
                return '보안정도 : 보통';
                case 3:
                return '보안정도 : 좋음';
                case 4:
                return '보안정도 : 강력';
                default:
                    return'';
        }
    }

    const funcProgressColor =()=>{
        switch(testResult.score){
            case 0:
                return '#828282';
                case 1:
                return '#EA1111';
                case 2:
                return '#FFAD00';
                case 3:
                return '#9bc158';
                case 4:
                return '#00b500';
                default:
                    return'none';
        }
    }

  const changePasswordColor = () => ({ 
    width: `${num}%`, // 퍼센트에 따라, 게이지가 달라짐.
    background: funcProgressColor(),
    height: '7px',
  });

  return (
    <>
      <div className="progress" style={{height: '7px', margin: '7px 0'}}/* <- 회색-bar 영역 */> 
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{color:funcProgressColor(), textAlign: "right"}}>{createPassLabel()}</p>
    </>
  );
};
export default PasswordStrengthMeter;
