import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import classes from './Modal.module.css'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { ModalProps } from '../../utils/types/types'


/**
    Custom modal window
**/
const Modal: React.FC<ModalProps> = ({ visible, setVisible, children }) => {

    const backdropVariants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const modalVariants = {
        hidden: { y: "-110vh", opacity: 0 },
        visible: { y: "90px", opacity: 1, transition: { delay: 0.5 } }
    }

    useEffect(() => {
        console.log("changed visible", visible)
        if (visible) {
            document.querySelector("main")?.classList.add("unsetTransform")
            document.body.classList.add("no-scroll")
        } else {
            document.querySelector("main")?.classList.remove("unsetTransform")
            document.body.classList.remove("no-scroll");
        }
    }, [visible])

    return (
        <AnimatePresence exitBeforeEnter>
            {visible && (
                <motion.div
                    className={classes.backdrop}
                    variants={backdropVariants}
                    animate="visible"
                    initial="hidden"
                    exit="hidden"
                >
                    <motion.div
                        className={classes.modal}
                        variants={modalVariants}
                        initial="hidden"
                    >
                        <div className={classes.closeSection}>
                            <IconButton className={classes.closeButton} onClick={() => setVisible(false)}>
                                <CloseIcon className={classes.closeButtonIcon} />
                            </IconButton>
                        </div>
                        <>
                            {children}
                        </>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
export default Modal