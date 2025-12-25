function Input(props) {
    return (
        <div>
            <input
                id="input"
                type={props.tp}
                placeholder={props.ph}
                name={props.name}
                onChange={props.onChange}
                value={props.value}
            />
        </div>
    );
}

export default Input;
