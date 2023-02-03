import React from "react";

export interface DropDownProps {
   name: string,
   label: string,

   value: any,
   setValue: (value: any) => void,
   getOptionLabel: (option: any) => string
   options: any[]
}

const DropDown: React.FC<DropDownProps> = ({ label, name, value, setValue, options, getOptionLabel }) => {
   return (
      <div className="field">
         <label htmlFor={name}>{label}</label>
         <select name={name} value={value} onChange={(e) => setValue(e.target.value)}>
            {options.map((opt, index) => (
               <option key={index} value={opt}>{getOptionLabel(opt)}</option>
            ))}
         </select>
      </div>
   );
}  

export default DropDown;