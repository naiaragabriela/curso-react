import MyComponents from "./MyComponents";

const FirstComponent = () => {
    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <p className="teste"> Desenvolvido por Naiara</p>
            <MyComponents />
        </div>
    );
};

export default FirstComponent;