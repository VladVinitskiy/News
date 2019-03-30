import React,{Component} from 'react';

export default class Authorization extends Component{
    state={
        isAuthorize:true
    };

    onSubmit=(name, password,remembered)=>{
        if (localStorage.getItem(name) && JSON.parse(localStorage.getItem(name)).password === password ){
            this.props.changeAuthorize(this.state.isAuthorize,JSON.parse(localStorage.getItem(name)).name);
            if (remembered===true){
                localStorage.setItem('remembered', JSON.stringify(name));
            }
            this.props.history.push('/');
            // console.log(JSON.parse(localStorage.getItem(name)))
        }
    };

    render() {
        let name,password,remembered;
        return(
            <div className='form_valid'>
                <form
                    className='forms'
                    onSubmit={e=>{
                        e.preventDefault();
                        this.onSubmit(name.value, password.value,remembered.checked)}
                    }>
                    <fieldset className="account-info">
                        <label>
                            User name
                            <input
                                ref={node => {name = node}}
                                type='text'
                                placeholder='Name'
                                required
                                minLength='4'
                                maxLength='10'
                                title="Username must have only letters"
                                pattern="[a-zA-Z]{4,10}"
                            />
                        </label>
                        <label>
                            Password
                            <input
                                ref={node => {password = node}}
                                type='password'
                                placeholder='Password'
                                minLength='4'
                                maxLength='10'
                                pattern="[a-zA-Z0-9_]{4,10}"
                                title="Password must have from 4 to 10 symbols"
                                required
                            />
                        </label>
                    </fieldset>
                    <fieldset className="account-action">
                        <input className="btn" type='submit' value='Sign In'/>
                        <label>
                            <input
                                ref={node => {remembered = node}}
                                type="checkbox"
                                name="remember"
                            />
                            Remembered
                        </label>
                    </fieldset>
                </form>
            </div>
        )
    }
}