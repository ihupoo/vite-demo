import * as React from "react";
import { Component } from "react";


export interface IColumnProps {
  /** prop1 description */
  prop1?: string;
  /** prop2 descriion */
  prop2: number;
  /**
   * prop3 descr
   */
  prop3: () => void;
  /** prop4 descripton */
  prop4: "opon1" | 'opsdf5n2' | "n3";
}

 export interface IColumnPr {
	/** prs descrip  tion */
	prs?: string;
	
  }
  function A(props:IColumnPr) {
	return 122
}
  export default A
  
export class Column extends Component<IColumnProps, {}> {
  render() {
    return null;
  }
}
