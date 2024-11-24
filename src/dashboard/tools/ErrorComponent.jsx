




function ErrorComponent (props) {

    return (
        <div>
            <p>Error : {props.error.message}</p>
            <p>Contacter votre développeur en charge du projet avec l'erreur !</p>
        </div>
    )
}

export default ErrorComponent;