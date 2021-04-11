import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { login } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import Footer from '../ui/Footer/Footer'

const LoginPage = ({history}) => {
    
    const dispatch = useDispatch()

    const [formValues,handleInputChange] = useForm({
        correo:'sebaaignacio111@gmail.com',
        password:'123456'
    });
    const {correo,password} = formValues;
    const handleLogin = (e)=>{
        e.preventDefault();
        if(correo.length === 0) return Swal.fire('Error', 'El correo es obligatorio','error')
        if(password.length === 0) return Swal.fire('Error', 'La contraseña es obligatoria','error')
        if(password.length < 6) return Swal.fire('Error', 'La contraseña es menor de 6 caracteres','error')

        //TODO aqui consulto a la bd en el futuro :3

        dispatch(login('123','Ikeda Harket'))
        history.push('/dashboard')
    }
    return (
        <>
            <Container className="loginPage">
                <form
                className="formIniciarSesion"
                onSubmit={handleLogin}
                >   
                    <h5>Ikeda Harket</h5>
                    <input 
                    type="email"
                    placeholder="Correo:"
                    name="correo"
                    value={correo}
                    onChange={handleInputChange}
                    />
                    <input 
                    type="password"
                    placeholder="Contraseña:"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    />
                    <button 
                    type="submit"
                    className="boton"
                    >
                        Iniciar Sesion    
                    </button>  
                </form>
            </Container>
            <Footer />
        </>
    )
}

export default LoginPage
