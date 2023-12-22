import { useRef, useEffect, useState } from 'react'
import styles from "./userdetails.module.scss";
import generatePassword from "../../utils/generatePassword";
import CopyButton from '../copybutton/copybutton';
import PasswordButton from '../passwordbutton/passwordbutton';
import userStyles from "./userdetails.module.scss"

type UserDetailsProps = {
    email: string,
    firstName: string
}
const tealColor = '#43cfb5'
//const tealColor = '#003643'
const tableStyle = {
    border: `2px solid ${tealColor}`,
    borderCollapse: 'collapse',
    boxSizing: 'content-box',
    fontFamily: 'Arial',
    //tableLayout: 'fixed',
    //width: '100%'
};

const thStyle = {
    textAlign: 'right',
    fontFamily: 'Arial',
    border: `2px solid ${tealColor}`,
    width: '15%',
    padding: '5px 10px',
    height: '5px'
};

const tdStyle = {
    padding: '10px',
    textAlign: 'start',
    border: `2px solid ${tealColor}`,
    width: 'fit-content',
    height: '25px'
};

const selectStyle = {
    userSelect: 'all',
    fontFamily: 'Arial',
    textAlign: 'left',
    padding: '2px',
};
const UserDetails = ({ email, firstName }: UserDetailsProps) => {
    const resultRef = useRef<HTMLDivElement>(null);
    const [password, setPassword] = useState(generatePassword());
    const [pressedButtonId, setPressedButtonId] = useState<null | string>(null);
    const tableRef = useRef<HTMLTableElement>(null)
    const tableStyles = styles

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
                    <p>Hi{firstName ? ` ${firstName.charAt(0).toUpperCase() + firstName.slice(1)}` : ""},<br /><br />


                        Apologies for the issues you have been having logging in. I have now
                        updated your account and created a new temporary password.
                        <br /><br />
                        Please login to the{" "}
                        <a href="https://portal.rcot.co.uk/">
                            <strong>RCOT Portal</strong>
                        </a>{" "}
                        (https://portal.rcot.co.uk/) in a new browser window or tab using the access
                        credentials shown below and amend your password to something more
                        secure.
                        <br />
                    </p>
                    <br />

                    <div className={styles.tableContainer}>

                        <table className={styles.table} ref={tableRef} style={tableStyle} data-table id="table">
                            <tbody>
                                <tr>
                                    <th data-role="th" style={{ ...thStyle }}>Username:</th>
                                    <td data-role="td" style={tdStyle}>
                                        
                                        <span data-role="th" style={selectStyle} onClick={handleSelectAll}>
                                            {email}
                                        </span>
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
                <div className={styles.buttonContainer}>
                    <CopyButton
                        pressedButtonId={pressedButtonId}
                        handleButtonPress={handleButtonPress}
                        handleButtonRelease={handleButtonRelease}
                        resultRef={resultRef}
                        tableRef={tableRef}
                        tableStyles={tableStyles}
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
