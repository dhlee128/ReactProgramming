import React, {useState, useEffect} from 'react';

//useEffect Hook을 사용하여 페이지 로드시 필요한 기능 수행
function UseEffectDemo(){
    const [agree, setAgree] = useState(false);
    const [agree2, setAgree2] = useState(false);

    // useEffect(() => {
    //     console.log("페이지 로드 또는 UI 변경");
    // });

    //useEffect(() => {
    //    console.log("페이지 로드");
    //}, []);

    useEffect(() => {
        console.log("agree 값이 변경");
    }, [agree]);

    return(
        <>
            <h1>UseEffectDemo</h1>
            <h3>Agree</h3>
            <input type="checkbox" value={agree} onChange={() => setAgree(agree => !agree)}/>
            {agree ? "동의":"비동의"}
            <h3>Agree2</h3>
            <input type="checkbox" value={agree2} onChange={() => setAgree2(agree2 => !agree2)}/>
            {agree2 ? "동의":"비동의"}
        </>
    );
}

export default UseEffectDemo;