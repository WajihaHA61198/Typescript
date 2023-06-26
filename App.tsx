import React from "react";

// @-js assume itself the type of variables w/o even define them previously
let myname="wajiha";
// @-it's TS format and way of definig the variables by it's types
let name: string;
let babyName: any; // not recommended bcs we are not defining types here
let baby_2_Name: unknown; // unknown is a similar, but safer alternative to any.
let age: number;
let ageDual: number | string; // I want both DT for ageDual var (number + string)
let isStudent: boolean;
let hobbies: string;
let hobby: []; // array
let role: [number, string];  // tuple
role = [5, "wajiha"];

// @-Object
// let person: Object;
type Person = { //Object
  name: string;
  age?: number;  //optional
};
let person: Person = {
  name: "wajiha",
  age: 21,
};
// let lotsOfPeople: Person=[];

// @-Functions
function printName(name: string){
  console.log(name);
}
printName("Haris");

// let printName1: Function;
let printName1: (name: string) => void; // since it's not returning anything hence void...

// @-Aliases and Interface
// 1-Aliases
type exOFAliases = { 
  name: string;
  age?: number; 
};
// 2-Interface
interface exOFInterface { 
  name: string;
  age?: number; 
};
// Aliases means joining of two circles EXAMPLE
type X = {
  a?: string;
  b?: number;
}
type Y = X &{ //contains X prop. as well as for Y too....
  c?: string;
  d?: number;
}
let y: Y ={
  a:"wajiha",
  b:2
}
// Interface EXAMPLE can do it viceversa for Persons and Guy
interface Persons { 
  name: string;
  age?: number; 
};
interface Guy extends Persons{
  profession: string;
}

function App() {
  return <div className="App">hello</div>;
}

export default App;
