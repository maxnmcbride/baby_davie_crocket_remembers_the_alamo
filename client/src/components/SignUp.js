
function SignUp () {
    return (
        <div >
            <form className="signUpFormContainer">
                <div className="nameInputs">
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                    />
                    <input 
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                    />
                </div>
                <input 
                    type='text'
                    name='username'
                    placeholder='Username'
                />
                <input 
                    type='text'
                    name='password'
                    placeholder='Create Password'
                />
                <input 
                    type='text'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignUp;