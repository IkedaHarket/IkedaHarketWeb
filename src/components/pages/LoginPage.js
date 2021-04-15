import React from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { startLogin } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'
import Footer from '../ui/Footer/Footer'

const LoginPage = ({history}) => {
    
    const dispatch = useDispatch()

    const [formValues,handleInputChange] = useForm({
        correo:'',
        password:''
    });
    const {correo,password} = formValues;
    const handleLogin = async(e)=>{
        e.preventDefault();
        if(correo.length === 0) return Swal.fire('Error', 'El correo es obligatorio','error')
        if(password.length === 0) return Swal.fire('Error', 'La contraseña es obligatoria','error')
        if(password.length < 6) return Swal.fire('Error', 'La contraseña es menor de 6 caracteres','error')

        const res = await dispatch(startLogin(correo,password))
        if(res?.error){
            Swal.fire('Error', res.msg ,'error')
        }else{
            history.push('/dashboard')
        }
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
