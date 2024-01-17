import { ReactNode, useRef, useState } from 'react'
import styles from "./userdetails.module.scss";
import generatePassword from "../../utils/generatePassword";
import CopyButton from '../copybutton/copybutton';
import PasswordButton from '../passwordbutton/passwordbutton';

type UserDetailsProps = {
    email: string,
    firstName: string,
    message: React.ReactNode
}
const tealColor = '#43cfb5';

const tableStyle = {
    border: `2px solid ${tealColor}`,
    borderCollapse: 'collapse' as const, // Use 'as const' for literal string types
    boxSizing: 'content-box' as const,
    fontFamily: 'Arial',
    maxWidth: 'inherit',
    margin: '0 auto'
};

const thStyle = {
    textAlign: 'right' as const,
    fontFamily: 'Arial',
    border: `2px solid ${tealColor}`,
    width: '15%',
    padding: '5px 10px',
    height: '5px'
};

const tdStyle = {
    padding: '10px',
    textAlign: 'start' as const,
    border: `2px solid ${tealColor}`,
    width: 'fit-content',
    height: '25px'
};

const selectStyle = {
    userSelect: 'all' as const,
    fontFamily: 'Arial',
    textAlign: 'left' as const,
    padding: '2px',
};

const UserDetails = ({ email, firstName, message }: UserDetailsProps) => {
    const resultRef = useRef<HTMLDivElement>(null);
    const [pressedButtonId, setPressedButtonId] = useState<null | string>(null);
    const tableRef = useRef<HTMLTableElement>(null)
    const [passwordLength, setPasswordLength] = useState(16);
    const [numbers, setNumbers] = useState(true)
    const [symbols, setSymbols] = useState(true)
    const [password, setPassword] = useState(generatePassword(passwordLength, symbols, numbers));

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPasswordLength = parseInt(event.target.value);
        setPasswordLength(newPasswordLength);
        setPassword(generatePassword(newPasswordLength, symbols, numbers)); // Regenerate password
    };
    const handleSymbolsChange = () => {
        setSymbols(!symbols)
        setPassword(generatePassword(passwordLength, numbers, !symbols)); // Regenerate password with updated symbols preference
    }
    const handleNumbersChange = () => {
        setNumbers(!numbers)
        setPassword(generatePassword(passwordLength, !numbers, symbols)); // Regenerate password with updated symbols preference
    }

    const handleButtonPress = (id: string) => {
        setPressedButtonId(id);
        //console.log(resultRef)
    };

    const handleButtonRelease = () => {
        setPressedButtonId(null);
    };

    const handleSelectAll = (event: React.MouseEvent<HTMLSpanElement>) => {
        const target = event.target as HTMLSpanElement; // Type assert the target

        const range = document.createRange();
        range.selectNodeContents(target);

        const selection = window.getSelection();
        if (selection) { // Check if selection is not null
            selection.removeAllRanges();
            selection.addRange(range);
        }

    };



    return (
        <>
            <div className={styles.UserDetails}>
                <div className={styles.resultContainer} ref={resultRef} style={{ fontFamily: 'Arial' }}>
                    {message}

                    <div className={styles.tableContainer}>

                        <table className={styles.table} ref={tableRef} style={tableStyle} data-table id="table">
                            <tbody>
                                <tr>
                                    <th data-role="th" style={{ ...thStyle }}>Username:</th>
                                    <td data-role="td" style={tdStyle}>
                                        <table><thead><tr><td><span data-role="th" style={selectStyle} onClick={handleSelectAll}>
                                            {email}
                                        </span></td></tr></thead></table>

                                    </td>
                                </tr>
                                <tr>
                                    <th data-role="th" style={thStyle}>Password:</th>
                                    <td data-role="td" style={tdStyle}>
                                        <table><thead><tr><td><span data-role="span" style={selectStyle} onClick={handleSelectAll}>
                                            {password}
                                        </span></td></tr></thead></table>

                                    </td>
                                </tr>
                            </tbody>
                        </table>


                    </div>

                    <br />
                    <p className={styles.userInformation}>
                        <strong>Username:</strong> <span className={styles.select} onClick={handleSelectAll}>{email}</span>
                        <br />
                        <strong>Temporary password:</strong>{" "}
                        <span className={styles.select} onClick={handleSelectAll}>{password}</span>
                        <br /><br />
                    </p>
                    <p>
                        Kind Regards,<br />
                        Digital Team</p>
                </div>
                <div className={styles.sliderContainer}>
                    <input
                        type="range"
                        min="12"
                        max="20"
                        value={passwordLength}
                        onChange={handleSliderChange}
                        className={styles.slider}
                    />
                    <div className={styles.optionsContainer}>
                        <label className={styles.labelContainer}>
                            <input type="checkbox" checked={symbols} onChange={handleSymbolsChange} />
                            <span className={styles.checkmark}></span>
                            <span className={styles.checkboxLabel}>Symbols</span>
                        </label>
                        <label className={styles.labelContainer}>
                            <input type="checkbox" checked={numbers} onChange={handleNumbersChange} />
                            <span className={styles.checkmark}></span>
                            <span className={styles.checkboxLabel}>Numbers</span>
                        </label>
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    <CopyButton
                        pressedButtonId={pressedButtonId}
                        handleButtonPress={handleButtonPress}
                        handleButtonRelease={handleButtonRelease}
                        resultRef={resultRef}
                    />
                    <PasswordButton
                        pressedButtonId={pressedButtonId}
                        handleButtonPress={handleButtonPress}
                        handleButtonRelease={handleButtonRelease}
                        setPassword={setPassword}
                    />
                </div>

            </div >

        </>
    );
};

export default UserDetails;
