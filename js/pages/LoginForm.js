function LoginForm() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <div className="mb-3">
                    <InputComponent
                        requireLabel={true}
                        inputId="username"
                        labelName="Username"
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <InputComponent
                        requireLabel={true}
                        inputId="password"
                        labelName="Password"
                        type="password"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
