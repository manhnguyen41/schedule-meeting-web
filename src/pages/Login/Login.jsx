import React from 'react';
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {loginUser} from '../../redux/apiRequest/loginApi'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const defaultTheme = createTheme()

export default function Login() {
    const [acc, setAcc] = React.useState({email: '', passwordHash: ''});
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = event => {
        const {name, value} = event.target
        setAcc({
            ...acc,
            [name]: value,
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        loginUser(acc, dispatch, navigate)
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="passwordHash"
                            label="Password"
                            type="password"
                            id="passwordHash"
                            onChange={handleChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}>
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link
                                    href="#"
                                    variant="body2"
                                    onClick={() => {navigate("/register")}}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 8, mb: 4}} />
            </Container>
        </ThemeProvider>
    )
}