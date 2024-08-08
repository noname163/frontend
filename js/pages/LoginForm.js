function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        if (!email) {
            return 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            return 'Email is invalid';
        }
        return '';
    };

    const validatePassword = (password) => {
        if (!password) {
            return 'Password is required';
        } else if (password.length < 6) {
            return 'Password must be at least 6 characters';
        }
        return '';
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setErrors((prevErrors) => ({ ...prevErrors, email: validateEmail(newEmail) }));
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setErrors((prevErrors) => ({ ...prevErrors, password: validatePassword(newPassword) }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const emailError = validateEmail(email);
        const passwordError = validatePassword(password);

        if (emailError || passwordError) {
            setErrors({ email: emailError, password: passwordError });
            return;
        }

        // Add form submission logic here
        console.log('Form submitted!', { email, password });
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <InputComponent
                        name="email"
                        type="email"
                        inputId="email"
                        labelName="Email address"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        requireLabel="true"
                        onChange={handleEmailChange}
                        error={errors.email} // Pass error message
                    />
                </div>
                <div className="mb-3">
                    <InputComponent
                        name="password"
                        type="password"
                        inputId="password"
                        labelName="Password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        requireLabel="true"
                        onChange={handlePasswordChange}
                        error={errors.password} // Pass error message
                    />
                </div>
                <ButtonComponent
                    id="submit-btn"
                    name="Submit"
                    divClassName="form-group"
                    buttonClassName="btn btn-primary"
                    onClick={handleSubmit}
                />
            </form>
        </div>
    );
}
