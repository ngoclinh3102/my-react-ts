import { FC } from 'react'

import { Dialog, DialogTitle, DialogContent, Stack, DialogActions, Button } from '@mui/material'
import InfoRoundedIcon from '@mui/icons-material/InfoRounded'

interface Props {
  open: boolean | false
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NotifyDialog: FC<Props> = ({ open, setOpen }) => {
  const handleClose = () => {
    if (setOpen) setOpen(false)
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle display={'flex'} alignItems={'center'}>
        <InfoRoundedIcon color='info' />
        <Stack>Hello</Stack>
      </DialogTitle>
      <DialogContent>Goodbye</DialogContent>
      <DialogActions>
        <Button variant='outlined'>Close</Button>
        <Button variant='contained'>OK</Button>
      </DialogActions>
    </Dialog>
  )
}

export default NotifyDialog
