import React from 'react'

function AKAButton(props) {

  const { clickEffect, canSelect, border, hoverGlow, hoverInvert } = props.options;
  const css = props.css;

  let bgColor = props.bgColor;
  let color = props.color;
  let fsize = props.fontSize;
  let text = props.text;
  let hglow = hoverGlow?"box-shadow: 0 0 0.5em;":"";
  let cborder = border?"border: 1px solid;padding:0.2em 1em;border-radius:10px;":"";
  let ceffect = clickEffect?"transform:scale(0.890);":"";
  let cselect = canSelect?"":"-webkit-user-select: none; -ms-user-select: none; user-select: none;";
  let invertcss = "color: "+bgColor+" !important;background-color: "+color+" !important;";
  let hinvert = hoverInvert?invertcss:"";
  
  return (
    <>
       <button style={{color:color,backgroundColor:bgColor,fontSize:fsize}}>{text}</button>
       <style jsx>
        {`button{
            all:unset;
            transition : transform 200ms;
            ${cselect}
            ${cborder}
            ${css}
        }
        button:active{
            ${ceffect}
        }
        button:hover{
            ${hinvert}
            ${hglow}
        }`}
        </style>
    </>
  )
}

export default AKAButton
