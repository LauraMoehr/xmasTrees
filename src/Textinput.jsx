export default function Textinput({ name, value, onTextInputChange, children }) {
    // function handleChange(event) {
    //     onTextInputChange(event.target.name, event.target.value)
    // }
    // return (
    //     <>
    //         <label htmlFor={name}>{children}</label>
    //         <input type="text" id={name} name={name} value={value} onChange={handleChange}/>
    //     </>
    // )
    return (
        <>
            <label htmlFor={name}>{children}</label>
            <input type="text" id={name} name={name} value={value} onChange={onTextInputChange}/>
        </>
    )
};