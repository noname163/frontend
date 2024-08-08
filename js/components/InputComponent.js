function InputComponent(props) {
    return (
        <div>
            {props.requireLabel && (
                <label htmlFor={props.inputId}>{props.labelName}</label>
            )}
            <input
                id={props.inputId}
                onChange={props.onChange}
                type={props.type}
                className={props.className}
            />
            {props.error && <div className="invalid-feedback">{props.error}</div>}
        </div>
    );
}
