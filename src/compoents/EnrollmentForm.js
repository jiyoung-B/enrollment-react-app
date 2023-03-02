import React from "react";
import { useState } from "react";
import '../App.css';


const EnrollmentForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const handleSubmit = (e) => {
        setWelcomeMessage(`환영합니다, ${firstName} ${lastName} 님!!`);
        e.preventDefault(); // submit 기능 중지
    };

    return(
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}>
            <h1>대학생 등록양식</h1>
                <div><label>First Name </label>
                    <input type="text" name="fname"
                    onBlur={(e) =>// e는 이벤트가 일어나는 주체 : 즉, input태그에서 값을 가져와서 firstName을 셋팅한다.
                        setFirstName(e.target.value)} /></div>

                <div><label>Last Name </label>
                    <input type="text" name="lname"
                    onBlur={(e)=>setLastName(e.target.value)}/></div>
                <div><button type="submit">등록하기</button></div>
            </form>
            <div>
                <label id="studentMsg" className="message"></label>
                {welcomeMessage}
            </div>

        </div>

    );
};
export default EnrollmentForm;