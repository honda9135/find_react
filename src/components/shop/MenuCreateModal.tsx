import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Icon from '@material-ui/core/Icon';
import MenuCreateForm from './MenuCreateForm'

function getModalStyle() {
    return {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
    paper: {
        position: 'absolute',
        width: "75%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        },
    }),
);

export default function MenuCreateModal(props:any) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <a href="#!"  onClick={handleOpen}>
            <Icon style={{ color: "green",fontSize: 30}}>add_circle</Icon>
            </a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <MenuCreateForm id={props.id}/>
                </div>
            </Modal>
        </div>
    );
}