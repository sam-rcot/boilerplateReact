import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import styles from '../userdetails/userdetails.module.scss';
import generatePassword from "../../utils/generatePassword";

type PasswordButtonProps = {
    pressedButtonId: string,
    handleButtonPress: (id: string) => void,
    handleButtonRelease: () => void,
    setPassword: (password: string) => void,
};

const PasswordButton = ({ pressedButtonId, handleButtonPress, handleButtonRelease, setPassword }: PasswordButtonProps) => {
    const handleNewPassword = () => {
        const newPassword = generatePassword();
        setPassword(newPassword);
    };

    return (
        <button
            className={`${styles.button} ${pressedButtonId === 'newPasswordButton' ? styles['buttonPressed'] : ''}`}
            onMouseDown={() => handleButtonPress('newPasswordButton')}
            onMouseUp={handleButtonRelease}
            onMouseLeave={handleButtonRelease}
            onClick={handleNewPassword}
        >
            <FontAwesomeIcon icon={faArrowsRotate} size="3x" className={styles.buttonIcon} />
            <span className={styles.buttonText}>Create new password</span>
        </button>
    );
};

export default PasswordButton;
