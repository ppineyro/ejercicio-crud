import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { User } from '../services/userService'

function initials(name: string) {
  return name.split(' ').slice(0, 2).map((p) => p[0]).join('').toUpperCase()
}

type UserCardProps = {
  user: User
  onEdit: (user: User) => void
  onDelete: (user: User) => void
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box
          sx={{
            display: 'grid',
            justifyItems: 'center',
            textAlign: 'center',
            gap: 1,
          }}
        >
          <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
            {initials(user.name)}
          </Avatar>

          <Typography variant="h6">{user.name}</Typography>

          <Typography variant="body2" color="text.secondary">
            @{user.username}
          </Typography>

          <Typography variant="body2" sx={{ color: 'blue', fontWeight: 500 }}>
            {user.email}
          </Typography>

          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <IconButton
              aria-label={`Eliminar ${user.name}`}
              color="error"
              onClick={() => onDelete(user)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label={`Editar ${user.name}`}
              color="primary"
              onClick={() => onEdit(user)}
            >
              <EditIcon />
            </IconButton>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  )
}