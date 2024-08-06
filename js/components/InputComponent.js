function InputComponent(props) {
    return (
        <div>
            {props.requireLabel && (
                <label htmlFor={props.inputId}>{props.labelName}</label>
            )}
            <input id={props.inputId} type={props.type} className={props.className} />
        </div>
    );
}
