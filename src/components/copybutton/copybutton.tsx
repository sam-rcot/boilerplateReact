import styles from '../../buttons.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

import { RefObject } from 'react';

type CopyButtonProps = {
    pressedButtonId: string | null, 
    handleButtonPress: (id: string) => void,
    handleButtonRelease: () => void,
    resultRef: RefObject<HTMLDivElement>,
};

const CopyButton = ({ pressedButtonId, handleButtonPress, handleButtonRelease, resultRef }: CopyButtonProps) => {
    const handleButtonClick = () => {
        //console.log(resultRef)
        const resultContainerElement = resultRef.current;
        
        const selection = window.getSelection();
        if(resultContainerElement && selection){
    
            // Save current styles
            const originalColor = resultContainerElement.style.color;
            const originalBackgroundColor = resultContainerElement.style.backgroundColor;
            // Set the desired styles
            resultContainerElement.style.color = 'black';
            resultContainerElement.style.backgroundColor = 'white';
    
            selection.selectAllChildren(resultContainerElement);
    
            try {
                const successful = document.execCommand('copy');
                const msg = successful ? 'successful' : 'unsuccessful';
                console.log(`Copy command was ${msg}`);
            } catch (err) {
                console.error('Unable to copy', err);
            }
    
            // Revert to the original styles
            resultContainerElement.style.color = originalColor;
            resultContainerElement.style.backgroundColor = originalBackgroundColor;
    
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
