function ButtonComponent(props) {
    return (
        <div className={props.divClassName}>
            <button id={props.id} className={props.buttonClassName} onClick={props.onClick}>{props.name}</button>
        </div>
    )
}