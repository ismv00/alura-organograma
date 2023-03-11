import Button from "../Button";
import SuspendList from "../SuspendList";
import InputText from "../TextInput";
import "./Form.css";

const Form = () => {
  const times = [
    "Programação",
    "Data Science",
    "Front-End",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
  ];
  return (
    <section className="formulario">
      <form action="">
        <h2>Preecha os dados para criar o card do colaborador</h2>
        <InputText label="nome" placeholder="Digite seu nome" />
        <InputText label="Cargo" placeholder="Digite seu cargo" />
        <InputText
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
        />
        <SuspendList label="Time" itens={times} />

        <Button>Criar card</Button>
      </form>
    </section>
  );
};

export default Form;
