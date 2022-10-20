import styles from "../InputText/styles.module.css"
import VMasker from "vanilla-masker";
import {useRef, useState, useEffect} from "react";
let props = {
    label:String,
    value:String,
    setValue:Function,
    placeholder:String,
    required:Boolean,
    type:String,
    name:String,
    mask:String,
    open:Boolean,
    invalid:Boolean,
    readonly:Boolean,
    precision:Number,
}


export default function InputMask({label, value, setValue, placeholder,name, type = "tel", mask = "phone", open = false, required = false, invalid = null, readonly = false, precision = 2} = props) {

  const input = useRef(null);
  const [focusLength, setFocusLength] = useState(0);

  const masks = {
    cpf:"999.999.999-99", // -> 999.111.111-01
    cnpj:"99.999.999/9999-99", // -> 999.111.111-01
    phone:"(99) 99999-9999",
  }



  const maskValue = (val)=>{

    if(mask === "cpf")
      mask = val.length > 14 ? "cnpj" : "cpf";

    if(mask === "double")
      return !name? setValue(VMasker.toMoney(val,{precision:precision})): setValue(VMasker.toMoney(val,{precision:precision}),name);

    if(mask === "number")
      return setValue(parseInt(VMasker.toNumber(val)))

    if(mask === "percent"){
      if(val.includes(",") || val.length > 3){
        val = VMasker.toMoney(val);
      }else{
        val = parseInt(VMasker.toNumber(val))
        val = val < 0 ? 0 : val;
      }
      if(val === "0,00"){
        val = 0;
      }
      return !name? setValue(val): setValue(val,name);
    }


    let isAdd = true;
    if(val.length < value.length)
      isAdd = false
      
    val = VMasker.toPattern(val,masks[mask]);

    if(!isAdd){
      let start = input.current.selectionStart;
      setFocusLength(start);
    }else{
      let start = input.current.selectionStart;
      let more = val[start] === " " || val[start] === ")" || val[start] === "-" || val[start] === "." || val[start] === "/" ? 2 : 1;
      setFocusLength(start + more);
    }

    !name? setValue(val): setValue(val,name);
  }

  useEffect(()=>{
    if(focusLength){
      input.current.selectionStart = focusLength;
      input.current.selectionEnd = focusLength;
    }
  },[value,focusLength])
  

  return (
    <div className={styles.input_text}>
        
        <input 
        className={invalid?styles.valid:""}
        ref={input}
        type={type} 
        readOnly={readonly}
        required={required} 
        placeholder={placeholder} 
        value={value?value:""} 
        onChange={(e)=> maskValue(e.target.value)} />
        {label && <label style={{bottom:value || open?"100%":"0"}}>{label}</label>}
        {invalid 
        ? <p className={styles.invalid_alert}>{invalid}</p>
        : <></>
      }
    </div>
  )
}
