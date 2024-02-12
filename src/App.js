import "./App.css";
import Home from "./component/screens/Home";
import { data } from "./component/data/commentdatas";
import { useEffect } from "react";

function App() {

    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(data))
    }, [])
    return (
        <div>
            <Home />
        </div>
    );
}

export default App;
