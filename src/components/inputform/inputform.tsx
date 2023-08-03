import React, { useState } from "react";
import styles from "./inputform.module.css";
import generatePassword from "../../utils/generatePassword";

const InputForm = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const clickHandler: React.MouseEventHandler<HTMLSpanElement> = (event) => {
        
        if (event.detail == 2) {
            console.log("Double Clicked")
        }
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setFirstName("");
        setEmail("");
    };
    

    return (
        <>
            <form className={styles.myForm} onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <div className={styles.inputBox}>
                        <label htmlFor="email">
                            <strong>Email:</strong>
                        </label>
                    </div>
                    <input
                        type="text"
                        className={styles.textBox}
                        name="email"
                        value={email}
                        placeholder="JoannaSmith@OT.co.uk"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className={styles.inputWrapper}>
                    <div className={styles.inputBox}>
                        <label htmlFor="firstName">
                            <strong>Name:</strong>
                        </label>
                    </div>
                    <input
                        type="text"
                        className={styles.textBox}
                        name="firstName"
                        placeholder="Joanna"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                </div>
                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </form>
            <div className={styles.resultContainer}>
                <p>Hello {firstName.charAt(0).toUpperCase() + firstName.slice(1)},</p>
                <p>
                    Apologies for the issues you have been having logging in. I have now
                    updated your account and created a new temporary password.
                    <br /><br />
                    Please login to the{" "}
                    <a href="https://portal.rcot.co.uk/">
                        <strong>RCOT Portal</strong>
                    </a>{" "}
                    (https://portal.rcot.co.uk/) on a fresh web browser using the access
                    credentials shown below and amend your password to something more
                    secure.
                </p>
                <strong>Username:</strong> <span id="emailSpan" onClick={clickHandler}>{email}</span>
                <br />
                <strong>Temporary password:</strong>{" "}
                <span className={styles.tempPasswordSpan} onClick={clickHandler}>{generatePassword()} </span>
                <br /><br />

                Kind Regards,<br />
                Web Team
            </div>
        </>
    );
};

export default InputForm;
