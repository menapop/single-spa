const DynamicField = ({id,name , value , onTypeChange , onValueChange }) => {
  
    return (
        <div className="ui four column doubling stackable grid container">
            <div className="column">
                        <select  data-id={id}  name={name}  value={name}  onChange={onTypeChange}   >
                        <option value=''> </option>
                        <option value="position">position</option>
                        <option value="title">title</option>
                        <option value="Phone">Phone</option>
                        </select>
            </div>

            <div className="column">
            <input className="column"
                    data-id = {id}
                    type="text"
                    name={id}
                    placeholder={name}
                    value={value}
                    onChange={onValueChange}
                    disabled={!name}
                  />
            </div>       
        </div>
    )
}

export default DynamicField ;