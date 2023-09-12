import classes from "./Aligner.module.css"

export default function Aligner({children}) {
    return(
        <>
        <div className={classes.container}>
            {children}
        </div>
        </>
    );
}