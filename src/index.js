import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Content/>
    <Footer/>
  </React.StrictMode>
);
function Header(){
  return(
    <div style={{backgroundColor:'blue',fontFamily:'cursive'}}>
<h1>This is Technical Quiz</h1>

</div>
  );
}
function Content(){
  function display(event){
    event.preventDefault();
    let a1=event.target.q1.value;
    let a2=event.target.q2.value;
    let a3=event.target.q3.value;
    let marks=0;
   if(a1==="C.Rajendra prasad"){
    marks++;
   }
   if(a2==='A.Gangtok'){
    marks++;
   }
   if(a3==='D.Chandrababu Naidu'){
    marks++;
   }
   alert("you get "+marks +" marks");

  }
  return(
    <div style={{backgroundColor:'green',padding:'5px'}}>
<h1>Answer the Question Below</h1>
<form onSubmit={display}>
<Question
ques="Q1.who is our first president of india ?"
op1="A.Lalbahudar sastri"
op2="B.sardar vallabhaipatel"
op3="C.Rajendra prasad"
op4="D.None"
name="q1"
/>
<Question
ques="Q2.What is the capital of Sikkim ?"
op1="A.Gangtok"
op2="B.Dispur"
op3="C.Itanagar"
op4="D.Imphal"
name="q2"
/>
<Question
ques="Q3.Who is the current CheifMinister of AndhraPradesh ?"
op1="A.JaganMohan Reddy"
op2="B.NTR"
op3="C.Rajeshekar Reddy"
op4="D.Chandrababu Naidu"
name="q3"
/>
<input type="submit" value="Get Results" />
</form>
    </div>
  );
}
function Question(props){
  return(
    <div>
<h2>{props.ques}</h2>
<input type="radio" value= {props.op1} name={props.name}/>
<label>{props.op1}</label>
<input type="radio" value= {props.op2} name={props.name}/>
<label>{props.op2}</label>
<input type="radio" value= {props.op3} name={props.name}/>
<label>{props.op3}</label>
<input type="radio" value= {props.op4} name={props.name}/>
<label>{props.op4}</label>
    </div>
  );
}

function Footer(){
  return(
    <div className='foot'>
      <h1>This is footer component</h1>
    </div>
  );
}



