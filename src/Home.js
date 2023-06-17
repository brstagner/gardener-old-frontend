import { Alert } from "reactstrap";

function Home (props) {
    return (
        <div>
            <h4>Welcome to the Gardener App.</h4>
            {props.errors
                ? props.errors.map((error) => (
                    <Alert color="danger" style={{ width: "fit-content" }} key={error}>
                        {error.replace("instance.", "")}
                    </Alert>
                ))
                : null}
        </div>
    );
}

export default Home;