import React from "react";
import styles from "./userform.module.scss";

type UserFormProps = {
    setEmail: (email: string) => void;
    setFirstName: (firstName: string) => void;
  };

const UserForm = ({ setEmail, setFirstName }: UserFormProps) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setFirstName("");
        setEmail("");
    };

    return (
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
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>
            
        </form>
    );
};

export default UserForm;
