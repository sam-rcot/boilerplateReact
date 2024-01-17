import { useRef, useState } from 'react'
import styles from "./inboxmonitoring.module.scss";
import CopyButton from '../copybutton/copybutton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

type UserFormProps = {
    setFirstName: (firstName: string) => void;
    firstName: string;
};

const InboxMonitoring = ({ firstName, setFirstName }: UserFormProps) => {
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
    const [isInfoTextVisible, setInfoTextVisibility] = useState(false);


    return (
        <>
            <div className={styles.InboxMonitoring}>
                <button className={styles.hideButton} onClick={() => setInfoTextVisibility(!isInfoTextVisible)}>
                    {isInfoTextVisible ?
                        <span><FontAwesomeIcon icon={faChevronUp} /> Hide Help Text</span> :
                        <span><FontAwesomeIcon icon={faChevronDown} /> Show Help Text</span>
                    }
                </button>
                {isInfoTextVisible &&
                    <ul className={styles.infoText}>
                        <li>Same deal just enter the name and hit copy.</li>
                        <li>If you need the copy changing shoot me a message on Teams and I'll commit it.</li>
                        <li>Likewise with additional pages but that might take a bit longer.</li>
                        <li>I added GA4 (Google Analytics) to the page so I can play around with it. So it's tracking some of your data. You can read more <a href="https://policies.google.com/technologies/partner-sites">here</a> and <a href="https://support.google.com/analytics/answer/6004245?sjid=18192495453567399596-EU">here</a>.</li>
                    </ul>
                }
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
                        Hi{firstName ? ` ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}` : ""},<br /><br />
                        We've received your request and will review it on either Tuesday or Thursday morning, depending on when you submitted it.<br /><br />
                        You can expect a response from one of our team members within 72 hours. <br /><br />
                        <strong>If your request is urgent or time sensitive, please let a team member know directly.</strong><br /><br />
                        Kind regards,<br />
                        Digital Team
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

export default InboxMonitoring;
