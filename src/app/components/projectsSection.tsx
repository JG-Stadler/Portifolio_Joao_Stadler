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
    {img:'./images/Fotos_Projetos/capa-nutrigraos.png',
    name:'Empório Nutrigrãos',technologies:'PHP | HTML | CSS | BootsTrap | Mysql',
    description: "Empório Nutrigraos é uma loja de produtos naturais que oferece uma grande variedade de alimentos saudáveis a granel. Com um sistema prático e intuitivo, os clientes podem escolher seus produtos online e finalizar a compra diretamente pelo WhatsApp. Desenvolvido com PHP e MySQL, o site garante uma experiência rápida e eficiente para quem busca uma alimentação equilibrada. 🌿🥜",
    repository:"https://github.com/JG-Stadler/Site-Emporio-Nutrigraos",
    project_link:"https://emporionutrigraos.site"
    },
    {img:'./images/Fotos_Projetos/Vaquinha-terceirao.png',
        name:'Vaquinha Formatura Terceirão 2024',technologies:'HTML | CSS | JavaScript | BootsTrap',
        description: "O Vaquinha do Terceirão foi um projeto desenvolvido para ajudar na arrecadação de fundos para a formatura da minha turma em 2024. O site funcionou como uma plataforma intuitiva e acessível, onde amigos, familiares e apoiadores puderam contribuir de forma rápida e segura. Com um design simples e direto, os doadores podiam acompanhar o progresso das arrecadações e fazer suas contribuições via PIX ou outras formas de pagamento. Esse projeto não só facilitou a captação de recursos, mas também incentivou o espírito de colaboração e união entre os estudantes. Graças ao Vaquinha do Terceirão, conseguimos transformar nosso sonho da formatura em realidade! 🚀🎓",
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