import styles from './Form.module.scss';

const Form = props => {
    return ( 
        <form className={styles.selectForm}>
            <fieldset className={styles.fieldset}>
                <div className={styles.formGroup}>
                    <label for="fname" className={styles.Label}>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." className={styles.input}/>
                </div>

                <div className={styles.formGroup}>
                    <label for="lname" className={styles.Label}>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." className={styles.input}/>
                </div>
                
                <div className={styles.formGroup}>
                    <label htmlFor="computers" className={styles.Label}>Choose a computer:</label>
                    <select name="computers" id="computers" className={styles.select}>
                        <option value="Dell">Dell</option>
                        <option value="Apple">Apple (iMac)</option>
                        <option value="Razer">Razer</option>
                        <option value="Asus">Asus</option>
                    </select>
                </div>
            </fieldset>
            <button type="submit" aria-label="button to submit form">Submit</button>
        </form>
     );
}
 
export default Form;