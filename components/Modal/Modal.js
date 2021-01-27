import React from 'react'
import Link from 'next/link'
import {motion, AnimatePresence} from 'framer-motion'
import classes from './Modal.module.css'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const backdropVariants = {
    visible:{opacity:1},
    hidden:{opacity:0},
}

const modalVariants = {
    hidden:{y:"-110vh",opacity:0},
    visible:{y:"200px",opacity:1,transition:{delay:0.5}}
}
export default function Modal({visible,setVisible,children}) {
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
                        hidden="hidden"
                        visible="visible"
                    >
                        <div className={classes.closeSection}>
                            <IconButton className={classes.closeButton} onClick={()=>setVisible(false)}>
                                <CloseIcon className={classes.closeButtonIcon}/>
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
