import React, { Fragment, useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { TextField } from '@material-ui/core';

import useStyles from './style';





const useSelect = (label, initialState, options) => {
    const classes = useStyles();
    // State of the custom hook
    const [state, setState] = useState(initialState);

    const SelectCategory = ({ error, helper, setError, setHelper }) => (
       
            <Fragment>
                <Autocomplete
                    value={state}
                    onChange={(event, newValue) => {
                        setState(newValue);
                        setError(false)
                        setHelper('')
                    }}
                    className={classes.cmb}
                    id="combo-box"
                    options={options}
                    getOptionLabel={(option) => option.strCategory}
                    renderInput={(params) => <TextField {...params} label={label} error={error} helperText={helper} />}
                />

            </Fragment>
    

    )


    // Return of the state, interface and func that set the State
    return [state, SelectCategory, setState];

}

export default useSelect;