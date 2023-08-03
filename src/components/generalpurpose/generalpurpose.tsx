import { useRef, useState } from 'react'
import styles from "./generalpurpose.module.scss";
import CopyButton from '../copybutton/copybutton';

type UserFormProps = {
    setFirstName: (firstName: string) => void;
    firstName: string;
};

const GeneralPurpose = ({ firstName, setFirstName }: UserFormProps) => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        setFirstName("");

    };
    const resultRef = useRef<HTMLDivElement>(null);
    const [pressedButtonId, setPressedButtonId] = useState<null | string>(null);

    const handleButtonPress = (id: string) => {
        setPressedButtonId(id);
    };

    const handleButtonRelease = () => {
        setPressedButtonId(null);
    };


    return (
        <>
            <div className={styles.GeneralPurpose}>
                <h1>General Purpose Boilerplate</h1>
                <form className={styles.myForm} onSubmit={handleSubmit}>
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
                <div className={styles.resultContainer} ref={resultRef}>
                    <p>
                        Hello{firstName ? ` ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}` : ""},<br /><br />
                        I hope you are well.<br /><br />
                        I am following up on some older emails sent to our team and wanted to know if you received an update or require any further assistance.<br /><br />
                        Please let me know and I will assist further.<br /><br />
                        Kind regards,<br />
                        Web Team
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <CopyButton
                        pressedButtonId={pressedButtonId}
                        handleButtonPress={handleButtonPress}
                        handleButtonRelease={handleButtonRelease}
                        resultRef={resultRef}
                    />
                </div>
            </div>
        </>
    );
};

export default GeneralPurpose;