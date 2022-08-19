import { useState } from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";

function Password() {
  const [password, setPassword] = useState("");
  

  return (
    <div className="container">

        <h3 className="text-center my-5">Password</h3>
        <div className="form-group" >
          <input
            type="password"
            className="form-control shadow-none"
            placeholder="비밀번호를 입력하세요."
            onChange={e => setPassword(e.target.value)}
          />
        <PasswordStrengthMeter password={password} />
        </div>
    
    </div>
  );
}

export default Password;
