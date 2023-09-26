import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
      borderColor: '#E0E3E7',
      borderWidth: 1,
    },
    '& input:invalid + fieldset': {
      borderColor: 'red',
      borderWidth: 1,
    },
    '& input:valid:focus + fieldset': {
      borderLeftWidth: 4,
      padding: '4px !important', // override inline-style
    },
});

export default ValidationTextField;