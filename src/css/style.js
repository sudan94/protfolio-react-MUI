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
        position: "relative",
        overflow: "hidden",
        padding: "72px 0 24px",
    },
    heroEyebrow: {
        fontWeight: 600,
        letterSpacing: "0.2em",
        fontSize: "0.85rem",
    },
    heroGlow: {
        position: "absolute",
        inset: "-120px auto auto -160px",
        width: "520px",
        height: "520px",
        borderRadius: "50%",
        filter: "blur(20px)",
        pointerEvents: "none",
        zIndex: 0
    },
    gradientText: {
        background: "linear-gradient(90deg, #1d4ed8, #60a5fa)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent"
    },
    socialRow: {
        display: "flex",
        gap: "0.75rem"
    },
    heroTitle: {
        fontSize: "clamp(2.5rem, 5vw, 3.75rem)",
        fontWeight: 700,
        letterSpacing: "0.02em",
        lineHeight: 1.15,
        textTransform: "none",
        marginBottom: "0.75rem"
    },
    heroSub: {
        fontSize: "1.1rem",
        fontWeight: 400,
        lineHeight: 1.75,
        maxWidth: "760px",
        marginBottom: "1.75rem",
    },
    heroAccent: {
        background: "linear-gradient(90deg, #1d4ed8, #60a5fa)",
        width: "70px",
        height: "4px",
        borderRadius: "999px",
        marginBottom: "1rem"
    },
    heroMeta: {
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.95rem",
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
        marginBottom: "0.5rem"
    },
    sectionRule: {
        background: "linear-gradient(90deg, #1d4ed8, #60a5fa)",
        width: "48px",
        height: "4px",
        borderRadius: "999px",
        marginBottom: "2rem"
    },
    bulletList: {
        margin: 0,
        paddingLeft: "1.1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
        lineHeight: 1.65
    },
    logo: {
        fontWeight: 700,
        letterSpacing: "0.08em",
        textDecoration: "none"
    },
    sectionBlock: {
        marginTop: "5rem"
    },
    techRow: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.75rem",
        marginTop: "2rem"
    },
    techBadge: {
        padding: "0.35rem 1rem",
        borderRadius: "999px",
        fontSize: "0.85rem",
        fontWeight: 600,
        letterSpacing: "0.03em",
        border: "1px solid"
    }
}));

export default useStyles;
