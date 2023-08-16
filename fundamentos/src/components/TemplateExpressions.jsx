const TemplateExpressions = () => {
    const name = "Gabriela"
    const data = {
        age:29,
        job: "programmer",
    };

    return ( 
        <div>
            <h1>Olá {name}, tudo bem? </h1>
            <p>Sua idade é: {data.age} </p>
            <p>Você atua como: {data.job} </p>
            <p> {console.log("JSX REACT")}</p>
        </div>
    );
};

export default TemplateExpressions;