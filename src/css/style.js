import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({

    cardGrid: {
        padding: '0 0',
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    skillCard: {
        height: "30px",
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        padding: '56.25%' //16:9
    },
    cardContent: {
        flexGrow: 1,
        textAlign: "center"
    },
    footer: {
        padding: "30px 0 20px 0",
    },
    toolbar_nav: {
        padding: "18px 0px",
    },
    contact: {
        padding: "50px 0"
    },
    container: {
        padding: "60px 0 40px",
    },
    heroTitle: {
        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
        fontWeight: 700,
        letterSpacing: "0.08em",
        lineHeight: 1.25,
        textTransform: "none",
        marginBottom: "0.5rem"
    },
    heroSub: {
        fontSize: "1.125rem",
        fontWeight: 400,
        maxWidth: "720px",
        marginBottom: "1rem",
    },
    heroAccent: {
        width: "70px",
        height: "4px",
        backgroundColor: "#111",
        borderRadius: "999px",
        marginBottom: "1rem"
    },
    heroActions: {
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap"
    },
    navButton: {
        fontWeight: 600,
        letterSpacing: "0.1em",
    },
    heroIntroCopy: {
        fontSize: "1rem",
        lineHeight: 1.6,
        marginBottom: "1rem",
        color: "rgba(0, 0, 0, 0.85)"
    },
    heroBadgeRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        marginBottom: "1.5rem"
    },
    heroBadge: {
        borderRadius: "999px",
        padding: "0.35rem 1.2rem",
        fontWeight: 600,
        fontSize: "0.9rem",
        letterSpacing: "0.05em",
        border: "1px solid #111",
        backgroundColor: "#111",
        color: "#fff"
    },
    greetings: {
        marginTop: "3.5rem",
        marginBottom: "1rem",
        letterSpacing: "0.1em"
    },
    sectionHeading: {
        marginBottom: "1rem"
    },
    sectionBlock: {
        marginTop: "5rem"
    },
    techRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        marginTop: "1.25rem"
    },
    techBadge: {
        padding: "0.4rem 1.1rem",
        borderRadius: "999px",
        fontSize: "0.85rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
        color: "#fff",
        border: "none"
    }
}));

export default useStyles;
