// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
import ChangeCounter from "../components/ChangeCounter";

//4- Refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
//5- Context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";


const Home = () => {
    // const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    
    //5- Context mais complexo
    const { color, dispatch } = useTitleColorContext();

    //6- Alterando um state mais complexo
    const setTitleColor = (color) => {
        dispatch({type: color});
    };


    return(
        <div>
            <h1 style={{ color: color }}>Home</h1>
            <p>Valor do contador: {counter}</p>
            {/* 3- alterando o valor do contexto*/}
            <ChangeCounter />
            {/*6- alterando contexto complexo */}
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
            </div>
        </div>
    )
};

export default Home;
