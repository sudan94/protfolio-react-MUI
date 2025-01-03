import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

    cardGrid:{
        padding : '0 0',

    },
    skillCard:{
        height : "30px",
    },
    card:{
        height : '100%',
        display: 'flex',
        flexDirection : 'coloumn'
    },
    cardMedia : {
        padding : '56.25%' //16:9
    },
    cardContent : {
        flexGrow : 1,
        textAlign:"center"
    },
    footer:{
        padding : "30px 0 20px 0",

    },
    greetings:{
        padding: "80px 0 0 0"
    },
    toolbar_nav:{
        padding : "10px 0px"
    },
    contact:{
        padding: "50px 0"
    },


}));

export default useStyles;