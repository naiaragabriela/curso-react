const Challenge = () => {

    const a = 1;
    const b = 2;

    const handleMyEvent = (e) => {
        console.log("Resultado das somas de a + b  ");
        console.log(a + b);
    };
    const renderSomething  = (x) => {
        if(x) {
            return <h1> Valor de a é {a}</h1>
        } else {
            return <h1>Valor de b é {b}</h1>
        }
    };

    return (
        <div>
        <div>
            <button onClick={handleMyEvent}> Some A e B </button>
        </div>
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
    );
};

export default Challenge;