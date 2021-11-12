import React from 'react'
import {ButtonGroup} from '@mui/material';
function CBtnGroup({buttons}) {
    return (
        <ButtonGroup color="secondary"  size="small" aria-label="small button group">
        {buttons}
      </ButtonGroup>
    )
}

export default CBtnGroup
