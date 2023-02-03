import React, { useEffect } from "react";

export interface DropDownProps {
   name: string,
   label: string,
   placeholder: string
   disabled?: boolean

   value: any,
   setValue: (value: any) => void,
   getOptionLabel: (option: any) => string,
   getOptionValue: (option: any) => string,
   options: any[]
}

const DropDown: React.FC<DropDownProps> = ({ disabled=false, label, placeholder, name, value, setValue, options = [], getOptionLabel, getOptionValue}) => {
   return (
      <div className="field">
         <label htmlFor={name}>{label}</label>
         <select disabled={disabled} name={name} value={value} onChange={(e) => setValue(e.target.value)}>
            <option value={undefined}>{placeholder}</option>
            {options.map((opt, index) => (
               <option key={index} value={getOptionValue(opt)}>{getOptionLabel(opt)}</option>
            ))}
         </select>
      </div>
   );
}  

export default DropDown;