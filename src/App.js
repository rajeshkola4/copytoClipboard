import logo from './logo.svg';
import './App.css';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
function SimpleDialog(props) {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleClickOpen =(value) =>{
    console.log("cliked");
    navigator.clipboard.writeText(JSON.stringify("sample text to be copied", null, '\t'))
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        copy to clipboard
      </Button>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

function App() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <div className="App">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog  open={open} onClose={handleClose} />
    </div>
  );
}


export default App;
