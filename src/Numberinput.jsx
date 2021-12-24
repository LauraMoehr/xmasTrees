export default function Numberinput({ children, name, value, onNumberInputChange }) {
    // if (event.target.name === 'price') {
    //   parseInt(event.target.value)}
    return (
        <>
            <label htmlFor={name}>{children}</label>
            <input type="number" id={name} name={name} onChange={onNumberInputChange} value={value}/><br/>
        </>
    )
};