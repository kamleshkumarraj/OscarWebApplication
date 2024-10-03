
function InputOption({optionsList , name}) {
  return (
    <div className="w-full ">
        <select name={name} id={name}>
           {
            optionsList.map((option , i) => {
                return <option className="w-full" key={i} value={option}>{option}</option>
            })
           }
        </select>
    </div>
  )
}


export default InputOption
