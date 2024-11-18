  
import styles from "./Opiniones.module.css";
import Layout from "../components/Layout";

const Opiniones = () => {  
    
    return (  
        <>  
            <Layout>  
                <div className={styles["opiniones-container"]}>
                    <h1>Opiniones</h1>
                    <div className={styles["imagen-footer"]}></div>
                    <div className={styles["imagen-footer"]}></div>

                </div>  
            </Layout>
        </>  
    );  
};  

export default Opiniones;
