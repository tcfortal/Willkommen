import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import fotoFundo from '../fotoFundo.jpg';
import {useRouter} from 'next/router'
function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
            <Tag>{props.children}</Tag>

            <style jsx>{`
        ${Tag}{
       
            color: ${appConfig.theme.colors.neutrals['200']};
            font-size: 24px
            font-weight: 600;
        }
       
        `}</style>
        </>

    )
}



// function Homepage(){
//     return(

//         <div>
//             <GlobalStyle />
//         <Titulo tag ="h2" >Boas vindas de volta!</Titulo>
//         <h2> Discord - Alura Matrix</h2>



//         </div>
//     )
// }

//export default Homepage;



export default function PaginaInicial() {
    //const username = 'Tcfortal';
    const [username, setUsername]= React.useState('tcfortal');
    const roteamento = useRouter();
    return (
        <>
           
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[200],
                    backgroundImage:'url(https://c0.wallpaperflare.com/preview/353/320/965/norvege-hovland-fjord-norway.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        //forma de submeter o formulario em fazer refresh
                        onSubmit={function(infosDoEvento){
                            infosDoEvento.preventDefault();
                            roteamento.push('/chat');

                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h1">Willkommen</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '42px', color: appConfig.theme.colors.neutrals[300] }}>
                            <h2>{'zu einer neuen Erfahrung'} </h2>
                        </Text>
                        <Text variant="body3" styleSheet={{ marginBottom: '22px', color: appConfig.theme.colors.neutrals[300] }}>
                            <h4>{'Geben Sie Ihre E-Mail ein'} </h4>
                        </Text>

                       {/*  <input
                        type ="text"
                        value={username}
                        onChange={function (event){
                            console.log('usuario digitou',event.target.value)
                            //onde está o valor?
                            const valor = event.target.value;
                            //trocar o valor da variavel
                            //através do React e avise quem precisa
                            setUsername(valor);

                        }}
                        /> */}
                           
                        <TextField
                         value={username}
                        onChange={function (event){
                            const valor = event.target.value;
                            setUsername(valor);


                        }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='jetzt anmelden'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[800],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {'Thiago César'}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            
          
            </Box>
            
     

        </>
        
        
        
    );
}