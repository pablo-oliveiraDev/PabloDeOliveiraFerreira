import photo from '../../public/image/perfilAzul.jpg';
import Image from 'next/image'

const AboutContainer = () => {
    return (
        <section className='aboutContainer'>

            
            <h2>Sobre</h2>
            <Image
                src={photo}
                alt='img perfil'
                priority={true}
            />
                <h3 className='titleP'>Trajetória</h3>
            <p>
                Desde sempre fui fascinado por tecnologia, nascido no interior do Rio de janeiro tive contato com windows 95 
                na casa da minha madrinha que tinha um poder aquisitivo maior na época então fiz cursos na Faetec informática 
                básica e informática avançada e devido a minha cidade ser do interior tive que abandonar o que gostava e trabalhar
                no que era mais acessível e foi nessa época que trabalhei por 10 anos em padaria me tornando padeiro especializado 
                na pães e confeitaria.
            </p>
            <p>
               E após dez anos de madrugadas perdidas resolvi mudar para área que sempre gostei em 2010 resolvi procurar me 
               qualificar em informática e nesse momento procura de cursos consegui achar aqui na microlins Itaperuna 
               onde fiz dois cursos montagem,manutenção e redes e outro de designer gráfico e web naquela época tive contato
               com html e css usando dreamWeaver e fazendo paginas tabeladas naquela época e também fazendo cortes com photoshop
               das imagens e então ao finalizar o curso meu professor ,devido ao meu desempenho satisfatório ele me indica para 
               dar aulas junto com ele como freelancer e fiquei sendo professor freelancer durante 6 anos ,só saindo com a troca
               da direção da microlins de Itaperuna-RJ , trabalhando fixo com manutenção de impressoras laser e jato de tinta
               durante 6 anos.   
            </p>
                <h3>O encontro com Desenvolvimento</h3>
            <p>
                Então tendo um forte incentivo de dois amigos passei a estudar c# e também um breve contato com pascal no Delphi,
                porém não conseguindo vaga aqui na minha região desisti do desenvolvimento e em 2019 voltei determinado a mudar para 
                desenvolvimento e começo a estudar javascript onde tive contato com react.js fazendo freelancer hj busco trabalho com
                equipes/ empresas para melhorar meu código de forma mais profissional .  
            </p>
        </section>
    )
}

export default AboutContainer
