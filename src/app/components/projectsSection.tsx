import Project from "./project";
import '../styles/projects.css'
const projects = 
[
    {img:'./images/Fotos_Projetos/capa-extreme-jump-race.png',
        name:'Extreme Jump Race',technologies:'TypeScript | HTML | CSS | BootsTrap',
        description: "Extreme Jump Race é um jogo 2D em estilo 8 bits onde o jogador controla um robô ágil que precisa saltar sobre carros em movimento para avançar o máximo possível. Desenvolvido com HTML, CSS e TypeScript, o game combina reflexos rápidos com um design retrô e desafiador. 🚀🎮",
        repository:"https://github.com/JG-Stadler/Extreme-Jump-Race",
        project_link:"https://jg-stadler.github.io/Extreme-Jump-Race/"
    },
    {img:'./images/Fotos_Projetos/Vaquinha-terceirao.png',
        name:'Vaquinha Formatura Terceirão 2024',technologies:'HTML | CSS | JavaScript | BootsTrap',
        description: "O **Vaquinha do Terceirão** foi um site simples e intuitivo criado para arrecadar fundos para a formatura da turma de 2024. A plataforma permitiu que amigos e familiares contribuíssem de forma rápida e segura, acompanhando o progresso das doações via PIX e outros meios. O projeto fortaleceu a colaboração entre os estudantes e tornou possível a realização da formatura. 🎓🚀",
        repository:"https://github.com/JG-Stadler/Formatura3002ceft-vaquinha",
        project_link:"https://jg-stadler.github.io/Formatura3002ceft-vaquinha/"
    },
    {img:'./images/Fotos_Projetos/loopstudio.png',
        name:'LoopStudio Landing Page',technologies:'React.js | CSS',
        description: "A Loopstudios Landing Page é um projeto desenvolvido com React.js, inspirado em um desafio do Frontend Mentor. O design moderno e responsivo foi implementado com precisão para proporcionar uma experiência visualmente envolvente e intuitiva.",
        repository:"https://github.com/JG-Stadler/LoopStudio-landing-page",
        project_link:"https://loopstudios-landingpage-reactjs.netlify.app"
    },
    {img:'./images/Fotos_Projetos/calculadora-idade.png',
        name:'Calculadora de idade',technologies:'HTML | CSS | JavaScript',
        description: "Projeto simples em JavaScript que calcula a idade do usuário com base na data de nascimento informada. Ideal para praticar lógica de programação, manipulação de datas e interação com formulários no navegador.",
        repository:"https://github.com/JG-Stadler/Calculadora-de-idade",
        project_link:"https://jg-stadler.github.io/Calculadora-de-idade/"
    },
    {img:'./images/Fotos_Projetos/pokedex_javascript.png',
        name:'Pokedex',technologies:'HTML | CSS | Bootstrap | JavaScript',
        description: "Projeto web interativo desenvolvido em HTML5, CSS3 e JavaScript (ES6+), que consome a PokeAPI para exibir informações de Pokémon de forma dinâmica e responsiva. Nesta aplicação, o usuário pode pesquisar Pokémon por nome e visualizar detalhes como imagem e tipo diretamente da API, utilizando requisições assíncronas com fetch e async/await. O projeto explora a manipulação do DOM, tratamento de dados e renderização dinâmica, além de uma interface simples e intuitiva construída com Bootstrap.",
        repository:"https://github.com/JG-Stadler/Javascript-Pokedex",
        project_link:"https://jg-stadler.github.io/Javascript-Pokedex/"
    },
    {img:'./images/Fotos_Projetos/gerador-de-link-zap.png',
        name:'Gerador de link para Whatsapp',technologies:'HTML | CSS | JavaScript',
        description: "Projeto web simples e funcional que permite ao usuário criar links personalizados para iniciar conversas no WhatsApp com qualquer número de telefone. Desenvolvido com HTML, CSS e JavaScript, o gerador facilita a comunicação direta — ideal para negócios, atendimento e compartilhamento rápido sem necessidade de salvar contatos.",
        repository:"https://github.com/JG-Stadler/Gerador-de-link-para-Whatsapp",
        project_link:"https://jg-stadler.github.io/Gerador-de-link-para-Whatsapp/"
    }
];

export default function ProjectsSection(){
    return(
        <section className="projects-section" id="projects">
            <h1>Meus Principais Projetos</h1>
            <main className="projects-container">
                {
                    projects.map((project,i)=>(
                        <Project key={i} p_id={i} img={project.img} ProjectName={project.name} technologies={project.technologies} 
                        description={project.description} project_link={project.project_link} repository={project.repository}/>
                    ))
                }
            </main>
        </section>
    )
}
