import { useEffect, useState } from "react";

const Check1 = () => {
    let [counter,setCounter] = useState(0);
    let [title, setTitle] = useState('my title');

    useEffect(()=> {
        console.log("hello from use effect no dependencies");
    });

    useEffect(() => {
        document.title=title;
    },[]);

    useEffect(()=> {
        console.log("hello from use effect empty array");
    },[]);

    useEffect(()=> {
        console.log("hello counter");
        if (counter%2 == 0){
            document.body.style.backgroundColor='red';
            }else{
            document.body.style.backgroundColor='blue';
            }
    },[counter]);

    useEffect(() => {
        document.title=title;
    },[title]);

    let clickHandler1 = () => {
        counter ++ ;
        setCounter(counter);
    
    }

    let changTitleHandler = () => {
         setTitle("change title")
    }

    let clickHandler2 = () => {
        counter+=2;
        setCounter(counter);
    }
    return (  
        <div>
            <h2> Check 1</h2>
            <button onClick={clickHandler1} > +1 Click to increment </button>
            <button onClick={clickHandler2} > +2 Click to increment </button><br/>
            <button onClick={changTitleHandler}>Click to change title</button>
            {counter}
        </div>
    );
}
 
export default Check1;