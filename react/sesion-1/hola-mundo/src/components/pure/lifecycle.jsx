// Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida

import React, { Component } from "react";

export default class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log("CONSTRUCTOR:Cuando se instancia el componente");
  }
  // WILLMOUNT: DEPRECATED
  componentWillMount() {
    console.log("WILLMOUNT: Antes de el montaje del componente");
  }
  componentDidMount() {
    console.log(
      "DIDMOUNT: Despues de acabar el montaje del componente , antes de renderizarlos"
    );
  }
  // WILLRECEIVEPROPS: DEPRECATED
  componentWillReceiveProps(nextProps) {
    console.log("WILLRECEIVEPROPS: si va a recibir nuevas props");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // Sirve para controlar si el componente debe o no actualizarse
    // return true;
    // return false
  }
  // WILLUPDATE: DEPRECATED
  componentWillUpdate(nextProps, nextState) {
    console.log("WILLUPDATE: Justo antes de actualizarse");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("DIDUPDATE: Justo despues de actualizarse");
  }

  componentWillUnmount() {
    console.log("WILLUNMOUNT: Justo antes de desaparecer");
  }
  render() {
    return <div>lifecycle</div>;
  }
}
