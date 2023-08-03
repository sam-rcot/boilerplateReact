import styles from '../userdetails/userdetails.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

import { RefObject } from 'react';

type CopyButtonProps = {
    pressedButtonId: string, 
    handleButtonPress: (id: string) => void,
    handleButtonRelease: () => void,
    resultRef: RefObject<HTMLDivElement>,
};

const CopyButton = ({ pressedButtonId, handleButtonPress, handleButtonRelease, resultRef }: CopyButtonProps) => {
    const handleButtonClick = () => {
        const resultContainerElement = resultRef.current;
        const selection = window.getSelection();
        if(resultContainerElement && selection){
            selection.selectAllChildren(resultContainerElement);

            try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log(`Copy command was ${msg}`);
            } catch (err) {
                console.error('Unable to copy', err);
            }

            selection.collapseToEnd();
        }
    };

    return (
        <button
            className={`${styles.button} ${pressedButtonId === 'copyButton' ? styles['buttonPressed'] : ''}`}
            onMouseDown={() => handleButtonPress('copyButton')}
            onMouseUp={handleButtonRelease}
            onMouseLeave={handleButtonRelease}
            onClick={handleButtonClick}
        >
            <FontAwesomeIcon icon={faCopy} size="3x" className={styles.buttonIcon} />
            <span className={styles.buttonText}>Copy text to clipboard</span>
        </button>
    );
};

export default CopyButton;
