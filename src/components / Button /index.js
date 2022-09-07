import './styles.css'; 
function Button ({text, onClick}) {
    return (
        <button onClick= {onClick} className= 'button is-link is-large' >{text}</button>
    )
}
export default Button; 