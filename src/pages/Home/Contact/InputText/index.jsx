import styles from "./styles.module.css"

let props = {
  label:String,
  value:String,
  setValue:Function,
  placeholder:String,
  required:Boolean,
  type:String,
  name:String,///chave do objero que sera retoranada se preciso
  open:Boolean,
  values:Array, //motrar lista de sugestoes
  invalid:String | null, //
  key:Number | String, //para diferenciar input list
  readOnly:Boolean, //apenas leitura
}

export default function InputText({label, value, setValue,values, placeholder, type = "text", name, required = false, open = false, invalid = null, key = "", readonly = false} = props) {
  return (
    <div className={styles.input_text}>
        
      <input 
        list={values?label+"_id"+key:""}
        className={invalid?styles.valid:""}
        type={type} 
        readOnly={readonly}
        required={required} 
        placeholder={placeholder} 
        value={value?value:""} 
        onChange={(e)=> !name? setValue(e.target.value): setValue(e.target.value,name)} />
      {label && <label style={{bottom:value || open?"100%":"0"}}>{label}</label>}
        {values?
          <datalist id={label+"_id"+key}>
            {values.map((val,key)=>{
              return (<option key={key} value={val}></option>)
            })}
          </datalist>
          :<></>
        }

      {invalid 
        ? <p className={styles.invalid_alert}>{invalid}</p>
        : <></>
      }
    </div>
  )
}
