import styles from './Form.module.scss';

const Form = props => {
    return ( 
        <>
            <form className={styles.selectForm}>
    
                <div className={styles.formGroup}>
                    <label for="fname" className={styles.Label}>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." className={styles.input}/>
                </div>

                <div className={styles.formGroup}>
                    <label for="lname" className={styles.Label}>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." className={styles.input}/>
                </div>

                <div className={styles.radioFormGroup}>
                    <h4>Subscribe</h4>
                    <label className={styles.radioBtn}>
                        <input type="checkbox"/>
                        <span className={styles.checkmark}></span>
                    </label>
                    Yes
                    <label className={styles.radioBtn}>
                        <input type="checkbox"/>
                        <span className={styles.checkmark}></span> 
                    </label>
                    No
                </div>

                <div className={styles.radioFormGroup}>
                    <h4>payment</h4>
                    <label className={styles.radioBtn2}>
                        <input type="checkbox"/>
                        <span className={styles.checkmark2}></span>
                    </label>
                    Debit card
                    <label className={styles.radioBtn2}>
                        <input type="checkbox"/>
                        <span className={styles.checkmark2}></span> 
                    </label>
                    paypal
                </div>
                
                <div className={styles.selectFormGroup}>
                    <select name="computers" id="computers" className={styles.select}>
                        <option value="0">choose a computer</option>
                        <option value="Dell">Dell</option>
                        <option value="Apple">Apple (iMac)</option>
                        <option value="Razer">Razer</option>
                        <option value="Asus">Asus</option>
                    </select>
                    <span className={styles.arrow}></span>
                </div>

                <div className={styles.selectFormGroup}>
                    <select name="computers" id="computers" className={styles.select2}>
                        <option value="0">choose a computer</option>
                        <option value="Dell">Dell</option>
                        <option value="Apple">Apple (iMac)</option>
                        <option value="Razer">Razer</option>
                        <option value="Asus">Asus</option>
                    </select>
                    <div className={styles.arrowContainer}>
                        <span className={styles.arrow2}></span>
                    </div>
                </div>
        
                <button type="submit" aria-label="button to submit form" className={styles.submit}>Submit</button>
            </form>
            <form className={styles.loginForm}>
                <h4>Sign In</h4>
                <div className={styles.loginFormGroup}>
                    <label htmlFor="email" className={styles.loginLabel}>
                        Email
                    </label>
                    <input id="email" name="email" type="text" className={styles.loginInput} autoComplete="off"/>
                </div>
                <div className={styles.loginFormGroup}>
                    <label htmlFor="password" className={styles.loginLabel}>
                        Password
                    </label>
                    <input id="password" name="password" type="password" className={styles.loginInput} autoComplete="off"/>
                </div>
                <div className={styles.radioFormGroup}>
                    <label className={styles.loginLabel}>
                        <input type="checkbox" className={styles.loginCheckboxInput}/>
                        <span className={styles.loginCheckbox}></span>
                    </label>
                    Remember this device
                </div>
                <div className={styles.radioFormGroup}>
                    <button className={styles.loginSubmit} aria-label="button to submit login form" type="submit">Sign in</button>
                </div>
            </form>
        </>
     );
}
 
export default Form;