import styles from './Form.module.scss';

const Form = props => {
    return ( 
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
                        <input type="radio" checked="checked"/>
                        <span className={styles.checkmark}></span>
                    </label>
                    Yes
                    <label className={styles.radioBtn}>
                        <input type="radio"/>
                        <span className={styles.checkmark}></span> 
                    </label>
                    No
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
          
            <button type="submit" aria-label="button to submit form" className={styles.submit}>Submit</button>
        </form>
     );
}
 
export default Form;