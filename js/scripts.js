// Ajustar a altura da página quando for menor que a sidebar

(function () {
	// Tooltip ativo na página

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	$(function () {
		$('[data-toggle="popover"]').popover(options);
	});
})();

// Stick Header

window.addEventListener("scroll", function () {
	const header = document.querySelector(".header");
	const titleHeight = document.querySelector(".header").scrollHeight;

	if (window.scrollY > 150) {
		header.classList.add("header--sticky");
	} else {
		header.classList.remove("header--sticky");
	}
});

// Modal - Criação dos modais principais
const modalInfos = {
	creditos: {
		ariaLabel: "creditos",
		modalSize: "modal-lg",
		modalTitle: "Créditos",
		modalBody: `
			<div class="row justify-content-center">
				<div class="col-12 col-md-10 col-lg-10">
					<h6 class="mb-2">Ministério da Saúde</h6>
					<div class="mb-5">
						<p class="mb-1 small">Nísia Trindade Lima</p>
						<p class="small text-muted"><em>Ministra</em></p>
						<p class="mb-1 text-muted"><em>Secretaria de Gestão do Trabalho e da Educação na Saúde - SGTES/MS</em></p>

						<p class="mb-1 small">Isabela Cardoso de Matos Pinto - Secretária (SGTES)</p>
						<p class="mb-1 small">Celia Regina Rodrigues Gil - Diretora (DEGES)</p>
						<p class="mb-1 small mb-3">Lívia Milena Barbosa de Deus e Méllo - Coordenadora (CGAES)</p>

						<p class="small text-muted">Consultores Técnicos:</p>
						<p class="mb-1 small">Bethânia Ramos Meireles</p>
						<p class="mb-1 small">Débora Dutra da Silva</p>
						<p class="mb-1 small">Eliel Silva da Cruz</p>
						<p class="mb-1 small">Giselle de Oliveira Pina</p>
						<p class="mb-1 small mb-3">Laíza Foizer Filgueira</p>

						<p class="mb-1 text-muted"><em>Secretaria de Atenção Primária à Saúde - SAPS/MS</em></p>
						<p class="mb-1 small">Felipe Proenço De Oliveira - Secretário (SAPS)</p>
						<p class="mb-1 small">Katia Maria Barreto Souto - Diretora (DEPPROS)</p>
						<p class="mb-1 small mb-3">Gilmara Lúcia dos Santos - Coordenadora (CGCOC)</p>

						<p class="small text-muted">Consultores Técnicos:</p>
						<p class="mb-1 small">Elizabeth Alves de Jesus</p>
						<p class="mb-1 small">Fernando Freitas Alves</p>
						<p class="mb-1 small">Hannah Carolina Tavares Domingos</p>
						<p class="mb-1 small">Jéssica Procópio de Quadros</p>
						<p class="mb-1 small">Raísa Nunes do Santos Garcia</p>
						<p class="mb-1 small">Tâmara de Oliveira e Silva</p>
					</div>

					<h6 class="mb-2">Fundação Oswaldo Cruz – Fiocruz</h6>
					<div class="mb-5">
						<p class="mb-1 small">Mario Moreira</p>
						<p class="small text-muted"><em>Presidente</em></p>
						<p class="mb-1 small">Cristiani Vieira Machado</p>
						<p class="small text-muted"><em>Vice-Presidência de Educação, Informação e Comunicação (VPEIC)</em></p>
					</div>

					<h6 class="mb-2">Campus Virtual Fiocruz</h6>
					<div class="mb-5">
						<p class="mb-1 small">Ana Cristina da Matta Furniel</p>
						<p class="small text-muted"><em>Coordenadora geral</em></p>
						<p class="mb-1 small">Rosane Mendes</p>
						<p class="small text-muted"><em>Coordenadora adjunta</em></p>
						<p class="mb-1 small">Adélia Araújo</p>
						<p class="small text-muted"><em>Coordenadora de produção</em></p>
						<p class="mb-1 small">Renata Bernardes David</p>
						<p class="small text-muted"><em>Gerente de produção</em></p>

						<p class="mb-1 small">Roberta Saboya</p>
						<p class="small text-muted"><em>Designer Educacional</em></p>

						<p class="mb-1 small">Aline Polycarpo</p>
						<p class="mb-1 small">Danilo Blum</p>
						<p class="mb-1 small">Luciana Nunes</p>
						<p class="small text-muted"><em>Designers de Interface e Interação</em></p>

						<p class="mb-1 small">Teo Venerando</p>
						<p class="small text-muted"><em>Edição Audiovisual</em></p>

						<p class="mb-1 small">Nestablo Ramos Neto</p>
						<p class="small text-muted"><em>Ilustrador</em></p>

						<p class="mb-1 small">Carmélia Brito</p>
						<p class="small text-muted"><em>Recursos Educacionais - Bibliotecária</em></p>

						<p class="mb-1 small">Maria Angélica Marcondes Drska</p>
						<p class="small text-muted"><em>Revisão de Português</em></p>

						<p class="mb-1 small">Bruno Alexandre de Oliveira</p>
						<p class="mb-1 small">Eduardo Xavier da Silva</p>
						<p class="small text-muted"><em>Suporte Técnico de Tecnologia da Informação - Desenvolvedor</em></p>

						<p class="mb-1 small">Adriano Lourenço</p>
						<p class="mb-1 small">Orlando Terra</p>
						<p class="small text-muted"><em>Suporte Técnico de Tecnologia da Informação - Analista de suporte</em></p>
					</div>

					<h6 class="mb-2">Coordenação do projeto</h6>
					<div class="mb-5">
						<p class="mb-1 small">Ana Luiza Braz Pavão</p>
						<p class="small text-muted"><em>Coordenadora geral</em></p>
						<p class="mb-1 small">Rosane Aparecida de Sousa</p>
						<p class="small text-muted"><em>Coordenadora adjunta</em></p>
						<p class="mb-1 small">Carmen Aprato</p>
						<p class="small text-muted"><em>Coordenadora executiva</em></p>
					</div>

					<h6 class="mb-2">Conteudistas</h6>
					<div class="mb-5">
						<p class="mt-3 small"><strong>Módulo 1</strong></p>
						<p class="mb-1 small">Drª. Regina Celia de Souza Beretta</p>
						<p class="small text-muted"><em>UNIFRAN</em></p>

						<p class="mb-1 small">Ma. Sumayra de Oliveira Silva</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<p class="mb-1 small">Dra. Rosane Aparecida de Sousa</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>
						<hr />

						<p class="mt-3 small"><strong>Módulo 2</strong></p>
						<p class="mb-1 small">Dra. Ana Luiza Braz Pavão</p>
						<p class="small text-muted"><em>ICICT/Fiocruz</em></p>

						<p class="mb-1 small">Dra. Maria Rosilene Cândido Moreira</p>
						<p class="small text-muted"><em>Grupesst - UFCA</em></p>

						<p class="mb-1 small">Ma. Kellen Campos Castro Moreira</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<hr />

						<p class="mt-3 small"><strong>Módulo 3</strong></p>
						<p class="mb-1 small">Dra. Marta Regina Farinelli</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<p class="mb-1 small">Ma. Claudia Dolores Trierweiler Sampaio de Oliveira Corrêa</p>
						<p class="small text-muted"><em>ProLiSaBr/Universidade Nova de Lisboa</em></p>

						<p class="mb-1 small">Dr. Jose Ivo dos Santos Pedrosa</p>
						<p class="small text-muted"><em>UFPI</em></p>
						<hr />

						<p class="mt-3 small"><strong>Módulo 4</strong></p>
						<p class="mb-1 small">Dra. Cláudia Helena Julião</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<p class="mb-1 small">Ma. Luciana Moura Caetano Veludo</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<p class="mb-1 small">Ma. Nicole Fajardo Leão de Souza</p>
						<p class="small text-muted"><em>Canal Fiocruz</em></p>

						<p class="mb-1 small">Dra. Celeste Aparecida Pereira Barbosa</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<p class="mb-1 small">Espec. Isadora Catananti Ardenghi Andrade</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<hr />

						<p class="mt-3 small"><strong>Módulo 5</strong></p>
						<p class="mb-1 small">Dra. Ana Luiza Braz Pavão</p>
						<p class="small text-muted"><em>ICICT/Fiocruz</em></p>

						<p class="mb-1 small">Ma. Kellen Campos Castro Moreira</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<p class="mb-1 small">Ma. Darcle Cardoso</p>
						<p class="small text-muted"><em>ProLiSaBr/UFSC</em></p>

						<p class="mb-1 small">Dra. Roselita Sebold</p>
						<p class="small text-muted"><em>ProLiSaBr/UFSC</em></p>

						<p class="mb-1 small">Isabel Aparecida Porcatti de Walsh</p>
						<p class="small text-muted"><em>UFTM</em></p>

						<p class="mb-1 small">Dra. Lislei Jorge Patrizzi Martins</p>
						<p class="small text-muted"><em>UFTM</em></p>

						<p class="mb-1 small">Marta Regina Farinelli</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>

						<p class="mb-1 small">Edna Aparecida de Carvalho Pacheco</p>
						<p class="small text-muted"><em>ProLiSaBr/UFTM</em></p>
					</div>

					<h6 class="mb-2">Materiais complementares</h6>
					<div class="mb-5">
						<p class="mt-3 small"><strong>Guias rápidos e guia de orientações para profissionais de saúde</strong></p>
						<p class="small text-muted"><em>Supervisão de conteúdo:</em></p>
						<p class="mb-1 small">Dra. Ana Luiza Braz Pavão</p>
						<p class="mb-1 small">Dra. Rosane Aparecida de Sousa</p>

						<p class="mt-3 small text-muted"><em>Conteudistas:</em></p>
						<p class="mb-1 small">Ma. Kellen Campos Castro Moreira</p>
						<p class="mb-1 small">Dra. Maria Rosilene Cândido Moreira</p>
						<p class="mb-1 small">Dra. Milena Silva Costa</p>
						<hr />
						<p class="mt-3 small"><strong>Vídeos</strong></p>
						<p class="small text-muted"><em>Supervisão de conteúdo:</em></p>
						<p class="mb-1 small">Dr. André de Faria Pereira Neto</p>

						<p class="mt-3 small text-muted"><em>Equipe de produção de conteúdo:</em></p>
						<p class="mb-1 small">Dra. Letícia Tereza Barbosa da Silva</p>
						<p class="mb-1 small">Me. Antônio Teicher Pereira</p>
					</div>
				</div>
			</div>
		`,
	},
	bibliografia: {
		ariaLabel: "bibliografia",
		modalSize: "modal-xl",
		modalTitle: "Bibliografia",
		modalBody: `
		<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-11">
        <div class="mb-5">
            <!-- Accordion Módulos-->
            <div class="accordion accordion-flush" id="accordionBibliografia">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo1" aria-expanded="true" aria-controls="collapse1-modulo1">Módulo 1</button>
                    </h5>
                    <div id="collapse1-modulo1" class="accordion-collapse collapse" aria-labelledby="heading1-modulo1" data-bs-parent="">

                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m1-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula1" aria-expanded="true" aria-controls="collapse-m1-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m1-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">ALMEIDA FILHO, Naomar de; BARRETO, Maurício Lima (Ed.). <strong>Epidemiologia & saúde:</strong> Fundamentos, métodos, aplicações. reimpr. Rio de Janeiro: Guanabara Koogan, 2017. xxiv, 699 p. ISBN 8527716194.</li>

                                                    <li class="list-group-item">BARATA, R. B. Vigilância epidemiológica: breve histórico e a experiência dos Estados Unidos e do estado de São Paulo. <strong>Epidemiol. Serv. Saúde</strong>, v. 31, n. 2, e2021115. 2022. DOI 10.1590/s2237-962220220002000028.</li>

                                                    <li class="list-group-item">BARCELLOS, C.; QUITÉRIO, L. A. D. Vigilância ambiental em saúde e sua implantação no Sistema Único de Saúde. <strong>Rev Saude Publica</strong>, v. 40, n. 1. p. 170-177. 2006. DOI 10.1590/S0034-89102006000100025.</li>

                                                    <li class="list-group-item">Brasil. Ministério da Saúde. Portaria nº 1.378, de 9 de julho de 2013. Regulamenta as responsabilidades e define diretrizes para execução e financiamento das ações de Vigilância em Saúde pela União, Estados, Distrito Federal e Municípios, relativos ao Sistema Nacional de Vigilância em Saúde e Sistema Nacional de Vigilância Sanitária. <strong>Diário Oficial da União</strong>, v. 131, Seção 1. p. 48-50, 2013. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt1378_09_07_2013.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2013/prt1378_09_07_2013.html</a>. Acesso em: 31 ago. 2025.</li>

                                                    <li class="list-group-item">Brasil. Ministério da Saúde. Portaria nº 3.252, de 22 de dezembro de 2009. <strong>Diário Oficial da União</strong>, v. 245, Seção 1. p. 65-69, 2009. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2009/prt3252_22_12_2009_comp.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2009/prt3252_22_12_2009_comp.html</a>. Acesso em: 6 set. 2025.</li>

                                                    <li class="list-group-item">Brasil. <strong>Mudanças climáticas para profissionais de saúde:</strong> guia de bolso [recurso eletrônico]. Brasília: Ministério da Saúde, 2024. <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/guia-mudancas-climaticas-para-profissionais-da-saude.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2024/guia-mudancas-climaticas-para-profissionais-da-saude.pdf</a>. ISBN 978-65-5993-649-6.</li>

                                                    <li class="list-group-item">CHOI, B. C. K. The past, present, and future of public health surveillance. <strong>Scientifica</strong>, v. 2012. p. 875253. 2012. DOI 10.6064/2012/875253.</li>

                                                    <li class="list-group-item">ESCOREL, S.; TEIXEIRA, L. A. História das Políticas de Saúde no Brasil de 1822 a 1963: do império ao desenvolvimentismo populista. In: GIOVANELLA, L.; ESCOREL, S.; LOBATO, L. d. V. C.; NORONHA, L. d. V. C.; CARVALHO, J. C. de. <strong>Políticas e sistema de saúde no Brasil</strong>. Tradução: , [S. l.]: Editora FIOCRUZ, 2012. p. 279-321. ISBN 9788575413494.</li>

                                                    <li class="list-group-item">GIOVANELLA, L.; ESCOREL, S.; LOBATO, L. d. V. C.; NORONHA, L. d. V. C.; CARVALHO, J. C. de. <strong>Sistema de saúde brasileiro: história e configuração atual</strong>. [S.l.]: Editora FIOCRUZ, 2012. 180 p. ISBN 9788575413494. DOI 10.7476/9788575413494.</li>

                                                    <li class="list-group-item">MEDRONHO, Roberto de Andrade; BLOCH, Kátia Vergetti; LUIZ, Ronir Raggio; WERNECK, Guilherme Loureiro (Ed.). <strong>Epidemiologia</strong>. 2. ed. São Paulo: Atheneu, 2009. [xxiv], 685 p. ISBN 978-8573799996.</li>

                                                    <li class="list-group-item">OUQUAYROL, Maria Zélia; DA SILVA, Marcelo Gurgel Carlos (Ed.). <strong>Rouquayrol:</strong> Epidemiologia & saúde. 8. ed. Rio de Janeiro: MedBook, 2018. xxi, 719 p. ISBN 978-8583690290.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula2" aria-expanded="false" aria-controls="collapse-m1-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m1-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <span class='d-block'><em>Obrigatórias - PNVS</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Agência Nacional de Vigilância Sanitária (ANVISA). Guia de Vigilância em Saúde para a Exposição a Metais Pesados. Brasília: ANVISA, 2020. Disponível em: <a href='https://www.gov.br/anvisa/pt-br target=' _blank' rel='noopener noreferrer'>https://www.gov.br/anvisa/pt-br</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Conselho Nacional de Saúde. Resolução nº 588, de 12 de julho de 2018. Institui a Política Nacional de Vigilância em Saúde. Diário Oficial da União, Brasília, 13 ago. 2018.</li>

                                                    <li class="list-group-item">CONSELHO NACIONAL DE SAÚDE. Política Nacional de Vigilância em Saúde completa seis anos ainda com desafios para sua implementação. Brasília, 2024. Disponível em: https://www.gov.br/conselho-nacional-de-saude. Acesso em: 26 ago. 2025.</li>

                                                    <li class="list-group-item">CSCI. Saúde e saneamento: uma avaliação das políticas públicas de prevenção, controle e contingência das arboviroses no Brasil. <strong>Ciência & Saúde Coletiva</strong>, v. 28, n. 6, p. 1767-1776, 2023.</li>

                                                    <li class="list-group-item">FIOCRUZ. Abrascão promove o lançamento da Política Nacional de Vigilância em Saúde (PNVS). Rio de Janeiro: EPSJV, 2018. Disponível em: <a href='https://www.epsjv.fiocruz.br' target='_blank' rel='noopener noreferrer'>https://www.epsjv.fiocruz.br</a>. Acesso em: 26 ago. 2025.</li>

                                                    <li class="list-group-item">GARCIA, L. P.; DUARTE, E. 1ª Conferência Nacional de Vigilância em Saúde: marco para a construção da Política Nacional de Vigilância em Saúde. <strong>Epidemiologia e Serviços de Saúde</strong>, v. 27, n. 2, e20180002, 2018.</li>

                                                    <li class="list-group-item">INTERFACE. Caminhos possíveis para a avaliação das práticas da Vigilância em Saúde. <strong>Interface – Comunicação, Saúde, Educação</strong>, v. 21, supl. 1, p. 3183-3192, 2017..</li>

                                                    <li class="list-group-item">MULTI EDUCATIVA. Gestão em Vigilância em Saúde: estratégias e implementação. São Paulo: Multi Educativa, 2024a.</li>

                                                    <li class="list-group-item">MULTI EDUCATIVA. Gestão da Vigilância em Saúde: como monitorar riscos e proteger a população. São Paulo: Multi Educativa, 2024b.</li>

                                                    <li class="list-group-item">OKUMOTO, O.; BRITO, S. M. F.; GARCIA, L. P. A Política Nacional de Vigilância em Saúde. <strong>Epidemiologia e Serviços de Saúde</strong>, v. 27, n. 3, e2018318, 2018.</li>

                                                    <li class="list-group-item">OLIVEIRA, C. M.; CRUZ, M. M. Sistema de Vigilância em Saúde no Brasil: avanços e desafios. <strong>Saúde em Debate</strong>, v. 39, n. 104, p. 255-267, 2015.</li>

                                                    <li class="list-group-item">RECKTENWALDT, M.; JUNGES, J. R. A organização e a prática da Vigilância em Saúde em municípios de pequeno porte. <strong>Saúde e Sociedade</strong>, v. 26, n. 2, p. 367-381, 2017.</li>

                                                    <li class="list-group-item">REDALYC. Aspectos facilitadores e desafios para a implementação de um modelo de educação permanente para a Vigilância Sanitária. <strong>Revista Salud Colectiva</strong>, v. 16, n. 4, p. 1-12, 2020.</li>

                                                    <li class="list-group-item">SANAR SAÚDE. Princípios da PNVS: o que você precisa saber! Blog Sanar Saúde, 2023. Disponível em: <a href='https://blog.sanarsaude.com' target='_blank' rel='noopener noreferrer'>https://blog.sanarsaude.com</a>. Acesso em: 26 ago. 2025.</li>
                                                </ul>
                                            </div>

                                            <span class='d-block'><em>Obrigatórias - Planejamento</em></span>
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">GIOVANELLA, L.; MENDES, A. Atenção primária à saúde e coordenação do cuidado no SUS. <strong>Saúde em Debate</strong>, v. 43, n. spe5, p. 8-22, 2019.</li>

                                                    <li class="list-group-item">MATUS, C. Política, planejamento e governo. Brasília: IPEA, 1993.</li>

                                                    <li class="list-group-item">PAIM, J. S.; TEIXEIRA, C. F. Política, planejamento e gestão em saúde: balanço do estado da arte. <strong>Revista de Saúde Pública</strong>, v. 40, n. spe, p. 73-78, 2006.</li>

                                                    <li class="list-group-item">TANAKA, O. Y.; MELO, C. Avaliação de programas de saúde do adolescente: um modo de fazer. São Paulo: EDUSP, 2004.</li>

                                                    <li class="list-group-item">TESTA, M. Pensamento estratégico e lógica de programação: o caso da saúde. São Paulo: Hucitec, 1992.</li>

                                                    <li class="list-group-item">MENDES, E. V. (2011). As redes de atenção à saúde. Brasília: Organização Pan-Americana da Saúde.</li>

                                                    <li class="list-group-item">TANAKA, O. Y., & Tamaki, E. M. (2012). O papel da avaliação para a tomada de decisão na gestão de serviços de saúde. <strong>Ciência & Saúde Coletiva</strong>, 17(4), 821-828.</li>

                                                    <li class="list-group-item">TEIXEIRA, C. F., & Paim, J. S. (2000). Planejamento em saúde: conceitos, métodos e experiências. <strong>Ciência & Saúde Coletiva</strong>, 5(1), 17-39.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. (2016). Planejamento no SUS: conceitos, métodos e experiências. Brasília: Ministério da Saúde.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula3" aria-expanded="false" aria-controls="collapse-m1-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m1-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALBUQUERQUE, M. I. N., Carvalho, E. M. F., & Lima, L. P. (2002). Vigilância epidemiológica: Conceitos e institucionalização. <em>Revista Brasileira de Saúde Materno Infantil, 2(2), 77–87</em>. Disponível em: <a href='https://www.scielo.br/j/rbsmi/a/6L4R958YLyJywqtG9WcRRCv/?format=html&lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/rbsmi/a/6L4R958YLyJywqtG9WcRRCv/?format=html&lang=pt</a>. Acesso em: 23 out. 2025. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Lei nº 6.259, de 30 de outubro de 1975. Dispõe sobre as organizações de Vigilância Epidemiológica, sobre o Programa Nacional de Imunizações, estabelece normas relativas à notificação compulsória de doenças, e dá outras providências. Diário Oficial da União, Poder Executivo, Brasília, DF, 31 out. 1975. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/l6259.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/l6259.htm</a>. Acesso em: 23 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Agência Nacional de Vigilância Sanitária. Cartilha de Vigilância Sanitária: cidadania e controle social. Brasília; Agência Nacional de Vigilância Sanitária; 2. ed.; 2002. 58 p. ilus. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/cartilha_vigilancia.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/cartilha_vigilancia.pdf</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Asis - Análise de Situação de Saúde. Ministério da Saúde, Universidade Federal de Goiás. Brasília: Ministério da Saúde, 2015. 3v.: il. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/asis_analise_situacao_saude_volume_1.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/asis_analise_situacao_saude_volume_1.pdf</a>. Acesso em: 29 set. 2025. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Portaria n.º 2.436, de 21 de setembro de 2017. Aprova a Política Nacional de Atenção Básica, no âmbito do Sistema Único de Saúde (SUS). Diário Oficial da União: seção 1, Brasília, DF, v. 183, n. 68, p. 68, 22 set. 2017. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prt2436_22_09_2017.html</a>. Acesso em: 23 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Portaria GM/MS nº 6.734, de 18 de março de 2025. Altera o Anexo 1 do Anexo V da Portaria de Consolidação GM/MS nº 4, de 28 de setembro 2017, para incluir a esporotricose humana na Lista Nacional de Notificação Compulsória de Doenças, Agravos e Eventos de Saúde Pública nos serviços de saúde públicos e privados em todo o território nacional. 2025a. Disponível em: <a href='https://pesquisa.in.gov.br/imprensa/jsp/visualiza/index.jsp?data=19/08/2024&jornal=515&pagina=127&totalArquivos=263' target='_blank' rel='noopener noreferrer'>https://pesquisa.in.gov.br/imprensa/jsp/visualiza/index.jsp?data=19/08/2024&jornal=515&pagina=127&totalArquivos=263</a>. Acesso em: 22 abr. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Conselho Nacional de Saúde. Resolução n.º 588, de 12 de julho de 2018. Fica instituída a Política Nacional de Vigilância em Saúde (PNVS), aprovada por meio desta resolução. Diário Oficial da República Federativa do Brasil: seção 1, Brasília, DF, p. 87, 13 ago. 2018. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/cns/2018/res0588_13_08_2018.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/cns/2018/res0588_13_08_2018.html</a>. Acesso em: 23 out. 2025. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Saúde Ambiental, do Trabalhador e Vigilância das Emergências em Saúde Pública. EpiSUS fundamental: caderno de conteúdos. Ministério da Saúde, Secretaria de Vigilância em Saúde, Departamento de Saúde Ambiental, do Trabalhador e Vigilância das Emergências em Saúde Pública. Brasília: Ministério da Saúde, 2022. 236 p.: il. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/episus_fundamental_apostila.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/episus_fundamental_apostila.pdf</a>. Acesso em: 23 out. 2025. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Guia de vigilância em saúde: volume 1. Ministério da Saúde, Secretaria de Vigilância em Saúde e Ambiente, Departamento de Ações Estratégicas de Epidemiologia e Vigilância em Saúde e Ambiente. 6. ed. rev. – Brasília: Ministério da Saúde, 2024a. 3 v.: il. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-1-6a-edicao/view' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-1-6a-edicao/view</a>. Acesso em: 29 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Guia de vigilância em saúde: volume 3. Ministério da Saúde, Secretaria de Vigilância em Saúde e Ambiente, Departamento de Ações Estratégicas de Epidemiologia e Vigilância em Saúde e Ambiente. 6. ed. rev. Brasília: Ministério da Saúde, 2024b. 3 v.: il. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-3-6a-edicao/view' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia/guia-de-vigilancia-em-saude-volume-3-6a-edicao/view</a>. Acesso em: 29 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Plano de contingência para emergência em saúde pública por rompimento de barragens. Ministério da Saúde, Secretaria de Vigilância em Saúde e Ambiente, Departamento de Emergências em Saúde Pública. Brasília: Ministério da Saúde, 2025b. 44 p. : il. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia-ambiental/plano-de-contingencia-barragens.pdf' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/vigilancia-ambiental/plano-de-contingencia-barragens.pdf</a>. Acesso em: 29 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FERREIRA, A.B.H. Dicionário Aurélio da Língua Portuguesa. 5. ed. Curitiba: Editora Positivo, 2010. 2222 p.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Indicadores de saúde. Elementos conceituais e práticos. Washington, D.C.: OPAS; 2018. Disponível em: <a href='https://www3.paho.org/hq/joomlatools-files/docman-files/Health_Indicators-June18-pt.pdf' target='_blank' rel='noopener noreferrer'>https://www3.paho.org/hq/joomlatools-files/docman-files/Health_Indicators-June18-pt.pdf</a>. Acesso em: 29 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RAMOS, M. <em>et al</em>. Acidente de trabalho ampliado: o rompimento da barragem de Fundão nos jornais impressos do Espírito Santo. Rev. bras. saúde ocup. 45, 2020. <a href='https://doi.org/10.1590/2317-6369000013719' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/2317-6369000013719</a> </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RIPSA. Rede Interagencial de Informações para a Saúde. Indicadores. Conceitos e critérios. Disponível em <a href='https://www.ripsa.org.br/indicadores/' target='_blank' rel='noopener noreferrer'>https://www.ripsa.org.br/indicadores/</a>. Acesso em: 25 set. 2025. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-aula4" aria-expanded="false" aria-controls="collapse-m1-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m1-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m1-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Conselho Nacional de Saúde. <em>Resolução nº 588, de 12 de julho de 2018</em>. Institui a Política Nacional de Vigilância em Saúde (PNVS). Diário Oficial da União, Brasília, DF, seção 1, n. 155, p. 87, 13 ago. 2018. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/cns/2018/res0588_13_08_2018.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/cns/2018/res0588_13_08_2018.html</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Decreto nº 7.616, de 17 de novembro de 2011. <em>Dispõe sobre a declaração de Emergência em Saúde Pública de Importância Nacional (ESPIN) e institui a Força Nacional do Sistema Único de Saúde – FN-SUS</em>. Diário Oficial da União, Brasília, DF, seção 1, n. 221, p. 1, 18 nov. 2011. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7616.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2011/decreto/d7616.htm</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Decreto nº 10.593, de 24 de dezembro de 2020. <em>Dispõe sobre o Sistema Nacional de Proteção e Defesa Civil – SINPDEC e o Conselho Nacional de Proteção e Defesa Civil – CONPDEC</em>. Diário Oficial da União, Brasília, DF, 28 dez. 2020. Disponível em: <a href='https://www2.camara.leg.br/legin/fed/decret/2020/decreto-10593-24-dezembro-2020-790946-publicacaooriginal-162026-pe.html' target='_blank' rel='noopener noreferrer'>https://www2.camara.leg.br/legin/fed/decret/2020/decreto-10593-24-dezembro-2020-790946-publicacaooriginal-162026-pe.html</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Integração Nacional. <em>Instrução Normativa nº 02, de 20 de dezembro de 2016</em>. Estabelece a Classificação e Codificação Brasileira de Desastres – COBRADE. Diário Oficial da União, Brasília, DF, 21 dez. 2016. Disponível em: <a href='https://www.defesacivil.rs.gov.br/upload/arquivos/202105/04095316-cobrade-classificacao-e-codificacao-brasileira-de-desastres.pdf' target='_blank' rel='noopener noreferrer'>https://www.defesacivil.rs.gov.br/upload/arquivos/202105/04095316-cobrade-classificacao-e-codificacao-brasileira-de-desastres.pdf</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <em>Plano de resposta às emergências em saúde pública</em>. Brasília, DF: Ministério da Saúde, 2014. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/plano_resposta_emergencias_saude_publica.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/plano_resposta_emergencias_saude_publica.pdf</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. <em>Guia para elaboração de planos de contingência</em>. Brasília, DF: Ministério da Saúde, 2024. 42 p. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/emergencia-em-saude-publica/guia-para-elaboracao-de-planos-de-contingencia' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/emergencia-em-saude-publica/guia-para-elaboracao-de-planos-de-contingencia</a>. Acesso em: 6 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LIMA, A. M. M.; MONTEIRO, J. B. <em>Entre o risco e o desastre: uma análise conceitual dos múltiplos componentes envoltos em uma complexa equação</em>. Revista de Geografia, v. 39, n. 2, p. 59-84, 2022. DOI: 10.51359/2238-6211.2022.251953.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. <em>Comunicação de riscos em emergências de saúde pública: um guia da OMS para políticas e práticas em comunicação de risco de emergência.</em> Genebra: OMS, 2018. Disponível em: <a href='https://iris.who.int/bitstream/handle/10665/259807/9789248550201-por.pdf' target='_blank' rel='noopener noreferrer'>https://iris.who.int/bitstream/handle/10665/259807/9789248550201-por.pdf</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOUZA, A. S. S. <em>et al</em>. <em>Histórico de implementação da gestão às emergências em saúde pública no Brasil</em>. Epidemiologia e Serviços de Saúde, v. 33, n. 2, e20240498, 2024. DOI: 10.1590/S2237-96222024v34e20240498.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SOUZA, A. S. S. <em>et al</em>. <em>Brazil’s response to public health emergencies in 2023: lessons for the international community</em>. Revista Panamericana de Salud Pública, v. 49, e15, 2025. DOI: 10.26633/RPSP.2025.15.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION. <em>International Health Regulations (2005)</em>. 3. ed. Genebra: World Health Organization, 2016. Disponível em: <a href='https://iris.who.int/handle/10665/246107' target='_blank' rel='noopener noreferrer'>https://iris.who.int/handle/10665/246107</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION. WHO <em>Pandemic Agreement</em>. Genebra: World Health Organization, 2025. Disponível em: <a href='https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_R1-en.pdf' target='_blank' rel='noopener noreferrer'>https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_R1-en.pdf</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo2" aria-expanded="false" aria-controls="collapse1-modulo2">Módulo 2</button>
                    </h5>
                    <div id="collapse1-modulo2" class="accordion-collapse collapse" aria-labelledby="heading1-modulo2" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m2-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula1" aria-expanded="true" aria-controls="collapse-m2-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m2-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <strong>Toxicological profile for arsenic</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for benzene</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for lead</strong>. Atlanta: ATSDR, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">_______. <strong>Toxicological profile for mercury</strong>. Atlanta: ATSDR, 1999.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ANDRADE, Maiza Ferreira de; MORAES, Luiz Roberto Santos. Contaminação por chumbo em Santo Amaro desafia décadas de pesquisas e a morosidade do poder público. <strong>Ambiente & Sociedade</strong>, v. 16, n. 2, p. 63–80, jun. 2013.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BASTA, Paulo César; HACON, Sandra de Souza. Impacto do mercúrio em áreas protegidas e povos da floresta na Amazônia Oriental: uma abordagem integrada saúde-ambiente. Aspectos metodológicos e resultados preliminares. Rio de Janeiro. Disponível em:<a href=' https://repositorio.bvspovosindigenas.fiocruz.br/items/37d0b467-c8b4-4f50-8c01-60b5f8ee1c96' target='_blank' rel='noopener noreferrer'> https://repositorio.bvspovosindigenas.fiocruz.br/items/37d0b467-c8b4-4f50-8c01-60b5f8ee1c96</a>.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARNEIRO, Fernando Ferreira <em>et al</em>. Dossiê ABRASCO: um alerta sobre os impactos dos agrotóxicos na saúde. Rio de Janeiro: EPSJV/Fiocruz, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EATON, D. L.; KLAASSEN, C. D. Principles of toxicology. In: KLAASSEN, C. D. (ed.). C<strong>asarett and Doull’s toxicology: the basic science of poisons</strong>. 6. ed. New York: McGraw-Hill, 2001. p. 11–34.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EKINO, Shigeo <em>et al</em>. Minamata disease revisited: an update on the acute and chronic manifestations of methyl mercury poisoning. <strong>Journal of the Neurological Sciences</strong>, v. 262, n. 1–2, p. 131–144, nov. 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KLAASSEN, C. D. (Ed.). <strong>Casarett and Doull’s Toxicology: The Basic Science of Poisons.</strong> 5. ed. New York: McGraw-Hill Education, 2001. p. 11–34.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO MUNDIAL DA SAÚDE. Dioxinas e seus efeitos na saúde humana. Disponível em: <a href='https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health' target='_blank' rel='noopener noreferrer'>https://www.who.int/news-room/fact-sheets/detail/dioxins-and-their-effects-on-human-health</a>. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROBERTS, James R.; REIGART, J. Routt. <strong>Recognition and management of pesticide poisonings</strong>. 6. ed. Washington, DC: United States Environmental Protection Agency, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SANTOS, Rubens Martins; ORTIZ, Nilce; GUILHEN, Sabine Neusatz. Análise da Tragédia de Vila Socó em Cubatão (São Paulo, Brasil) usando a Matriz de Haddon. <strong>Journal of Environmental Protection</strong>, v. 15, n. 05, p. 620–639, 2024.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula2" aria-expanded="false" aria-controls="collapse-m2-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m2-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <em>Toxicological profile for arsenic</em>. Atlanta: U.S. Department of Health and Human Services, Public Health Service, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <em>Toxicological profile for benzene</em>. Atlanta: U.S. Department of Health and Human Services, Public Health Service, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <em>Toxicological profile for cadmium</em>. Atlanta: U.S. Department of Health and Human Services, Public Health Service, 2012.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <em>Toxicological profile for cyanide</em>. Atlanta: U.S. Department of Health and Human Services, Public Health Service, 2006.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <em>Toxicological profile for fluorides, hydrogen fluoride, and fluorine</em>. Atlanta: U.S. Department of Health and Human Services, Public Health Service, 2003.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. <em>Toxicological profile for lead</em>. Atlanta: U.S. Department of Health and Human Services, Public Health Service, 2020. Disponível em: https://www.atsdr.cdc.gov/toxprofiles/tp13.pdf. Acesso em: 16 ago. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BOISCHIO, Ana Paula Raggio; CÓLUS, Iracema Marilene Souza. Mercúrio e saúde: uma revisão. <em>Cadernos de Saúde Pública</em>, v. 16, n. 1, p. 19–32, 2000.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CARNEIRO, Fernando Ferreira; PIGNATI, Wanderlei; RIGOTTO, Raquel Maria; AUGUSTO, Lia Giraldo da Silva (org.). <em>Dossiê ABRASCO: um alerta sobre os impactos dos agrotóxicos na saúde</em>. Rio de Janeiro: EPSJV/Fiocruz, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DE SOUZA GUERRA, Carolina <em>et al</em>. Lead concentrations in whole blood, serum, saliva and house dust in samples collected at two time points (12 months apart) in Santo Amaro, BA, Brazil. <em>Environmental Research</em>, v. 142, p. 337–344, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">EATON, David L.; KLAASSEN, Curtis D. Principles of toxicology. In: KLAASSEN, Curtis D. (ed.). <em>Casarett and Doull’s toxicology</em>. 6. ed. New York: McGraw-Hill, 2001. p. 11–33.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HILEWITZ, Daniel <em>et al</em>. Epidemiology of sensitivity to nickel, cobalt and chromium in Israel: a retrospective cohort study. <em>Contact Dermatitis</em>, 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JAFFERY, Farhat N.; MISRA, Virendra; VISWANATHAN, P. N. Convergence of clinical toxicology and epidemiology in relation to health effects of chemicals. <em>Environmental Toxicology and Pharmacology</em>, v. 12, n. 3, p. 169–179, 2002.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LECTURIO. <em>Farmacocinética e farmacodinâmica</em>. [S.l.], 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">METZGER, Ingrid F.; SOUZA-COSTA, Débora C.; TANUS-SANTOS, José E. Farmacogenética: princípios, aplicações e perspectivas. <em>Medicina (Ribeirão Preto)</em>, 2006.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OGA, Seizi; CAMARGO, Márcia Maria de Almeida; BATISTUZZO, José Antonio de Oliveira. <em>Fundamentos de toxicologia</em>. 4. ed. São Paulo: Atheneu, 2014.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLIVEIRA, J. F. P. Curto período de exposição ao chumbo promove aumento da biodisponibilidade de óxido nítrico, via receptores AT2, e ativação de canais para K+ em aorta de ratos. 2015. Tese (Doutorado em Ciências Fisiológicas) – Universidade Federal do Espírito Santo, Centro de Ciências da Saúde, Vitória, 2015.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PRICE, N. F.; LIN, P. I. D.; CARDENAS, A. <em>et al</em>. Prenatal metal exposures and kidney function in adolescence in Project Viva. <em>Environmental Health</em>, v. 23, p. 94, 2024.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WANG, Yican <em>et al</em>. Investigating the relationship of co-exposure to multiple metals with chronic kidney disease: an integrated perspective from epidemiology and adverse outcome pathways. <em>Journal of Hazardous Materials</em>, v. 480, p. 135844, 2024.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION. <em>Some non-heterocyclic polycyclic aromatic hydrocarbons and some related exposures</em>. Lyon: International Agency for Research on Cancer, 2010. (IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, v. 92).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula3" aria-expanded="false" aria-controls="collapse-m2-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m2-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AMERICAN LUNG ASSOCIATION. 10 of the worst diseases smoking causes | State of Tobacco Control. Disponível em: <a href='https://www.lung.org/research/sotc/by-the-numbers/10-worst-diseases-smoking-causes' target='_blank' rel='noopener noreferrer'>https://www.lung.org/research/sotc/by-the-numbers/10-worst-diseases-smoking-causes</a>. Acesso em: 23 set. 2025.</li>

                                                    <li class="list-group-item">AURORA, N. Pharmaceutical toxicology: understanding the risks and benefits of medications. <em>Journal of Pharmaceutical Toxicology</em>, v. 6, n. 2, p. 21–24, 2023. Disponível em: <a href='https://www.openaccessjournals.com/articles/pharmaceutical-toxicology-understanding-the-risks-and-benefits-of-medications-16214.html' target='_blank' rel='noopener noreferrer'>https://www.openaccessjournals.com/articles/pharmaceutical-toxicology-understanding-the-risks-and-benefits-of-medications-16214.html</a>. Acesso em: 1 set. 2025.</li>

                                                    <li class="list-group-item">BOCCHINI, B. SUS oferece tratamento gratuito para quem quiser parar de fumar. <em>Agência Brasil</em>, São Paulo, 2022. Disponível em: <a href='https://agenciabrasil.ebc.com.br/saude/noticia/2022-05/sus-oferece-tratamento-gratuito-para-quem-quiser-parar-de-fumar' target='_blank' rel='noopener noreferrer'>https://agenciabrasil.ebc.com.br/saude/noticia/2022-05/sus-oferece-tratamento-gratuito-para-quem-quiser-parar-de-fumar</a>. Acesso em: 30 ago. 2025.</li>

                                                    <li class="list-group-item">BRASIL. INSTITUTO NACIONAL DE CÂNCER – INCA. Mortalidade no Brasil. Programa Nacional de Controle do Tabagismo: Observatório da Política Nacional de Controle do Tabaco, 2025. Disponível em: <a href='https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/observatorio-da-politica-nacional-de-controle-do-tabaco/dados-e-numeros-do-tabagismo/mortalidade-no-brasil' target='_blank' rel='noopener noreferrer'>https://www.gov.br/inca/pt-br/assuntos/gestor-e-profissional-de-saude/observatorio-da-politica-nacional-de-controle-do-tabaco/dados-e-numeros-do-tabagismo/mortalidade-no-brasil</a>. Acesso em: 30 ago. 2025.</li>

                                                    <li class="list-group-item">CONSUMO de tabaco e dispositivos eletrônicos de fumar – LENAD. São Paulo, 2025. Disponível em: <a href='https://lenad.uniad.org.br/resultados/lenad-iii-consumo-de-tabaco-e-defs/' target='_blank' rel='noopener noreferrer'>https://lenad.uniad.org.br/resultados/lenad-iii-consumo-de-tabaco-e-defs/</a>. Acesso em: 30 ago. 2025.</li>

                                                    <li class="list-group-item">GOLAN, David E. <em>et al</em>. Farmacodinâmica. Principles of Pharmacology: <strong>The Pathophysiologic Basis of Drug Therapy</strong>, 3. ed. 2012. Disponível em: <a href='https://anestesiologia.paginas.ufsc.br/files/2015/02/Farmacodinamica-texto.pdf' target='_blank' rel='noopener noreferrer'>https://anestesiologia.paginas.ufsc.br/files/2015/02/Farmacodinamica-texto.pdf</a>. Acesso em: 23 set. 2025.</li>

                                                    <li class="list-group-item">GUPTA, M. The Importance of Pharmaceutical Toxicology in Drug Development. <strong>Journal of Pharmaceutical Toxicology</strong>, v. 6, n. 2, p. 29–32, 2023. DOI: 10.37532/jpt.2023.6(2).29-32. Acesso em: 1 set. 2025. </li>

                                                    <li class="list-group-item">HOGG, R. <em>et al</em>. Nicotinic acetylcholine receptors: from structure to brain function. <em>Reviews of Physiology, Biochemistry and Pharmacology</em>, v. 147, p. 1–46, 2003.</li>

                                                    <li class="list-group-item">IARC WORKING GROUP ON THE EVALUATION OF CARCINOGENIC RISKS TO HUMANS. <em>Tobacco smoke and involuntary smoking</em>. Lyon (FR): International Agency for Research on Cancer, 2004. (IARC Monographs on the Evaluation of Carcinogenic Risks to Humans, n. 83). Cap. 1: Composition, exposure and regulations. Disponível em: <a href='https://www.ncbi.nlm.nih.gov/books/NBK316410/' target='_blank' rel='noopener noreferrer'>https://www.ncbi.nlm.nih.gov/books/NBK316410/</a>. Acesso em: 31 ago. 2025.</li>

                                                    <li class="list-group-item">INSTITUTO NACIONAL DE CÂNCER – INCA. <em>Tabagismo</em>. 2025. Disponível em: INSTITUTO NACIONAL DE CÂNCER – INCA. Tabagismo. 2025. Disponível em: <a href='https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/tabagismo/tabagismo' target='_blank' rel='noopener noreferrer'>https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/tabagismo/tabagismo</a>. Acesso em: 23 set. 2025.. Acesso em: 23 set. 2025.</li>

                                                    <li class="list-group-item">KATZUNG, B. G.; TREVOR, A. J. <em>Basic and clinical pharmacology</em>. 14. ed. New York: McGraw-Hill Education, 2017.</li>

                                                    <li class="list-group-item">MARQUES, P. <em>et al</em>. An updated overview of e-cigarette impact on human health. <em>Respiratory Research</em>, v. 22, n. 1, p. 151, maio 2021.</li>

                                                    <li class="list-group-item">NATIONAL ACADEMIES OF SCIENCES, ENGINEERING, AND MEDICINE <em>et al</em>. <em>Public health consequences of e-cigarettes</em>. Washington (DC): National Academies Press, 2018. Disponível em: <a href='http://www.ncbi.nlm.nih.gov/books/NBK507171/' target='_blank' rel='noopener noreferrer'>http://www.ncbi.nlm.nih.gov/books/NBK507171/</a>. Acesso em: 23 set. 2025.</li>

                                                    <li class="list-group-item">NATIONAL CENTER FOR CHRONIC DISEASE PREVENTION AND HEALTH PROMOTION (US) OFFICE ON SMOKING AND HEALTH. <em>The health consequences of smoking—50 years of progress: a report of the Surgeon General. Atlanta: Centers for Disease Control and Prevention</em>, 2014. Disponível em: <a href='https://www.ncbi.nlm.nih.gov/books/NBK294308/' target='_blank' rel='noopener noreferrer'>https://www.ncbi.nlm.nih.gov/books/NBK294308/</a>. Acesso em: 28 ago. 2025.</li>

                                                    <li class="list-group-item">OGA, Seizi; CAMARGO, Márcia Maria de Almeida; BATISTUZZO, José Antonio de Oliveira. <em>Fundamentos de toxicologia</em>. 4. ed. São Paulo: Atheneu, 2014.</li>

                                                    <li class="list-group-item">PINTO, M. <em>et al</em>. Chemical characterisation of the vapour emitted by an e-cigarette using a ceramic wick-based technology. <em>Scientific Reports</em>, v. 12, n. 1, p. 16497, 3 out. 2022.</li>

                                                    <li class="list-group-item">ROSEMBERG, J. <em>Nicotina – droga universal</em>. 1. ed. Rio de Janeiro: Instituto Nacional do Câncer – INCA, 2004. Disponível em: <a href='https://www.inca.gov.br/publicacoes/livros/nicotina-droga-universal' target='_blank' rel='noopener noreferrer'>https://www.inca.gov.br/publicacoes/livros/nicotina-droga-universal</a>. Acesso em: 30 ago. 2025.</li>

                                                    <li class="list-group-item">SCHAAF, C. Nicotinic acetylcholine receptors in human genetic disease. <em>Genetics in Medicine</em>, v. 16, n. 9, p. 649–656, set. 2014.</li>

                                                    <li class="list-group-item">SERENO, V. M. B.; SILVA, A. S.; SILVA, G. C. da. Perfil epidemiológico das intoxicações por medicamentos no Brasil entre os anos de 2013 a 2017 / Epidemiological profile of drug intoxications in Brazil between 2013 and 2017. <strong>Brazilian Journal of Development</strong>, v. 6, n. 6, p. 33892–33903, 2020. DOI: 10.34117/bjdv6n6-079. Disponível em: <a href='https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/11082' target='_blank' rel='noopener noreferrer'>https://ojs.brazilianjournals.com.br/ojs/index.php/BRJD/article/view/11082</a>. Acesso em: 24 set. 2025.</li>

                                                    <li class="list-group-item">SHEHATA, S. et al. Vaping, environmental toxicants exposure, and lung cancer risk. <em>Cancers</em>, v. 15, n. 18, p. 4525, 12 set. 2023.</li>

                                                    <li class="list-group-item">UNIVERSIDADE FEDERAL DA PARAÍBA (UFPB). Uso indiscriminado de medicamentos e automedicação no Brasil. <strong>Centro de Informação sobre Medicamentos</strong>, 2024. Disponível em: <a href='https://www.ufpb.br/cim/contents/noticias/uso-indiscriminado-de-medicamentos-e-automedicacao-no-brasil' target='_blank' rel='noopener noreferrer'>https://www.ufpb.br/cim/contents/noticias/uso-indiscriminado-de-medicamentos-e-automedicacao-no-brasil</a>. Acesso em: 1 set. 2025.</li>

                                                    <li class="list-group-item">WISE, R. Doença pulmonar obstrutiva crônica (DPOC). <em>Manual MSD</em>, abr. 2024. Disponível em: <a href='https://www.msdmanuals.com/pt/profissional/distúrbios-pulmonares/doença-pulmonar-obstrutiva-crônica-e-doenças-relacionadas/doença-pulmonar-obstrutiva-crônica-dpoc' target='_blank' rel='noopener noreferrer'>https://www.msdmanuals.com/pt/profissional/distúrbios-pulmonares/doença-pulmonar-obstrutiva-crônica-e-doenças-relacionadas/doença-pulmonar-obstrutiva-crônica-dpoc</a>.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Antimicrobial resistance, 2023. Disponível em: <a href='https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance' target='_blank' rel='noopener noreferrer'>https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance</a>. Acesso em: 23 set. 2025.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Essential medicines, 2024. Disponível em: https://www.who.int/news-room/fact-sheets/detail/essential-medicines. Acesso em: 1 set. 2025.</li>

                                                    <li class="list-group-item">YALCIN, E.; DE LA MONTE, S. Tobacco nitrosamines as culprits in disease: mechanisms reviewed. <em>Journal of Physiology and Biochemistry</em>, v. 72, n. 1, p. 107–120, mar. 2016.</li>

                                                    <li class="list-group-item">YANG, L. <em>et al</em>. Maternal cigarette smoking before or during pregnancy increases the risk of birth congenital anomalies: a population-based retrospective cohort study of 12 million mother–infant pairs. <em>BMC Medicine</em>, v. 20, n. 1, p. 4, jan. 2022.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula4" aria-expanded="false" aria-controls="collapse-m2-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m2-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">ANVISA. Resolução RDC nº 296, de 29 de julho de 2019. Dispõe sobre as informações toxicológicas para rótulos e bulas de agrotóxicos, afins e preservativos de madeira. Diário Oficial da União, Brasília, DF, 29 jul. 2019. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2019/rdc0296_29_07_2019.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/anvisa/2019/rdc0296_29_07_2019.pdf</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Agência Nacional de Vigilância Sanitária (ANVISA). Resolução RDC nº 722, de 1º de julho de 2022. Disponível em: <a href='https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&link=S&tipo=RDC&numeroAto=00000722&seqAto=002&valorAno=2022&orgao=RDC/DC/ANVISA/MS&cod_modulo=134&cod_menu=1696' target='_blank' rel='noopener noreferrer'>https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&link=S&tipo=RDC&numeroAto=00000722&seqAto=002&valorAno=2022&orgao=RDC/DC/ANVISA/MS&cod_modulo=134&cod_menu=1696</a>. Acesso em: 30 ago. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Agência Nacional de Vigilância Sanitária (ANVISA). Instrução Normativa nº 160, de 1º de julho de 2022. Disponível em: <a href='https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&link=S&tipo=INM&numeroAto=00000160&seqAto=000&valorAno=2022&orgao=ANVISA/MS&cod_modulo=134&cod_menu=1696' target='_blank' rel='noopener noreferrer'>https://anvisalegis.datalegis.net/action/ActionDatalegis.php?acao=abrirTextoAto&link=S&tipo=INM&numeroAto=00000160&seqAto=000&valorAno=2022&orgao=ANVISA/MS&cod_modulo=134&cod_menu=1696</a>. Acesso em: 30 ago. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Agência Nacional de Vigilância Sanitária (ANVISA). Conheça os novos guias de avaliação toxicológica de agrotóxicos. 2023. Disponível em: <a href='https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2023/conheca-os-novos-guias-de-avaliacao-toxicologica-de-agrotoxicos' target='_blank' rel='noopener noreferrer'>https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2023/conheca-os-novos-guias-de-avaliacao-toxicologica-de-agrotoxicos</a>. Acesso em: 30 set. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Lei nº 14.785, de 27 de dezembro de 2023. Lei dos agrotóxicos. Diário Oficial da União, Brasília, 28 dez. 2023. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14785.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14785.htm</a>. Acesso em: 20 ago. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde e Ambiente. Boletim Epidemiológico: intoxicações exógenas por agrotóxicos no Brasil – 2013 a 2022. Brasília: Ministério da Saúde, v. 54, n. 12, 2023. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/edicoes/2023/boletim-epidemiologico-volume-54-no-12' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/boletins/epidemiologicos/edicoes/2023/boletim-epidemiologico-volume-54-no-12</a>. Acesso em: 25 ago. 2025.</li>

                                                    <li class="list-group-item">IBAMA – Instituto Brasileiro de Recursos Naturais Renováveis. Relatórios de comercialização de agrotóxicos: boletins anuais de produção, importação, exportação e vendas de agrotóxicos no Brasil. Brasília: IBAMA, 2025. Disponível em: <a href='http://www.ibama.gov.br/agrotoxicos/relatorios-de-comercializacao-de-agrotoxicos' target='_blank' rel='noopener noreferrer'>http://www.ibama.gov.br/agrotoxicos/relatorios-de-comercializacao-de-agrotoxicos</a>. Acesso em: 18 set. 2025.</li>

                                                    <li class="list-group-item">KLAASSEN, Curtis D.; WATKINS III, John B. Fundamentos em toxicologia de Casarett e Doull. 2. ed. Porto Alegre: AMGH, 2012.</li>

                                                    <li class="list-group-item">OGA, Seizi; CAMARGO, Márcia Maria de Almeida; BATISTUZZO, José Antonio de Oliveira. Fundamentos de toxicologia. 4. ed. São Paulo: Atheneu, 2014.</li>

                                                    <li class="list-group-item">SHIBAMOTO, Takayuki; BJELDANES, Leonard F. Introdução à toxicologia de alimentos. Rio de Janeiro: Elsevier, 2014.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-aula5" aria-expanded="false" aria-controls="collapse-m2-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m2-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m2-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AMORIM, L. C. A. Os biomarcadores e sua aplicação na avaliação da exposição aos agentes químicos ambientais. Revista Brasileira de Epidemiologia, v. 6, n. 2, p. 158–170, jun. 2003. Disponível em: <a href='https://doi.org/10.1590/S1415-790X2003000200009' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/S1415-790X2003000200009</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">AZEVEDO, F. A.; CHASIN, A. A. M. (Coord.). As bases toxicológicas da ecotoxicologia. São Carlos: RiMa; São Paulo: Intertox, 2003.</li>

                                                    <li class="list-group-item">FUNDACENTRO. Manual de orientação sobre controle médico ocupacional da exposição a substâncias químicas. São Paulo: Fundacentro, 2014. Disponível em: <a href='http://arquivosbiblioteca.fundacentro.gov.br/exlibris/aleph/a23_1/apache_media/QLH7B8HET1QGHYRIJH3ADNE4A47XVU.pdf' target='_blank' rel='noopener noreferrer'>http://arquivosbiblioteca.fundacentro.gov.br/exlibris/aleph/a23_1/apache_media/QLH7B8HET1QGHYRIJH3ADNE4A47XVU.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">FUNDACENTRO. Toxicologia ocupacional. São Paulo: Fundacentro, 2020. Disponível em: <a href='http://arquivosbiblioteca.fundacentro.gov.br/exlibris/aleph/u23_1/bd/Toxicologia_ocupacional_final.pdf' target='_blank' rel='noopener noreferrer'>http://arquivosbiblioteca.fundacentro.gov.br/exlibris/aleph/u23_1/bd/Toxicologia_ocupacional_final.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ILO – INTERNATIONAL LABOR ORGANIZATION. Enciclopédia de saúde ocupacional e segurança: princípios gerais de toxicologia. Disponível em: <a href='https://www.iloencyclopaedia.org/pt/part-iv-66769/toxicology-57951/general-principles-of-toxicology' target='_blank' rel='noopener noreferrer'>https://www.iloencyclopaedia.org/pt/part-iv-66769/toxicology-57951/general-principles-of-toxicology</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">PEIXOTO, N. F.; FERREIRA, L. S. Higiene ocupacional III. Santa Maria: Universidade Federal de Santa Maria, Colégio Técnico Industrial de Santa Maria; Rede e-Tec Brasil, 2013. Disponível em: <a href='https://www.ufsm.br/unidades-universitarias/ctism/cte/seguranca-do-trabalho-ctism-apostilas' target='_blank' rel='noopener noreferrer'>https://www.ufsm.br/unidades-universitarias/ctism/cte/seguranca-do-trabalho-ctism-apostilas</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">PIVETTA, F.; MACHADO, J. M. H.; ARAÚJO, U. C.; MOREIRA, M. F. R.; APOSTOLI, P. Monitoramento biológico: conceitos e aplicações em saúde pública. Cadernos de Saúde Pública, v. 17, n. 3, p. 545–554, maio 2001. Disponível em: <a href='https://doi.org/10.1590/S0102-311X2001000300010' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/S0102-311X2001000300010</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ROSA, H. V. D.; MARTINS, I.; SIQUEIRA, M. E. P. B.; COLACIOPPO, S. Monitoramento ambiental e biológico. In: OGA, S.; CAMARGO, M. M. A.; BATISTUZZO, J. A. O. (Org.). Fundamentos de toxicologia. 5. ed. São Paulo: Atheneu, 2021.</li>

                                                    <li class="list-group-item">THORNE, O. S. Toxicologia ocupacional. In: KLASSEN, C. D.; WATKINS III, J. B. (Org.). Fundamentos em toxicologia de Casarett e Doull. 2. ed. Porto Alegre: AMGH, 2012.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-modulo3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-modulo3" aria-expanded="false" aria-controls="collapse1-modulo3">Módulo 3</button>
                    </h5>
                    <div id="collapse1-modulo3" class="accordion-collapse collapse" aria-labelledby="heading1-modulo3" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionBibliografia-m3-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula1" aria-expanded="true" aria-controls="collapse-m3-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m3-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO NACIONAL DE CÂNCER (INCA). <em>Metais pesados, câncer e os riscos ambientais</em>. Rio de Janeiro: INCA. Disponível em: <a href='https://ninho.inca.gov.br/jspui/bitstream/123456789/15363/1/Metais%20e%20Cancer.pdf' target='_blank' rel='noopener noreferrer'>https://ninho.inca.gov.br/jspui/bitstream/123456789/15363/1/Metais%20e%20Cancer.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OLSON, K. R. (Org.). <em>Manual de toxicologia clínica</em> [recurso eletrônico]. 6. ed. Porto Alegre: AMGH, 2014. Disponível em: <a href='https://saude.ufpr.br/medtrab/wp-content/uploads/sites/25/2016/08/Manual-de-Toxicologia-Clínica_pdf.pdf' target='_blank' rel='noopener noreferrer'>https://saude.ufpr.br/medtrab/wp-content/uploads/sites/25/2016/08/Manual-de-Toxicologia-Clínica_pdf.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE (OPAS).<em> O impacto de substâncias químicas sobre a saúde pública: fatores conhecidos e desconhecidos</em>. Brasília: OPAS, 2018. Disponível em: <a href='https://iris.paho.org/bitstream/handle/10665.2/49122/OPASBRA180022-por.pdf' target='_blank' rel='noopener noreferrer'>https://iris.paho.org/bitstream/handle/10665.2/49122/OPASBRA180022-por.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PERUZZO, L. C. <em>Toxicologia e segurança</em>. Indaial: UNIASSELVI, 2018. 215 p. Disponível em: <a href='https://www.ispsn.org/sites/default/files/documentos-virtuais/pdf/toxicologia_e_seguranca_-_lucile_cecilia_peruzzo_0.pdf' target='_blank' rel='noopener noreferrer'>https://www.ispsn.org/sites/default/files/documentos-virtuais/pdf/toxicologia_e_seguranca_-_lucile_cecilia_peruzzo_0.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">TEIXEIRA, A. G. Toxicologia. Londrina: Editora e Distribuidora Educacional S.A., 2016. 184 p. ISBN 978-85-8482-694-0. Disponível em: <a href='http://cm-kls-content.s3.amazonaws.com/201602/INTERATIVAS_2_0/TOXICOLOGIA/U1/LIVRO_UNICO.pdf' target='_blank' rel='noopener noreferrer'>http://cm-kls-content.s3.amazonaws.com/201602/INTERATIVAS_2_0/TOXICOLOGIA/U1/LIVRO_UNICO.pdf</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula2" aria-expanded="false" aria-controls="collapse-m3-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m3-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ALVES, C. B. C. <em>et al</em>. Intoxicação crônica por chumbo após acidente por arma de fogo: relato de caso. Brazilian Journal of Health Review, v. 7, n. 1, p. 189–199, 2024.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AP NEWS. Trabalhadores denunciam mortes e adoecimentos por exposição ao mercúrio. 2024. Disponível em: <a href='https://apnews.com/article/amazon-mercury-gold-mining-yanomami-brazil-indigenous-8809d4f22c84dd6e81bb7a1f5f3ba9f6' target='_blank' rel='noopener noreferrer'>https://apnews.com/article/amazon-mercury-gold-mining-yanomami-brazil-indigenous-8809d4f22c84dd6e81bb7a1f5f3ba9f6</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DUFFUS, J. H. “Heavy metals”: a meaningless term? Pure and Applied Chemistry, v. 74, n. 5, p. 793–807, 2002.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO CENTRO DE REFERÊNCIA EM SEGURANÇA, SAÚDE NO TRABALHO (FUNDACENTRO). Estudo do Banco Mundial aponta morte de 5,5 milhões de pessoas devido à intoxicação por chumbo. Brasília: Fundacentro, 2023. Disponível em: <a href='https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2023/setembro/estudo-do-banco-mundial-aponta-morte-de-5-5-milhoes-de-pessoas-devido-a-intoxicacao-por-chumbo' target='_blank' rel='noopener noreferrer'>https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2023/setembro/estudo-do-banco-mundial-aponta-morte-de-5-5-milhoes-de-pessoas-devido-a-intoxicacao-por-chumbo</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FUNDAÇÃO OSWALDO CRUZ (FIOCRUZ). Fiocruz apresenta novos dados de estudo que avalia a saúde da população de Brumadinho. Disponível em: <a href='https://fiocruz.br/noticia/2025/01/fiocruz-apresenta-novos-dados-de-estudo-que-avalia-saude-da-populacao-de-brumadinho' target='_blank' rel='noopener noreferrer'>https://fiocruz.br/noticia/2025/01/fiocruz-apresenta-novos-dados-de-estudo-que-avalia-saude-da-populacao-de-brumadinho</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO NACIONAL DE CÂNCER (Brasil). Metais pesados, câncer e os riscos ambientais. Rio de Janeiro: INCA, 2024. 22 p.: il. color.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MANZINI, F. F.; SÁ, K. B. de; PLICAS, L. M. de A. Metais pesados: fonte e ação toxicológica. Fórum Ambiental da Alta Paulista, [S. l.], v. 6, n. 12, 2010. DOI: 10.17271/19800827612201026. Disponível em: <a href='https://publicacoes.amigosdanatureza.org.br/index.php/forum_ambiental/article/view/26' target='_blank' rel='noopener noreferrer'>https://publicacoes.amigosdanatureza.org.br/index.php/forum_ambiental/article/view/26</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OGA, S.; CAMARGO, M. M. A.; BATISTUZZO, J. A. O. Fundamentos de toxicologia. 4. ed. São Paulo: Atheneu, 2014.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">RUSYNIAK, D. E. et al. Heavy metal poisoning: management of intoxication and antidotes. In: Molecular, Clinical and Environmental Toxicology: Volume 2 – Clinical Toxicology. p. 365–396, 2010.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SAMPAIO, A. Caso do bolo envenenado: saiba como funciona a atuação técnica do Instituto-Geral de Perícias. Instituto-Geral de Perícias do Rio Grande do Sul, 13 jan. 2025. Disponível em: <a href='https://igp.rs.gov.br/caso-do-bolo-envenenado-saiba-como-funciona-a-atuacao-tecnica-do-instituto-geral-de-pericias' target='_blank' rel='noopener noreferrer'>https://igp.rs.gov.br/caso-do-bolo-envenenado-saiba-como-funciona-a-atuacao-tecnica-do-instituto-geral-de-pericias</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula3" aria-expanded="false" aria-controls="collapse-m3-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m3-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ATSDR – AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. Toxicological profile for arsenic. Atlanta: ATSDR, 2020a.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ATSDR – AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. Toxicological profile for lead. Atlanta: ATSDR, 2020b.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Portaria nº 204, de 17 de fevereiro de 2016. Brasília: Ministério da Saúde, 2016.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério do Trabalho. Norma Regulamentadora nº 7 (NR-7): Programa de Controle Médico de Saúde Ocupacional (PCMSO). Brasília: Ministério do Trabalho, 2018.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CDC – CENTERS FOR DISEASE CONTROL AND PREVENTION. Blood lead reference value. Atlanta: CDC, 2021.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CLARKSON, T. W.; MAGOS, L.; MYERS, G. J. The toxicology of mercury: current exposures and clinical manifestations. New England Journal of Medicine, v. 349, n. 18, p. 1731–1737, 2003.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">GRANDJEAN, P.; LANDRIGAN, P. J. Neurobehavioural effects of developmental toxicity. The Lancet Neurology, v. 13, n. 3, p. 330–338, 2014.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JARUP, L.; AKESSON, A. Current status of cadmium as an environmental health problem. Toxicology and Applied Pharmacology, v. 238, p. 201–208, 2009.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KLAASSEN, C. D. (Ed.). Casarett and Doull’s toxicology: the basic science of poisons. 9. ed. New York: McGraw-Hill, 2019.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">LANPHEAR, B. P. et al. Low-level lead exposure and children’s intellectual function: an international pooled analysis. Environmental Health Perspectives, v. 126, n. 10, p. 1–9, 2018.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NRC – NATIONAL RESEARCH COUNCIL. Potential health risks from recurrent lead exposure of DOD firing range personnel. Washington, DC: National Academies Press, 2012.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SMITH, A. H. et al. Cancer risks from arsenic in drinking water. Environmental Health Perspectives, v. 126, n. 5, p. 057002, 2018.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">VALKO, M.; RHODES, C. J.; MONCOL, J. Free radicals, metals and antioxidants in oxidative stress-induced cancer. Chemico-Biological Interactions, v. 160, p. 1–40, 2006.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WHO – WORLD HEALTH ORGANIZATION. Preventing disease through healthy environments: exposure to cadmium – a major public health concern. Geneva: WHO, 2019.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula4" aria-expanded="false" aria-controls="collapse-m3-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m3-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Módulo de Princípios de Epidemiologia para o Controle de Enfermidades (MOPECE). Módulo 3: Medição das condições de saúde e doença na população. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/modulo_principios_epidemiologia_3.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/modulo_principios_epidemiologia_3.pdf</a>. Acesso em: 7 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Experiências exitosas em vigilância em saúde de populações expostas a agrotóxicos no Brasil. Brasília, DF: Ministério da Saúde, 2019. (Agrotóxicos na ótica do Sistema Único de Saúde). Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/agrotoxicos_otica_sistema_unico_saude_v2.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/agrotoxicos_otica_sistema_unico_saude_v2.pdf</a>. Acesso em: 25 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Guia de Vigilância em Saúde. 5. ed. Brasília, DF: Ministério da Saúde, 2022. 1.126 p. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_5ed_rev_atual.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/guia_vigilancia_saude_5ed_rev_atual.pdf</a>. Acesso em: 7 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Portaria nº 204, de 17 de fevereiro de 2016. Define a Lista Nacional de Notificação Compulsória de doenças, agravos e eventos de saúde pública. Diário Oficial da União: seção 1, Brasília, DF, 2016. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2016/prt0204_17_02_2016.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2016/prt0204_17_02_2016.html</a>. Acesso em: 7 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Agrotóxicos na ótica do Sistema Único de Saúde. Brasília, DF: Ministério da Saúde, 2019. 2 v. il. ISBN 978-85-334-2428-9. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/agrotoxicos_otica_sistema_unico_saude_v2.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/agrotoxicos_otica_sistema_unico_saude_v2.pdf</a>. Acesso em: 25 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BRASIL. Ministério da Saúde. Secretaria-Executiva. Departamento de Monitoramento e Avaliação do SUS. Política Nacional de Informação e Informática em Saúde. Brasília, DF: Ministério da Saúde, 2016. 56 p. ISBN 978-85-334-2353-4. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_informacao_informatica_saude.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/politica_nacional_informacao_informatica_saude.pdf</a>. Acesso em: 25 out. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">DATASUS – DEPARTAMENTO DE INFORMÁTICA DO SISTEMA ÚNICO DE SAÚDE. Acesso a sistemas e informações em saúde. Disponível em: <a href='https://datasus.saude.gov.br/' target='_blank' rel='noopener noreferrer'>https://datasus.saude.gov.br/</a>. Acesso em: 7 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">FRANCO, G. <em>et al</em>. Vigilância em saúde brasileira: reflexões e contribuição ao debate da 1ª Conferência Nacional de Vigilância em Saúde. Ciência & Saúde Coletiva, v. 22, n. 10, p. 3137–3148, 2017. DOI: 10.1590/1413-812320172210.18092017.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">ROUQUAYROL, M. Z.; GOLDBAUM, M. (Org.). Epidemiologia & saúde. 8. ed. Rio de Janeiro: MedBook, 2018. 719 p.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SILVA, A. P. B. et al. Avaliação do sistema de Vigilância em Saúde das Populações Expostas a Substâncias Químicas, Brasil, 2011 a 2021. Revista Panamericana de Salud Pública, v. 49, e6, 2025. DOI: 10.26633/RPSP.2025.6.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">TEIXEIRA, M. G. et al. Vigilância epidemiológica e emergências em saúde pública produzidas por agentes infecciosos. Rio de Janeiro: Fundação Oswaldo Cruz, 2021. 34 p. (Textos para Discussão, n. 57). Disponível em: <a href='https://homologacao-saudeamanha.icict.fiocruz.br/wp-content/uploads/2021/05/TEIXEIRA-MG-et-al-2021-Vigilancia-Epidemiologica-Saude-Publica-agentes-infecciosos-Fiocruz-Saude-Amanha-TD057.pdf' target='_blank' rel='noopener noreferrer'>https://homologacao-saudeamanha.icict.fiocruz.br/wp-content/uploads/2021/05/TEIXEIRA-MG-et-al-2021-Vigilancia-Epidemiologica-Saude-Publica-agentes-infecciosos-Fiocruz-Saude-Amanha-TD057.pdf</a>. Acesso em: 7 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WALDMAN, E. A.; ROSA, T. E. C. Vigilância em saúde pública. São Paulo: e-Coleções FSP/USP, [s.d.]. Disponível em: <a href='https://colecoes.abcd.usp.br/fsp/items/show/2385' target='_blank' rel='noopener noreferrer'>https://colecoes.abcd.usp.br/fsp/items/show/2385</a>. Acesso em: 7 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">WORLD HEALTH ORGANIZATION. Global strategy on digital health 2020–2025. Geneva: WHO, 2021. Disponível em: <a href='https://www.who.int/docs/default-source/documents/gs4dhdaa2a9f352b0445bafbc79ca799dce4d.pdf' target='_blank' rel='noopener noreferrer'>https://www.who.int/docs/default-source/documents/gs4dhdaa2a9f352b0445bafbc79ca799dce4d.pdf</a>. Acesso em: 7 set. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula5" aria-expanded="false" aria-controls="collapse-m3-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m3-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGÊNCIA GOV (Agência Brasil de Comunicação). Yanomamis de nove aldeias estão contaminados por mercúrio. 4 abr. 2024. Disponível em: <a href='https://agenciagov.ebc.com.br/noticias/202404/yanomamis-de-nove-aldeias-assediadas-pelo-garimpo-estao-contaminados-por-mercurio' target='_blank' rel='noopener noreferrer'>https://agenciagov.ebc.com.br/noticias/202404/yanomamis-de-nove-aldeias-assediadas-pelo-garimpo-estao-contaminados-por-mercurio</a>. Acesso em: 22 ago. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">AGÊNCIA NACIONAL DE MINERAÇÃO (ANM). Disponível em:<a href=' http://www.anm.gov.br/' target='_blank' rel='noopener noreferrer'> http://www.anm.gov.br/</a>. Acesso em: 26 ago. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BARTH, Christian (Canal Christian Barth). Metais Pesados (animação explicativa). [s.l.]: s.n., s.d. Disponível em: <a href='https://www.youtube.com/watch?v=GAh2CdV5CfI' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=GAh2CdV5CfI</a>. Acesso em: 08 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">BUSS, P. M.; PELLEGRINI FILHO, A. A saúde e seus determinantes sociais. Physis: Revista de Saúde Coletiva, Rio de Janeiro, v. 17, n. 1, p. 77-93, 2007.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COSTA, B. B. (org.). Saúde coletiva: conceitos, práticas e determinantes em saúde. Vol. 2. [Livro digital]. 1. ed. São Paulo: Aya Editora, 2025. 116 p. DOI: <a href='https://doi.org/10.47573/aya.5379.2.410' target='_blank' rel='noopener noreferrer'>https://doi.org/10.47573/aya.5379.2.410</a>. ISBN: 978-65-5379-684-3.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CONSELHO REGIONAL DE QUÍMICA – IV REGIÃO (CRQ-SP). Tabela Periódica Interativa. Disponível em: <a href='https://crqsp.org.br/tabelaperiodica/' target='_blank' rel='noopener noreferrer'>https://crqsp.org.br/tabelaperiodica/</a>. Acesso em: 08 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CRICHTON, Robert R. <em>Metal Toxicity – An Introduction</em>. In: Metal Chelation in Medicine. RSC Metallobiology Series, edited volume, Chapter 1. Cambridge: Royal Society of Chemistry, 2016. Disponível em: <a href='https://books.rsc.org/books/edited-volume/538/chapter/186451/Metal-Toxicity-An-Introduction' target='_blank' rel='noopener noreferrer'>https://books.rsc.org/books/edited-volume/538/chapter/186451/Metal-Toxicity-An-Introduction</a>. Acesso em: 20 ago. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">CIÊNCIA ANIMADA (Canal Ciência Animada). De onde vem o ferro – BNCC (EF01CI01). [s.l.]: s.n., s.d. Disponível em: <a href='https://www.youtube.com/watch?v=6NuKda-T5Bo' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=6NuKda-T5Bo</a>. Acesso em: 08 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">HAIDAR, Z.; FATEMA, K.; SHOILY, S. S.; SAJIB, A. A. Disease-associated metabolic pathways affected by heavy metals and metalloid. Toxicology Reports, [S.l.], v. 10, p. 554–570, 2023. DOI: <a href='https://doi.org/10.1016/j.toxrep.2023.04.010' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1016/j.toxrep.2023.04.010</a></li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO BRASILEIRO DE MINERAÇÃO (IBRAM). [s.l.]: [s.n.], s.d. Disponível em: <a href='https://portaldamineracao.com.br/' target='_blank' rel='noopener noreferrer'>https://portaldamineracao.com.br/</a>. Acesso em: 08 set. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">INSTITUTO NACIONAL DE CÂNCER JOSÉ ALENCAR GOMES DA SILVA (INCA). Metais e câncer. Rio de Janeiro: INCA, [2024]. Disponível em: <a href='https://ninho.inca.gov.br/jspui/bitstream/123456789/15363/1/Metais%20e%20Cancer.pdf' target='_blank' rel='noopener noreferrer'>https://ninho.inca.gov.br/jspui/bitstream/123456789/15363/1/Metais%20e%20Cancer.pdf</a>. Acesso em: 22 ago. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">JAZIDA. Mineração no Brasil. Blog Jazida, 20 out. 2023. Disponível em: <a href='https://blog.jazida.com/mineracao-no-brasil/' target='_blank' rel='noopener noreferrer'>https://blog.jazida.com/mineracao-no-brasil/</a>. Acesso em: 22 ago. 2025.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KOYAMA, H.; KAMOGASHIRA, T.; YAMASOBA, T. <em>Heavy metal exposure: molecular pathways, clinical implications, and protective strategies</em>. Antioxidants, Basel, v. 13, n. 1, p. 76, 2024. DOI: <a href='https://doi.org/10.3390/antiox13010076' target='_blank' rel='noopener noreferrer'>https://doi.org/10.3390/antiox13010076</a>.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">MALTA, D. C. (org.); SILVA, A. G.; GOMES, C. S.; SOUZA, J. B. Determinantes sociais em saúde: doenças crônicas não transmissíveis e seus fatores de risco e de proteção na população adulta brasileira. 1. ed. São Paulo: Rema Editora, 2025. </li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">OBREGÓN, P. L.; ESPINOZA-QUIÑONES, F. R.; OLIVEIRA, L. G. O. DE. Intoxicações de mercúrio e chumbo com maior prevalência em crianças e trabalhadores no Paraná. Cadernos Saúde Coletiva, 9 abr. 2021.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">PAHO IRIS. Determinantes ambientais e sociais da saúde - PAHO IRIS. Disponível em: <a href='https://iris.paho.org/bitstream/handle/10665.2/51687/9789275731291_por.pdf' target='_blank' rel='noopener noreferrer'>https://iris.paho.org/bitstream/handle/10665.2/51687/9789275731291_por.pdf</a> . 2011.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">SUS TV. Determinantes sociais da saúde. [s.l.]: s.n., 2019. Disponível em: <a href='https://www.youtube.com/watch?v=2JJNDeUkVtI' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=2JJNDeUkVtI</a>. Acesso em: 08 set. 2025.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-aula6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-aula6" aria-expanded="false" aria-controls="collapse-m3-aula6">Aula 6</button>
                                    </h5>
                                    <div id="collapse-m3-aula6" class="accordion-collapse collapse" aria-labelledby="heading-m3-aula6" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">COVELLO, V.; SANDMAN, P. Risk communication: evolution and revolution. In: WOLBARST, A. Solutions to an environment in peril. Baltimore: Johns Hopkins University Press, 2001. p. 164–178.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">KRIMSKY, S.; PLOUGH, A. Environmental hazards: communicating risks as a social process. Dover, MA: Auburn House Publishing Company, 1988.</li>

                                                    <li class="list-group-item aos-init aos-animate" list-style="default" data-aos="fade-right" data-aos-easing="ease-out" data-aos-duration="1200">NATIONAL RESEARCH COUNCIL. Recommendations for improving risk communication. In: NATIONAL RESEARCH COUNCIL. Improving risk communication. Washington, DC: National Academies Press, 1989. p. 16–19.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Accordion Módulos -->
        </div>

    </div>
</div>
		`,
	},
	materialcomplementar: {
		ariaLabel: "materialcomplementar",
		modalSize: "modal-xl",
		modalTitle: "Material Complementar",
		modalBody: `
			<div class="row justify-content-center pt-5">
    <div class="col-12 col-md-11">
        <div class="mb-5">
            <!-- Accordion Módulos-->
            <div class="accordion accordion-flush" id="accordionMaterialComplementar">
                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo1">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo1" aria-expanded="true" aria-controls="collapse1-material-modulo1">Módulo 1</button>
                    </h5>
                    <div id="collapse1-material-modulo1" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo1" data-bs-parent="">

                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m1-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-material-complementar-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-material-complementar-aula1" aria-expanded="true" aria-controls="collapse-m1-material-complementar-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m1-material-complementar-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m1-material-complementar-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">ARREAZA, Ana Lucia V.; MORAES, José Cássio de. Vigilância da saúde: fundamentos, interfaces e tendências. Ciência & Saúde Coletiva, Rio de Janeiro, v. 15, n. 4, p. 2215–2228, 2010. DOI: 10.1590/S1413-81232010000400036. Disponível em: <a href='https://www.scielo.br/j/csc/a/nC4LpHzs3bS7RVztSq8SZnc/' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/nC4LpHzs3bS7RVztSq8SZnc/</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">AVANCI, Joviana Quintes <em>et al</em>. Ações de vigilância das violências em serviços da atenção primária, hospitalar e de reabilitação no Brasil. Ciência & Saúde Coletiva, v. 30, n. 3, e17372024, 2025. DOI: 10.1590/1413-81232025303.17372024.</li>

                                                    <li class="list-group-item">BAQUI, Patricia <em>et al</em>. Ethnic and regional variations in hospital mortality from COVID-19 in Brazil. The Lancet Global Health, v. 8, n. 8, p. e1018–e1026, 2020. DOI: 10.1016/S2214-109X(20)30285-0.</li>

                                                    <li class="list-group-item">BARATA, Rita Barradas. Investigação de surtos e epidemias: transformações na teoria, nos conceitos e nas práticas do século XVIII ao século XXI. Saúde e Sociedade, São Paulo, v. 33, n. 1, e220310pt, 2024. DOI: 10.1590/s0104-12902024220310pt.</li>

                                                    <li class="list-group-item">BRASIL. 1ª Conferência Nacional de Vigilância em Saúde: Vigilância em Saúde – direito, conquistas e defesa de um SUS público de qualidade. Brasília, 2018. Disponível em: <a href='http://ces.saude.mg.gov.br/wp-content/uploads/2016/06/Documento-Orientador-1%C2%AA-CEVS.pdf' target='_blank' rel='noopener noreferrer'>http://ces.saude.mg.gov.br/wp-content/uploads/2016/06/Documento-Orientador-1%C2%AA-CEVS.pdf</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. <em>Saúde ambiental: guia básico para construção de indicadores</em>. 1. ed. Brasília, 2011. 128 p. (Série B. Textos básicos de saúde). ISBN 9788533417779.</li>

                                                    <li class="list-group-item">CAIRUS, Henrique F.; RIBEIRO, Wilson A. <em>Textos hipocráticos: o doente, o médico e a doença</em>. Rio de Janeiro: Editora FIOCRUZ, 2005. 251 p. ISBN 9788575413753.</li>

                                                    <li class="list-group-item">CAMPOS, Gastão Wagner de Sousa <em>et al</em>. <em>Tratado de saúde coletiva.</em> 2. ed. rev. ampl. São Paulo: HUCITEC, 2012. 968 p. ISBN 9788564806566.</li>

                                                    <li class="list-group-item">CANAL USP. Da colonização à abolição: a história das epidemias no Brasil. YouTube, 24 mar. 2020. Disponível em: <a href='https://www.youtube.com/watch?v=HRTkFCe7xwI' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=HRTkFCe7xwI</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">CONSELHO NACIONAL DE SECRETARIAS MUNICIPAIS DE SAÚDE (CONASEMS). Aula 21 - Vigilância em saúde: (parte 1). YouTube, 24 fev. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=zszLy8ckb0E' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=zszLy8ckb0E</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">CONSELHO NACIONAL DE SECRETARIAS MUNICIPAIS DE SAÚDE (CONASEMS). Aula 22 - Vigilância em saúde (parte 2). YouTube, 24 fev. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=Q0hYz3lKrG8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Q0hYz3lKrG8</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">DA SILVA JUNIOR, Jarbas Barbosa. <em>A nova face da vigilância epidemiológica</em>. Epidemiologia e Serviços de Saúde, Brasília, v. 12, n. 1, 2003. DOI: 10.5123/S1679-49742003000100001.</li>

                                                    <li class="list-group-item">FRANCO, Geraldo <em>et al</em>. <em>Vigilância em saúde brasileira: reflexões e contribuição ao debate da 1ª Conferência Nacional de Vigilância em Saúde</em>. Ciência & Saúde Coletiva, Rio de Janeiro, v. 22, n. 10, p. 3137–3148, 2017. DOI: 10.1590/1413-812320172210.18092017.</li>

                                                    <li class="list-group-item">HENRIQUES, Carolina Maria P.; MOURA, Natália F. O. de; SOUZA, Paulo B. de. <em>Desafios e lições da pandemia de COVID-19 para a Vigilância em Saúde no Brasil</em>. Revista Brasileira de Epidemiologia, v. 27, e240049, 2024. DOI: 10.1590/1980-549720240049.2.</li>

                                                    <li class="list-group-item">LEE, Lisa M. <em>et al</em>. <em>Principles and practice of public health surveillance</em>. Oxford: Oxford University Press, 2010. 766 p. ISBN 9780195372922. DOI: 10.1093/acprof:oso/9780195372922.001.0001.</li>

                                                    <li class="list-group-item">METEORO BRASIL. A história da vigilância em saúde no Brasil. YouTube, 13 set. 2021. Disponível em: <a href='https://www.youtube.com/watch?v=DXXL4EBwxZo' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=DXXL4EBwxZo</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">PRAZER, KARNAL – CANAL OFICIAL DE LEANDRO KARNAL. História das Epidemias | Leandro Karnal. YouTube, 2 ago. 2021. Disponível em:<a href=' https://www.youtube.com/watch?v=vt8d0FKj7k4' target='_blank' rel='noopener noreferrer'> https://www.youtube.com/watch?v=vt8d0FKj7k4</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">ROSEN, George. <em>Uma história da saúde pública</em>. São Paulo: HUCITEC, 1994. 423 p. ISBN 9788527102629.</li>

                                                    <li class="list-group-item">TV SENADO. A Revolta da Vacina. YouTube, 30 out. 2017. Disponível em: <a href='https://www.youtube.com/watch?v=6i6v9f_aWjg' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=6i6v9f_aWjg</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">VIDEOSAÚDE DISTRIBUIDORA DA FIOCRUZ. A história da saúde pública no Brasil – 500 anos na busca de soluções. YouTube, 22 fev. 2016. Disponível em: <a href='https://www.youtube.com/watch?v=7ouSg6oNMe8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=7ouSg6oNMe8</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Noncommunicable diseases: progress monitor 2025. Geneva, 2025. Disponível em: <a href='https://iris.who.int/server/api/core/bitstreams/7a228681-a190-4c29-b2a8-9d4255dc49d1/content' target='_blank' rel='noopener noreferrer'>https://iris.who.int/server/api/core/bitstreams/7a228681-a190-4c29-b2a8-9d4255dc49d1/content</a>.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-material-complementar-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-material-complementar-aula2" aria-expanded="false" aria-controls="collapse-m1-material-complementar-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m1-material-complementar-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m1-material-complementar-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Instrumentos de planejamento do SUS. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/acesso-a-informacao/gestao-do-sus/instrumentos-de-planejamento</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Vigilância em Saúde das Populações Expostas a Contaminantes e Substâncias Químicas (VIGIPEQ). Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/svsa/saude-ambiental/vigipeq' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/composicao/svsa/saude-ambiental/vigipeq</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Manual de planejamento do SUS: articulação interfederativa. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/articulacao_interfederativa_v4_manual_planejamento_atual.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/articulacao_interfederativa_v4_manual_planejamento_atual.pdf</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL DE FATO. Documentário denuncia contaminação por contato com lama tóxica da Samarco. São Paulo, 5 fev. 2019. Disponível em: <a href='https://www.brasildefato.com.br/2019/02/05/documentario-denuncia-contaminacao-por-contato-com-lama-toxica-da-samarco/' target='_blank' rel='noopener noreferrer'>https://www.brasildefato.com.br/2019/02/05/documentario-denuncia-contaminacao-por-contato-com-lama-toxica-da-samarco/</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">CONASEMS. Aula 21 - Vigilância em saúde (parte 1). YouTube, 24 fev. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=zszLy8ckb0E' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=zszLy8ckb0E</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">CONASEMS. Vigilância em saúde (parte 2). YouTube, 25 fev. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=Q0hYz3lKrG8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Q0hYz3lKrG8</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">DATASUS. TABNET: intoxicação exógena – SINAN. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinannet/cnv/Intoxbr.def' target='_blank' rel='noopener noreferrer'>http://tabnet.datasus.gov.br/cgi/tabcgi.exe?sinannet/cnv/Intoxbr.def</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">DATASUS. Tutorial TABNET. Brasília, DF: Ministério da Saúde, 2020. Disponível em: <a href='https://datasus.saude.gov.br/wp-content/uploads/2020/02/Tutorial-TABNET-2020.pdf' target='_blank' rel='noopener noreferrer'>https://datasus.saude.gov.br/wp-content/uploads/2020/02/Tutorial-TABNET-2020.pdf</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">DATASUS. Portal DATASUS. Brasília, DF: Ministério da Saúde, [s.d.]. Disponível em: <a href='https://datasus.saude.gov.br/' target='_blank' rel='noopener noreferrer'>https://datasus.saude.gov.br/</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">FIOCRUZ. Vigilância em saúde – ligado em saúde. Rio de Janeiro: Fiocruz, [s.d.]. Vídeo. Disponível em: <a href='https://fiocruz.br/video/vigilancia-em-saude-ligado-em-saude' target='_blank' rel='noopener noreferrer'>https://fiocruz.br/video/vigilancia-em-saude-ligado-em-saude</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">FIOCRUZ. Vigilância genômica de dengue, chikungunya e Zika. Rio de Janeiro: Fiocruz, [s.d.]. Vídeo. Disponível em: <a href='https://fiocruz.br/video/projeto-da-fiocruz-gera-mais-de-120-genomas-completos-de-dengue-zika-e-chikungunya' target='_blank' rel='noopener noreferrer'>https://fiocruz.br/video/projeto-da-fiocruz-gera-mais-de-120-genomas-completos-de-dengue-zika-e-chikungunya</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">FOLHA DE S. PAULO. Fantasmas da lama: a vida dos atingidos pela mineração em MG, oito anos após Mariana. YouTube, 5 nov. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=8xwOIFizqA0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=8xwOIFizqA0</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">FIOCRUZ. Carlos Machado: tragédia de Brumadinho e saúde pública. YouTube, 31 jan. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=YlMMk_-ZDKM' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=YlMMk_-ZDKM</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">MURAD, Vinícius. COP30: documentário mostra a luta do povo Munduruku contra o garimpo ilegal. <em>CNN Brasil</em>, São Paulo, 8 set. 2025. Disponível em: <a href='https://www.cnnbrasil.com.br/nacional/cop30-documentario-mostra-a-luta-do-povo-munduruku-contra-o-garimpo-ilegal/' target='_blank' rel='noopener noreferrer'>https://www.cnnbrasil.com.br/nacional/cop30-documentario-mostra-a-luta-do-povo-munduruku-contra-o-garimpo-ilegal/</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">PAIM, Jairnilson Silva. O que é o SUS. Rio de Janeiro: Editora Fiocruz, 2009.</li>

                                                    <li class="list-group-item">PEREIRA, João Carlos; SILVA, Maria Fernanda da. O impacto das tecnologias educacionais na aprendizagem ativa. <em>Revista Brasileira de Ensino Superior Online</em>, São Paulo, v. 15, n. 2, p. 123–145, jul./dez. 2025. Disponível em: <a href='https://www.scielo.br/j/rbso/a/RFccCXPZH4Z57Dw5gTzBmpj/' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/rbso/a/RFccCXPZH4Z57Dw5gTzBmpj/</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">PORTO, Marcelo Firpo de Souza. Saúde, ambiente e sustentabilidade: uma análise interdisciplinar. Rio de Janeiro: Editora Fiocruz, 2012.</li>

                                                    <li class="list-group-item">RELATOS de vítimas de Brumadinho. [S.l.]: [s.n.], [s.d.]. Vídeo (YouTube). Disponível em: <a href='https://www.youtube.com/watch?v=PZ3X52sq1pA' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=PZ3X52sq1pA</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">SERVIÇO de vigilância em saúde e sua importância no planejamento das ações executadas pelo SUS. [S.l.]: [s.n.], [s.d.]. Vídeo (YouTube). Disponível em: <a href='https://www.youtube.com/watch?v=TOW_ij0zjh8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=TOW_ij0zjh8</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">TABNET: utilização avançada. [S.l.]: [s.n.], [s.d.]. Vídeo (YouTube). Disponível em: <a href='https://www.youtube.com/watch?v=PJTx7STy0Xc' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=PJTx7STy0Xc</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">USO do TABNET – vídeo curto. [S.l.]: [s.n.], [s.d.]. Vídeo. Disponível em: <a href='http://go.microsoft.com/fwlink/p/?LinkId=255141' target='_blank' rel='noopener noreferrer'>http://go.microsoft.com/fwlink/p/?LinkId=255141</a>. Acesso em: 2 out. 2025.</li>

                                                    <li class="list-group-item">VIDEOSAÚDE DISTRIBUIDORA DA FIOCRUZ. A história da saúde pública no Brasil – 500 anos na busca de soluções. YouTube, 22 fev. 2016. Disponível em: <a href='https://www.youtube.com/watch?v=7ouSg6oNMe8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=7ouSg6oNMe8</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-material-complementar-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-material-complementar-aula3" aria-expanded="false" aria-controls="collapse-m1-material-complementar-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m1-material-complementar-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m1-material-complementar-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde, Universidade Federal de Goiás. Asis - Análise de Situação de Saúde. Brasília: Ministério da Saúde, 2015. 3v.: il. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/asis_analise_situacao_saude_volume_1.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/asis_analise_situacao_saude_volume_1.pdf</a>. Acesso em: 24 out. 2025. </li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria de Consolidação Nº 4, de 28 de setembro de 2017. Consolidação das normas sobre os sistemas e os subsistemas do Sistema Único de Saúde. Anexo III Ações e Serviços de Vigilância em Saúde (Origem: PRT MS/GM 1378/2013). Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria de Consolidação Nº 4, de 28 de setembro de 2017. Consolidação das normas sobre os sistemas e os subsistemas do Sistema Único de Saúde. Anexo V Sistema Nacional de Vigilância Epidemiológica (SNVE) (Origem: PRT MS/GM 204/2016). Capítulo I Da lista nacional de notificação compulsória de doenças, agravos e eventos de saúde pública. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/saudelegis/gm/2017/prc0004_03_10_2017.html</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Gabinete do Ministro. Portaria de Consolidação No. 5, de 28 de setembro de 2017. Estabelece as normas sobre as ações e os serviços de saúde do Sistema Único de Saúde. Disponível em: <a href='https://portalsinan.saude.gov.br/images/documentos/Legislacoes/Portaria_Consolidacao_5_28_SETEMBRO_2017.pdf' target='_blank' rel='noopener noreferrer'>https://portalsinan.saude.gov.br/images/documentos/Legislacoes/Portaria_Consolidacao_5_28_SETEMBRO_2017.pdf</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Decreto n. 78.231, de 12 de agosto de 1976. Regulamenta a Lei nº 6.259, de 30 de outubro de 1975, que dispõe sobre a organização das ações de Vigilância Epidemiológica, sobre o Programa Nacional de Imunizações, estabelece normas relativas à notificação compulsória de doenças, e dá outras providências. Diário Oficial da União, Poder Executivo, Brasília, DF, 13 ago. 1976. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/decreto/1970-1979/d78231.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/decreto/1970-1979/d78231.htm</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Lei nº 8.080, de 19 de setembro de 1990. Dispõe sobre as condições para a promoção, proteção e recuperação da saúde, a organização e o funcionamento dos serviços correspondentes. Diário Oficial da União, Poder Executivo, Brasília, DF, 20 set. 1990. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/L8080.htm#art15' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/L8080.htm#art15</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Lei nº 9.782, de 26 de janeiro de 1999. Define o Sistema Nacional de Vigilância Sanitária, cria a Agência Nacional de Vigilância Sanitária, e dá outras providências. Diário Oficial da União, Poder Executivo, Brasília, DF, 27 jan. 1999. Disponível em: <a href='https://www.planalto.gov.br/ccivil_03/leis/l9782.htm' target='_blank' rel='noopener noreferrer'>https://www.planalto.gov.br/ccivil_03/leis/l9782.htm</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Saúde Ambiental, do Trabalhador e Vigilância das Emergências em Saúde Pública. A evolução da Vigilância em Saúde Ambiental e Saúde do Trabalhador no Sistema Único de Saúde (2011 – 2021). Brasília: Ministério da Saúde, 2022. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/saude-do-trabalhador/a-evolucao-da-vigilancia-em-saude-ambiental-e-saude-do-trabalhador.pdf/view' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/saude-do-trabalhador/a-evolucao-da-vigilancia-em-saude-ambiental-e-saude-do-trabalhador.pdf/view</a>. </li>

                                                    <li class="list-group-item">COSTA, M. C. <em>et al</em>. Vigilância em Saúde no SUS – Construção, Efeitos e Perspectivas. Ciência & Saúde Coletiva, 2018. 23(6):1811-1818. Disponível em: <a href='https://www.scielo.br/j/csc/a/FxcSJBQq8G7CNSxhTyT7Qbn/' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/FxcSJBQq8G7CNSxhTyT7Qbn/</a>.</li>

                                                    <li class="list-group-item">MINISTÉRIO DA SAÚDE. Composição. Vigilância em Saúde e Ambiente. Saúde do Trabalhador. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/svsa/saude-do-trabalhador' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/composicao/svsa/saude-do-trabalhador</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">MINISTÉRIO DA SAÚDE. Agência Nacional de Vigilância Sanitária - Anvisa – Centrais de conteúdo. Disponível em: <a href='https://www.gov.br/anvisa/pt-br/centraisdeconteudo' target='_blank' rel='noopener noreferrer'>https://www.gov.br/anvisa/pt-br/centraisdeconteudo</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">MINISTÉRIO DA SAÚDE. Secretaria de Vigilância em Saúde e Ambiente. Coordenação-Geral de Informações e Análises Epidemiológicas. Departamento de Análise Epidemiológica e Vigilância de Doenças Não Transmissíveis. Sistemas de Informação. Disponível em: <a href='https://svs.aids.gov.br/daent/cgiae/istemas-informacao/' target='_blank' rel='noopener noreferrer'>https://svs.aids.gov.br/daent/cgiae/istemas-informacao/</a>. Acesso em: 24 out. 2025.</li>

                                                    <li class="list-group-item">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Diretrizes da OMS para questões éticas na vigilância em saúde pública. 2023. Disponível em: <a href='https://iris.paho.org/bitstream/handle/10665.2/57542/9789275719848_por.pdf?sequence=1&isAllowed=y' target='_blank' rel='noopener noreferrer'>https://iris.paho.org/bitstream/handle/10665.2/57542/9789275719848_por.pdf?sequence=1&isAllowed=y</a>. </li>

                                                    <li class="list-group-item">RIPSA. Rede Interagencial de Informação para a Saúde. Indicadores básicos para a saúde no Brasil: conceitos e aplicações. 2. ed. Brasília: Organização Pan-Americana da Saúde, 2008. 349 p.: il. Disponível em: <a href='http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf' target='_blank' rel='noopener noreferrer'>http://tabnet.datasus.gov.br/tabdata/livroidb/2ed/indicadores.pdf</a>. Acesso em: 24 out. 2025. </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m1-material-complementar-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m1-material-complementar-aula4" aria-expanded="false" aria-controls="collapse-m1-material-complementar-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m1-material-complementar-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m1-material-complementar-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AGUILAR, G. M. O. <em>et al</em>. Preparação, vigilância e resposta às emergências de saúde pública na Cidade do Rio de Janeiro, Brasil, de 2021 a 2024. <em>Ciência & Saúde Coletiva</em>, v. 30, n. 7, e18832024, 2025. DOI: 10.1590/1413-81232025307.18832024.</li>

                                                    <li class="list-group-item">BBC NEWS BRASIL. Brumadinho: o documentário da BBC (parte 2). YouTube, 28 maio 2019. Disponível em: <a href='https://www.youtube.com/watch?v=TUlq8pjOU4U' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=TUlq8pjOU4U</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">BBC NEWS BRASIL. Como a COVID-19 mudou o mundo: 21 notícias que marcaram o século XXI. YouTube, 5 nov. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=fRT8AS-007I' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=fRT8AS-007I</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. <em>Estratégia da Vigilância Baseada em Eventos: mini guia.</em> Brasília, DF: Ministério da Saúde, 2023. 28 p. ISBN 978-65-87589-84-8.</li>

                                                    <li class="list-group-item">CARMO, E. H. Emergências de saúde pública: breve histórico, conceitos e aplicações. <em>Saúde em Debate</em>, v. 44, n. especial 2, p. 9-19, jul. 2020. DOI: 10.1590/0103-11042020e201.</li>

                                                    <li class="list-group-item">CARMO, E. H.; PENNA, G. O.; OLIVEIRA, W. K. Emergências de saúde pública: conceito, caracterização, preparação e resposta. <em>Estudos Avançados</em>, v. 22, n. 64, p. 19-32, 2008. DOI: 10.1590/S0103-40142008000300003.</li>

                                                    <li class="list-group-item">FOOD AND AGRICULTURE ORGANIZATION OF THE UNITED NATIONS; UNITED NATIONS ENVIRONMENT PROGRAMME; WORLD HEALTH ORGANIZATION; WORLD ORGANISATION FOR ANIMAL HEALTH. <em>One Health Joint Plan of Action (2022–2026): working together for the health of humans, animals, plants and the environment</em>. Rome: FAO, 2022. DOI: 10.4060/cc2289en.</li>

                                                    <li class="list-group-item">VIVER BEM ANANINDEUA/PA. A tragédia humanitária na Terra Indígena Yanomami. YouTube, 30 JAN. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=BpNFT8SFAc0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=BpNFT8SFAc0</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">G1. Garimpo ilegal, desnutrição: Entenda a situação da reserva. YouTube, 24 jan. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=WQauthpCP4I' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=WQauthpCP4I</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">G1. Repórteres reencontram crianças yanomami que comoveram o país durante crise humanitária. YouTube, 4 de maio 2025. Disponível em: <a href='https://www.youtube.com/watch?v=Td_J0J2zWkA' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Td_J0J2zWkA</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">INEGÁVEL O FILME. Inegável: um olhar sobre o início da vacinação contra a COVID-19 na cidade do Rio de Janeiro. YouTube, 1 fev 2022. Disponível em: <a href='https://www.youtube.com/watch?v=jUccdPBSyS4' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=jUccdPBSyS4</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">HERSTEIN, J. J. <em>et al</em>. Emergency preparedness: what is the future? Antimicrobial Stewardship & Healthcare Epidemiology, v. 1, n. 1, e29, 2021. DOI: 10.1017/ash.2021.190.</li>

                                                    <li class="list-group-item">MERALI, S. et al. Community-based surveillance advances the Global Health Security Agenda in Ghana. <em>PLoS One</em>, v. 15, n. 8, e0237320, 2020. DOI: 10.1371/journal.pone.0237320.</li>

                                                    <li class="list-group-item">NORZIN, T. et al. Event-based surveillance: providing early warning for communicable disease threats. <em>Canada Communicable Disease Report</em>, v. 49, n. 2/3, p. 29-34, 2023. DOI: 10.14745/ccdr.v49i23a01.</li>

                                                    <li class="list-group-item">OLIVEIRA E CRUZ, D. M. D. et al. Centro de operações de emergência na COVID-19: a experiência do município do Rio de Janeiro. Revista Panamericana de Salud Pública, v. 46, e29, 2022. DOI: 10.26633/RPSP.2022.9.</li>

                                                    <li class="list-group-item">ORGANIZAÇÃO PAN-AMERICANA DA SAÚDE. Investimento e desenvolvimento da preparação para emergências de saúde a longo prazo durante a pandemia de COVID-19: orientação provisória para os Estados Membros da OMS. Brasília, DF: OPAS, 2020. Licença CC BY-NC-SA 3.0 IGO.</li>

                                                    <li class="list-group-item">PAN AMERICAN HEALTH ORGANIZATION. Strategy on epidemic intelligence for strengthening early warning of health emergencies 2024–2029. Washington, D.C.: PAHO, 2024. (61st Directing Council of PAHO, 76th Session of the Regional Committee of WHO for the Americas, CD61/12, Rev. 1).</li>

                                                    <li class="list-group-item">RODRIGUES-JR., A. L. A inteligência epidemiológica como modelo de organização em saúde. Ciência & Saúde Coletiva, v. 17, n. 3, p. 797-805, 2012. DOI: 10.1590/S1413-81232012000300027.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. A guide to establishing event-based surveillance. Geneva: WHO, 2008. ISBN 978-92-9061-321-3.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Early detection, assessment and response to acute public health events: implementation of early warning and response with a focus on event-based surveillance. Geneva: WHO, 2014. Disponível em: <a href='https://iris.who.int/bitstream/handle/10665/112667/WHO_HSE_GCR_LYO_2014.4_eng.pdf' target='_blank' rel='noopener noreferrer'>https://iris.who.int/bitstream/handle/10665/112667/WHO_HSE_GCR_LYO_2014.4_eng.pdf</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Framework for a public health emergency operations centre. Geneva: WHO, 2015. Disponível em: <a href='https://iris.who.int/handle/10665/196135' target='_blank' rel='noopener noreferrer'>https://iris.who.int/handle/10665/196135</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. WHO guidance for contingency planning. Geneva: WHO, 2018. Licença CC BY-NC-SA 3.0 IGO.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Guidance for after action review (AAR). Geneva: WHO, 2019. Disponível em: <a href='https://www.who.int/publications/i/item/WHO-WHE-CPI-2019.4' target='_blank' rel='noopener noreferrer'>https://www.who.int/publications/i/item/WHO-WHE-CPI-2019.4</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Strengthening health emergency preparedness in cities and urban settings: guidance for national and local authorities. Geneva: WHO, 2021. Licença CC BY-NC-SA 3.0 IGO.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Strengthening health emergency prevention, preparedness, response and resilience. Geneva: WHO, 2023.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION. Emergency response framework: internal WHO procedures. Geneva: WHO, 2024. ISBN 978-92-4-005806-4 (versão eletrônica); ISBN 978-92-4-005807-1 (versão impressa).</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo2">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo2" aria-expanded="false" aria-controls="collapse1-material-modulo2">Módulo 2</button>
                    </h5>
                    <div id="collapse1-material-modulo2" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo2" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m2-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula1" aria-expanded="true" aria-controls="collapse-m2-material-complementar-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AL-HOCEIMA CITY, MOROCCO. <em>Assessing the impact of organic and inorganic micropollutants released from a wastewater treatment plant on humans and aquatic environment</em>. Toxicology Reports, 2024. DOI: 10.1016/j.toxrep.2024.101699.</li>

                                                    <li class="list-group-item">APOSTILA de Toxicologia Básica. Salvador: Centro de Informação e Assistência Toxicológica da Bahia (CIAVE), 2009. Disponível em: <a href='https://www.saude.ba.gov.br/wp-content/uploads/2017/08/Apostila_CIAVE_Ago_2009_A4.pdf' target='_blank' rel='noopener noreferrer'>https://www.saude.ba.gov.br/wp-content/uploads/2017/08/Apostila_CIAVE_Ago_2009_A4.pdf</a>.</li>

                                                    <li class="list-group-item">EFFECTS of organic and inorganic contaminants and their mixtures on metabolic health and gene expression in developmentally exposed zebrafish. bioRxiv, 2024. DOI: 10.1101/2024.10.28.620642.</li>

                                                    <li class="list-group-item">ENSP FIOCRUZ. Entrevista: Fiocruz diz não a pulverização aérea de agrotóxicos em áreas urbanas. YouTube, 17 jun. 2016. Disponível em: <a href='https://www.youtube.com/watch?v=uQWfwGxiViY' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=uQWfwGxiViY</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">MANUAL de Toxicologia Clínica. Curitiba: Universidade Federal do Paraná, [s.d.]. Disponível em: <a href='https://saude.ufpr.br/medtrab/wp-content/uploads/sites/25/2016/08/Manual-de-Toxicologia-Cl%C3%ADnica_pdf.pdf' target='_blank' rel='noopener noreferrer'>https://saude.ufpr.br/medtrab/wp-content/uploads/sites/25/2016/08/Manual-de-Toxicologia-Cl%C3%ADnica_pdf.pdf</a>.</li>

                                                    <li class="list-group-item">MARKDCATLIN. Routes of exposure to toxic materials 1965 DOD. YouTube, 20 jan. 2011. Disponível em: <a href='https://www.youtube.com/watch?v=88QRIGOto4Y' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=88QRIGOto4Y</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">MENTE FORA DO CUBO. O Desastre de Minamata. YouTube, 13 ago. 2024. Disponível em: <a href='https://www.youtube.com/watch?v=6e5wODc-S-Y' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=6e5wODc-S-Y</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">THE OCCUPATIONAL SAFETY LEADERSHIP PODCAST. Episode 13 Chemical Routes of Exposure. YouTube, 24 dez. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=kt2x_iC7k18' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=kt2x_iC7k18</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">TOXICOLOGIA e segurança. [S.l.]: ISPSN, [s.d.]. Disponível em: <a href='https://www.ispsn.org/sites/default/files/documentos-virtuais/pdf/toxicologia_e_seguranca_-_lucile_cecilia_peruzzo_0.pdf' target='_blank' rel='noopener noreferrer'>https://www.ispsn.org/sites/default/files/documentos-virtuais/pdf/toxicologia_e_seguranca_-_lucile_cecilia_peruzzo_0.pdf</a>.</li>

                                                    <li class="list-group-item">TOXICOLOGIA: uma abordagem multidisciplinar – volume I. [S.l.]: CAPES, [s.d.]. Disponível em: <a href='https://educapes.capes.gov.br/handle/capes/699865' target='_blank' rel='noopener noreferrer'>https://educapes.capes.gov.br/handle/capes/699865</a>.</li>

                                                    <li class="list-group-item">VITRIOL. Cidade de Chumbo – Parte 1. YouTube, 19 out. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=3WSl4FFiivQ' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=3WSl4FFiivQ</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">VSN INTERNATIONAL. Dose response analysis in toxicology. YouTube, 21 set. 2020. Disponível em: <a href='https://www.youtube.com/watch?v=LZcRA9CoHsc' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=LZcRA9CoHsc</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula2" aria-expanded="false" aria-controls="collapse-m2-material-complementar-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AGENCY FOR TOXIC SUBSTANCES AND DISEASE REGISTRY. ATSDR ToxFAQs e Toxicological Profiles. Atlanta: ATSDR, [s.d.]. Disponível em: <a href='https://www.atsdr.cdc.gov/toxicological-profiles/about/index.html' target='_blank' rel='noopener noreferrer'>https://www.atsdr.cdc.gov/toxicological-profiles/about/index.html</a>.</li>

                                                    <li class="list-group-item">A CRITICAL review on the toxicological and epidemiological evidence integration for assessing human health risks to environmental chemical exposures. Reviews on Environmental Health, 2024. DOI: 10.1515/reveh-2024-0072.</li>

                                                    <li class="list-group-item">CASARETT, Louis J.; DOULL, John. Casarett & Doull’s toxicology: the basic science of poisons. 9. ed. New York: McGraw-Hill Education, 2019. Disponível em: <a href='https://accesspharmacy.mhmedical.com/book.aspx?bookid=2462' target='_blank' rel='noopener noreferrer'>https://accesspharmacy.mhmedical.com/book.aspx?bookid=2462</a>.</li>

                                                    <li class="list-group-item">RADIOLOGANDO. Efeitos biológicos causados pela radiação ionizante | Radiologando. YouTube, 23 ago. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=XKj30u-dig4' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=XKj30u-dig4</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">HAYES, A. Wallace. Hayes’ principles and methods of toxicology. 6. ed. Boca Raton: CRC Press, 2014. Disponível em: <a href='https://www.taylorfrancis.com/books/mono/10.1201/b17359' target='_blank' rel='noopener noreferrer'>https://www.taylorfrancis.com/books/mono/10.1201/b17359</a>.</li>

                                                    <li class="list-group-item">HUMAN exposure to chemical mixtures: challenges for the integration of toxicology with epidemiology data in risk assessment. Food and Chemical Toxicology, v. 103, p. 188–193, 2017. DOI: 10.1016/j.fct.2017.03.012.</li>

                                                    <li class="list-group-item">G1. Fantástico: Crescem os casos graves de intoxicação por bebidas adulteradas com metanol em SP. YouTube, 29 set. 2025. Disponível em: <a href='https://www.youtube.com/watch?v=lzbuI_dA_lU' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=lzbuI_dA_lU</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">KIS KIS - KEEP IT SHORT. SHORT film on the outbreak of an epidemy | Snow – by Isaac Ergas. YouTube, 10 jul. 2024. Disponível em: <a href='https://www.youtube.com/watch?v=qATr4D_lqZU' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=qATr4D_lqZU</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula3" aria-expanded="false" aria-controls="collapse-m2-material-complementar-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">AMBOSS: MEDICAL KNOWLEDGE DISTILLED. Farmacodinâmica - Parte 1: Como os Medicamentos Agem no Corpo. YouTube, 3 out. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=PhfhMBO-w9Q' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=PhfhMBO-w9Q</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">DRAUZIO VARELLA. Como a nicotina age no cérebro. YouTube, 28 set. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=D8RE-JL-oMY' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=D8RE-JL-oMY</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">DRAUZIO VARELLA. Como eu larguei o cigarro e dicas para quem quer parar. YouTube, 14 nov. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=Jtpd9d93wX8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=Jtpd9d93wX8</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">NEUROSCIENTIFICALLY CHALLENGED. Neurociência de 2 Minutos: Nicotina. YouTube, 23 abr. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=I02WbuLiivw' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=I02WbuLiivw</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">ONU BRASIL. Controle do tabaco pode economizar bilhões de dólares e salvar milhões de vidas. YouTube, 12 jan. 2017. Disponível em: <a href='https://www.youtube.com/watch?v=T8bH0vFP2PM' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=T8bH0vFP2PM</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">ONU BRASIL. OMS alerta para perigo dos cigarros eletrônicos. YouTube, 2 set. 2014. Disponível em: <a href='https://www.youtube.com/watch?v=X4FrEVGAf5s' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=X4FrEVGAf5s</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">TRATAMENTOENFISEMA. Enfisema Pulmonar e Válvulas Brônquicas Unidirecionais. YouTube, 28 jun. 2010. Disponível em: <a href='https://www.youtube.com/watch?v=r7U_Ih7-se4' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=r7U_Ih7-se4</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula4" aria-expanded="false" aria-controls="collapse-m2-material-complementar-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">CANAL VP - NUTRIÇÃO FUNCIONAL. Uso de Agrotóxicos Brasil x UE | Especialistas | Larissa Bombardi | VP Nutrição Funcional. YouTube, 5 fev. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=t0c3k6r5J9Q' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=t0c3k6r5J9Q</a>. Acesso em: 6 fev. 2026.</li>

                                                    <li class="list-group-item">OLÁ, CIÊNCIA. Como realmente eliminar o agrotóxico dos alimentos. YouTube, 3 abr. 2025. Disponível em: <a href='https://www.youtube.com/watch?v=F5O0lC-38fM' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=F5O0lC-38fM</a>. Acesso em: 6 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m2-material-complementar-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m2-material-complementar-aula5" aria-expanded="false" aria-controls="collapse-m2-material-complementar-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m2-material-complementar-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m2-material-complementar-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">ACGIH – AMERICAN CONFERENCE OF GOVERNMENTAL INDUSTRIAL HYGIENISTS. <em>TLVs® e BEIs®</em>. Disponível em: <a href='https://www.acgih.org/data-hub/' target='_blank' rel='noopener noreferrer'>https://www.acgih.org/data-hub/</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ARAÚJO, U. C. et al. Avaliação da exposição ocupacional ao chumbo: proposta de uma estratégia de monitoramento para prevenção dos efeitos clínicos e subclínicos. <em>Cadernos de Saúde Pública</em>, 1999. Disponível em: <a href='https://www.scielo.br/j/csp/a/qXz57RSKQXGtHVkZQfZvrJc/?lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csp/a/qXz57RSKQXGtHVkZQfZvrJc/?lang=pt</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">CAMPOS, É. A.; SILVA, I. F.; WARDEN, C. F. Exposição a metais em população adulta residente em áreas industriais: revisão sistemática da literatura. <em>Ciência & Saúde Coletiva</em>, v. 26, n. 6, p. 2253–2270, 2021. Disponível em: <a href='https://doi.org/10.1590/1413-81232021266.07612019' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/1413-81232021266.07612019</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">HUMAN BIOMONITORING FOR EUROPEAN UNION (HBM4EU). <em>Biomarcadores de efeito: o que se precisa saber?</em> Disponível em: <a href='https://www.hbm4eu.eu/wp-content/uploads/2018/12/20166_brief_n1_biomarkers_PT_v02_HL_JG.pdf' target='_blank' rel='noopener noreferrer'>https://www.hbm4eu.eu/wp-content/uploads/2018/12/20166_brief_n1_biomarkers_PT_v02_HL_JG.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">HUMAN BIOMONITORING FOR EUROPEAN UNION (HBM4EU). <em>Infográficos sobre Hg, As, Pb, Cd e Cr VI</em>. Disponível em: <a href='https://www.hbm4eu.eu/citizens-corner/infographics/' target='_blank' rel='noopener noreferrer'>https://www.hbm4eu.eu/citizens-corner/infographics/</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">INTERTOX. Webinar: Limites de exposição ocupacional. Youtube, 17 dez. 2018. Disponível em: <a href='https://www.youtube.com/watch?v=_RWd4xxz_Es' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=_RWd4xxz_Es</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">JOMOVA, K.; ALOMAR, S. Y.; NEPOVIMOVA, E.; KUCA, K.; VALKO, M. Heavy metals: toxicity and human health effects. <em>Archives of Toxicology</em>, v. 99, n. 1, p. 153–209, 2025. Disponível em: <a href='https://doi.org/10.1007/s00204-024-03903-2' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1007/s00204-024-03903-2</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">MOTA, P. J.; ALONZO, H. G. A.; ANDRÉ, L. C.; CÂMARA, V. M.; CAMPOLINA, D.; SANTOS, A. S. E.; FRÓES-ASMUS, C. I. R.; PEIXOTO, S. V. Prevalence of metal levels above the reference values in a municipality affected by the collapse of a mining tailings dam: Brumadinho Health Project. <em>Revista Brasileira de Epidemiologia</em>, v. 25, e220014, 2022. Disponível em: <a href='https://doi.org/10.1590/1980-549720220014.supl.2' target='_blank' rel='noopener noreferrer'>https://doi.org/10.1590/1980-549720220014.supl.2</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h5 class="accordion-header" id="heading1-material-modulo3">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1-material-modulo3" aria-expanded="false" aria-controls="collapse1-material-modulo3">Módulo 3</button>
                    </h5>
                    <div id="collapse1-material-modulo3" class="accordion-collapse collapse" aria-labelledby="heading1-material-modulo3" data-bs-parent="">
                        <div class="accordion-body">
                            <!-- Accordion Aulas -->
                            <div class="accordion accordion-flush aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease-out" data-aos-duration="800" id="accordionMaterialComplementar-m3-aulas">
                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula1">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula1" aria-expanded="true" aria-controls="collapse-m3-material-complementar-aula1">Aula 1</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula1" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula1" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">ACADEMIA DOS CURIOSOS. Mercúrio e seus efeitos tóxicos no corpo humano e no mundo. YouTube, 6 jun. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=dfBVuif-QK4' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=dfBVuif-QK4</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ANDRADE, D. F.; ROCHA, M. S. da. A toxicidade do arsênio e sua natureza. Revista Acadêmica Oswaldo Cruz, n. 10, p. 1–11, 2013. Disponível em: <a href='https://oswaldocruz.br/revista_academica/content/pdf/Edicao_10_Andrade_Daiene_Flor.pdf' target='_blank' rel='noopener noreferrer'>https://oswaldocruz.br/revista_academica/content/pdf/Edicao_10_Andrade_Daiene_Flor.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ARAÚJO, U. C. <em>et al</em>. Avaliação da exposição ocupacional ao chumbo: proposta de uma estratégia de monitoramento para prevenção dos efeitos clínicos e subclínicos. Cadernos de Saúde Pública, 1999. Disponível em:<a href=' https://www.scielo.br/j/csp/a/qXz57RSKQXGtHVkZQfZvrJc/?lang=pt' target='_blank' rel='noopener noreferrer'> https://www.scielo.br/j/csp/a/qXz57RSKQXGtHVkZQfZvrJc/?lang=pt</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">@TUTORIALDEQUÍMICACOMPROFESSORE. ARSÊNIO – conheça as curiosidades e aplicações desse elemento químico. YouTube, [s.d.]. Disponível em: <a href='https://www.youtube.com/shorts/FxaJ3ffiITM' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/shorts/FxaJ3ffiITM</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BISINOTI, M. C.; JARDIM, W. F. O emprego de técnicas analíticas na especiação de metais pesados e a sua importância para o estudo do ambiente. 2004. Disponível em: <a href='https://lqa.iqm.unicamp.br/cadernos/caderno2.pdf' target='_blank' rel='noopener noreferrer'>https://lqa.iqm.unicamp.br/cadernos/caderno2.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Guia de Vigilância em Saúde: intoxicação exógena. Brasília: Ministério da Saúde, [s.d.]. p. 1065–1077. Disponível em: <a href='https://www.cevs.rs.gov.br/upload/arquivos/202201/31102342-intoxicacao-exogena-guia-de-vigilancia-em-saude.pdf' target='_blank' rel='noopener noreferrer'>https://www.cevs.rs.gov.br/upload/arquivos/202201/31102342-intoxicacao-exogena-guia-de-vigilancia-em-saude.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Vigilância em Saúde. Departamento de Vigilância das Doenças Transmissíveis. Orientações para a notificação de intoxicações por mercúrio. Brasília: Ministério da Saúde, 2021. 14 p. Disponível em: <a href='https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/intoxicacao/orientacoes-para-a-notificacao-de-intoxicacoes-por-mercurio' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/svsa/intoxicacao/orientacoes-para-a-notificacao-de-intoxicacoes-por-mercurio</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">CARVALHO, F. M. et al. Intoxicação por chumbo e cádmio em trabalhadores de oficinas para reforma de baterias em Salvador, Brasil. Revista de Saúde Pública, v. 19, n. 5, p. 411–420, 1985.</li>

                                                    <li class="list-group-item">DUBEY, R.; VERMA, P.; KUMAR, S. Cr(III) genotoxicity and oxidative stress: an occupational health risk for leather tannery workers of South Asian developing countries. Toxicology and Industrial Health, v. 38, n. 2, p. 112–126, 2022.</li>

                                                    <li class="list-group-item">FACULDADE DE SAÚDE PÚBLICA DA USP. Exposição ao chumbo | fsp/usp | exsat #5. YouTube, 4 abr. 2019. Disponível em: <a href='https://www.youtube.com/watch?v=B9WsssVbU70' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=B9WsssVbU70</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">JARDIM, A. N. O.; CALDAS, E. D. Exposição humana a substâncias químicas potencialmente tóxicas na dieta e os riscos para saúde: revisão. Química Nova, v. 32, n. 7, p. 1898–1909, 2009.</li>

                                                    <li class="list-group-item">KHOURY, E. D. T. et al. Manifestações neurológicas em ribeirinhos de áreas expostas ao mercúrio na Amazônia brasileira. Cadernos de Saúde Pública, v. 29, n. 11, p. 2191–2202, 2013. DOI: 10.1590/0102-311X00158012.</li>

                                                    <li class="list-group-item">MANZINI, F. F.; SÁ, K. B.; PLICAS, L. M. A. Metais pesados: fonte e ação toxicológica. Boletim de Tecnologia e Desenvolvimento de Embalagens, v. 1, p. 1–5, 1996.</li>

                                                    <li class="list-group-item">MANZINI, F. F.; SÁ, K. B.; PLICAS, L. M. A. Metais pesados: fonte e ação toxicológica. Fórum Ambiental da Alta Paulista, v. 6, p. 800–815, 2010.</li>

                                                    <li class="list-group-item">METRÓPOLES. Estudo da USP encontra chumbo no leite humano: entenda. YouTube, 24 set. 2024. Disponível em: <a href='https://www.youtube.com/watch?v=xlxDnK-3N7o' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=xlxDnK-3N7o</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">MOREIRA, F. A. et al. Determinação dos níveis de exposição de metais em trabalhadores da construção naval: impactos e desafios. Revista Brasileira de Medicina do Trabalho, v. 15, n. 3, p. 147–154, 2017.</li>

                                                    <li class="list-group-item">MOREIRA, F. R.; MOREIRA, J. C. A importância da análise de especiação do chumbo em plasma para a avaliação dos riscos à saúde. Química Nova, v. 27, n. 2, p. 179–184, 2004.</li>

                                                    <li class="list-group-item">MUNIZ, D. H. F.; OLIVEIRA-FILHO, E. C. Metais pesados provenientes de rejeitos de mineração e seus efeitos sobre a saúde e o meio ambiente. Universitas: Ciências da Saúde, v. 4, n. 1/2, p. 83–100, 2006.</li>

                                                    <li class="list-group-item">PROFESSOR POLÍMEROS 2025. Cádmio: o metal que ameaça sua saúde?! YouTube, [s.d.]. Disponível em: <a href='https://www.youtube.com/shorts/BUYL1EybKSc' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/shorts/BUYL1EybKSc</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">REINALDO, M. A. Cromo: intoxicações por metais pesados. YouTube, [s.d.]. Disponível em: <a href='https://www.youtube.com/watch?v=lWPqgHmY35c' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=lWPqgHmY35c</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">SCHIFER, T. S.; BOGUSZ JUNIOR, S.; MONTANO, M. A. E. Aspectos toxicológicos do chumbo. Infarma, v. 17, n. 5/6, p. 31–39, 2005.</li>

                                                    <li class="list-group-item">TAVARES, T. M.; CARVALHO, F. M. Avaliação de exposição de populações humanas a metais pesados no ambiente: exemplos do Recôncavo Baiano. Química Nova, v. 15, n. 2, p. 147–154, 1992.</li>

                                                    <li class="list-group-item">TEIXEIRA, D. C. <em>et al</em>. Exposição a contaminantes ambientais inorgânicos e danos à saúde humana. Brazilian Journal of Health Review, v. 3, n. 4, p. 10353–10369, 2020.</li>

                                                    <li class="list-group-item">TOMITA, N. E.; PADULA, N. A. M. R. Intoxicação por chumbo em crianças e o discurso da imprensa. Ciência & Saúde Coletiva, v. 10, supl., p. 67–75, 2005. DOI: 10.1590/S1413-81232005000500014.</li>

                                                    <li class="list-group-item">TV PUC-RIO. Química e Fiocruz analisaram contaminação por mercúrio. YouTube, 27 mar. 2023. Disponível em: <a href='https://www.youtube.com/watch?v=KeEZbO7SrhI' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=KeEZbO7SrhI</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">UNIMED GOIÂNIA. Arsênio. YouTube, 2 jun. 2021. Disponível em: <a href='https://www.youtube.com/watch?v=6rwnCimhke8' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=6rwnCimhke8</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula2" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula2">Aula 2</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula2" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula2" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">IBSI - INSTITUTO BRASILEIRO DE SAÚDE INTEGRATIVA. Como o mercúrio pode causar degeneração dos neurônios cerebrais. YouTube, 15 mai. 2020. Disponível em: <a href='https://youtu.be/FaT4QDkNahU' target='_blank' rel='noopener noreferrer'>https://youtu.be/FaT4QDkNahU</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">JORNALISMO TV CULTURA. Munduruku: condenados pelo mercúrio. YouTube, 19 abr. 2023. Disponível em: <a href='https://youtu.be/mDCayIcO5gw' target='_blank' rel='noopener noreferrer'>https://youtu.be/mDCayIcO5gw</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula3" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula3">Aula 3</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula3" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula3" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Diretrizes de vigilância e atenção à saúde de populações expostas a metais pesados. Brasília, DF: Ministério da Saúde, 2022. Disponível em: <a href='https://www.gov.br/saude/pt-br' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br</a>. Acesso em: 13 fev. 2026.</li>

                                                    <li class="list-group-item">LABORATORY SOLUTIONS FROM METTLER TOLEDO. Equilibrando o futuro - temporada 2, episódio 7. YouTube, 8 set. 2025. disponível em: <a href='https://www.youtube.com/watch?v=cg2rznwddku' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=cg2rznwddku</a>. acesso em: 11 fev. 2026.</li>

                                                    <li class="list-group-item">CADMIUM — Chemical safety and health: health impacts. world health organization (who). disponível em: <a href='https://www.who.int/teams/environment-climate-change-and-health/chemical-safety-and-health/health-impacts/chemicals/cadmium' target='_blank' rel='noopener noreferrer'>https://www.who.int/teams/environment-climate-change-and-health/chemical-safety-and-health/health-impacts/chemicals/cadmium</a>. acesso em: 11 fev. 2026.</li>

                                                    <li class="list-group-item">CNN BRASIL. Cientista explica como chumbo influenciou na evolução do cérebro humano. YouTube, 17 out. 2025. disponível em: <a href='https://www.youtube.com/watch?v=ma32dkxflew' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=ma32dkxflew</a>. acesso em: 11 fev. 2026.</li>

                                                    <li class="list-group-item">DANINBLUE. The minamata mercury disaster (mini-documentary). YouTube, 7 fev. 2024. disponível em: <a href='https://www.youtube.com/watch?v=mdtwwzkflhe' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=mdtwwzkflhe</a>. acesso em: 11 fev. 2026.</li>

                                                    <li class="list-group-item">WORLD HEALTH ORGANIZATION (WHO). Who guideline for clinical management of exposure to lead. geneva: world health organization, [s.d.]. disponível em: <a href='https://www.who.int/publications/b/60593' target='_blank' rel='noopener noreferrer'>https://www.who.int/publications/b/60593</a>. acesso em: 13 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula4" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula4">Aula 4</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula4" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula4" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Ficha de investigação de intoxicação exógena: Sistema de Informação de Agravos de Notificação – SINAN. Brasília: Ministério da Saúde, [s. d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/intoxicacao_exogena_sinan.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/intoxicacao_exogena_sinan.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Guia de investigação de surtos e epidemias. Brasília: Ministério da Saúde, [s. d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/guia_investigacao_surtos_epidemias.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/guia_investigacao_surtos_epidemias.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Lista completa das doenças e agravos de notificação obrigatória. Portal SINAN. Disponível em: <a href='https://portalsinan.saude.gov.br/doencas-e-agravos?showall=1&limitstart=' target='_blank' rel='noopener noreferrer'>https://portalsinan.saude.gov.br/doencas-e-agravos?showall=1&limitstart=</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Sistemas de informação em saúde no Brasil: contextos históricos. Brasília: Ministério da Saúde, [s. d.]. Disponível em: <a href='https://bvsms.saude.gov.br/bvs/publicacoes/sistemas_informacao_atencao_saude_contextos_historicos.pdf' target='_blank' rel='noopener noreferrer'>https://bvsms.saude.gov.br/bvs/publicacoes/sistemas_informacao_atencao_saude_contextos_historicos.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">ORGANIZAÇÃO MUNDIAL DA SAÚDE (OMS). Fluxo da informação em saúde. Infográfico. [s. l.]: OMS, 2017. Disponível em: <a href='https://www.afro.who.int/sites/default/files/2017-06/AHO_Country_H_Infos_Systems_2nd_edition.pdf' target='_blank' rel='noopener noreferrer'>https://www.afro.who.int/sites/default/files/2017-06/AHO_Country_H_Infos_Systems_2nd_edition.pdf</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">VIDEOSAÚDE DISTRIBUIDORA DA FIOCRUZ. Ep. 01 – Webinário CEE/Fiocruz: A Vigilância Epidemiológica no SUS. YouTube, 23 jul. 2024. Disponível em: <a href='https://www.youtube.com/watch?v=MR2Te6GnE1w' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=MR2Te6GnE1w</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula5" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula5">Aula 5</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula5" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula5" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">BRASIL. Falta de áreas verdes aumenta exposição a metais pesados em recém-nascidos, aponta pesquisa. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/noticias/2024/setembro/falta-de-areas-verdes-aumenta-exposicao-a-metais-pesados-em-recem-nascidos-aponta-pesquisa' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/assuntos/noticias/2024/setembro/falta-de-areas-verdes-aumenta-exposicao-a-metais-pesados-em-recem-nascidos-aponta-pesquisa</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Combate à desinformação na área da saúde: uma luta de todos. Disponível em: <a href='https://www.gov.br/saude/pt-br/assuntos/saude-com-ciencia/noticias/2024/maio/combate-a-desinformacao-na-area-da-saude-uma-luta-de-todos' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/assuntos/saude-com-ciencia/noticias/2024/maio/combate-a-desinformacao-na-area-da-saude-uma-luta-de-todos</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">BRASIL. Ministério da Saúde. Secretaria de Atenção Primária à Saúde (SAPS). Populações em situação de vulnerabilidade e desigualdade social. Disponível em: <a href='https://www.gov.br/saude/pt-br/composicao/saps/equidade/o-que-e-equidade/populacoes-em-situacao-de-vulnerabilidade-e-desigualdade-social' target='_blank' rel='noopener noreferrer'>https://www.gov.br/saude/pt-br/composicao/saps/equidade/o-que-e-equidade/populacoes-em-situacao-de-vulnerabilidade-e-desigualdade-social</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">CARVALHO, L. V. B. de <em>et al</em>. Exposição ocupacional a substâncias químicas, fatores e saúde do trabalhador: uma visão integrada. Saúde em Debate, v. 41, n. spe2, p. 313–326, 2017.</li>

                                                    <li class="list-group-item">DÁSKALOS. Você sabe o que foi o desastre de Minamata – ENEM 2022. YouTube, 13 set. 2022. Disponível em: <a href='https://www.youtube.com/watch?v=OLVFxwHWuE0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=OLVFxwHWuE0</a>. Acesso em: 25 set. 2025.</li>

                                                    <li class="list-group-item">FIORATI, R. C.; ELUI, V. M. Determinantes sociais da saúde, iniquidades e inclusão social entre pessoas com deficiência. Revista Latino-Americana de Enfermagem, v. 23, n. 2, p. 329–336, 2015.</li>

                                                    <li class="list-group-item">FIOCRUZ. Pesquisa mostra que população de Brumadinho tem alta exposição a metais pesados. 2022. Disponível em: <a href='https://fiocruz.br/noticia/2022/07/pesquisa-mostra-que-populacao-de-brumadinho-tem-alta-exposicao-metais-pesados' target='_blank' rel='noopener noreferrer'>https://fiocruz.br/noticia/2022/07/pesquisa-mostra-que-populacao-de-brumadinho-tem-alta-exposicao-metais-pesados</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">FRANZOSO, C. Desastre de Minamata. YouTube, 1 abr. 2014. Disponível em: <a href='https://www.youtube.com/watch?v=_zMG0MsyIQ0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=_zMG0MsyIQ0</a>. Acesso em: 2 set. 2025.</li>

                                                    <li class="list-group-item">FUNDAÇÃO OSWALDO CRUZ (FIOCRUZ). DSSBR – Determinantes sociais da saúde: o que é. Rio de Janeiro: Fiocruz, 2025. Disponível em: <a href='https://dssbr.ensp.fiocruz.br/dss-o-que-e/' target='_blank' rel='noopener noreferrer'>https://dssbr.ensp.fiocruz.br/dss-o-que-e/</a>. Acesso em: 23 set. 2025.</li>

                                                    <li class="list-group-item">GARBOIS, J. A.; SODRÉ, F.; DALBELLO-ARAÚJO, M. Da noção de determinação social à de determinantes sociais da saúde. Saúde em Debate, v. 41, n. 112, p. 1–11, 2017.</li>

                                                    <li class="list-group-item">INSTITUTO NACIONAL DE CÂNCER (INCA). Exposição no trabalho e no ambiente. Disponível em: <a href='https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/exposicao-no-trabalho-e-no-ambiente/amianto' target='_blank' rel='noopener noreferrer'>https://www.gov.br/inca/pt-br/assuntos/causas-e-prevencao-do-cancer/exposicao-no-trabalho-e-no-ambiente/amianto</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">MENDES, F. <em>et al</em>. Armed violence in Manguinhos/RJ, Brazil: health and daily life of health and education workers. Cadernos de Saúde Pública, v. 29, n. 7, p. e04502024, jul. 2024.</li>

                                                    <li class="list-group-item">MONIZ, G. <em>et al</em>. Desigualdades em saúde: uma perspectiva global. Ciência & Saúde Coletiva, [S.l.], v. 22, n. 3, p. 737–746, 2017. Disponível em: <a href='https://www.scielo.br/j/csc/a/XLS4hCMT6k5nMQy8BJzJhHx/?format=html&lang=pt' target='_blank' rel='noopener noreferrer'>https://www.scielo.br/j/csc/a/XLS4hCMT6k5nMQy8BJzJhHx/?format=html&lang=pt</a>. Acesso em: 10 fev. 2026.</li>

                                                    <li class="list-group-item">PRECOMA, D. B. A educação como determinante social associado ao risco cardiovascular. Arquivos Brasileiros de Cardiologia, v. 117, n. 1, p. 13–14, jul. 2021.</li>

                                                    <li class="list-group-item">RIBEIRO, K. G. <em>et al</em>. Determinantes sociais da saúde dentro e fora de casa. Saúde em Debate, v. 48, n. 140, e8590, 2024.</li>

                                                    <li class="list-group-item">SANEAMENTO SALVA. Pontos de Vista: Drauzio explica as principais doenças causadas da falta de saneamento. YouTube, 19 nov. 2025. Disponível em: <a href='https://www.youtube.com/watch?v=bXRYCcmAXt0' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=bXRYCcmAXt0</a>. Acesso em: 13 fev. 2026.</li>

                                                    <li class="list-group-item">SANT’ANNA, C. F. <em>et al</em>. Determinantes sociais de saúde: características da comunidade e trabalho das enfermeiras na saúde da família. Revista Gaúcha de Enfermagem, v. 31, n. 1, p. 92–99, 2010.</li>

                                                    <li class="list-group-item">SILVA, M. A. <em>et al</em>. Saúde ambiental, determinantes sociais e vigilância à exposição de contaminantes químicos no Brasil: revisão integrativa de literatura. Aracê, v. 7, n. 1, p. 1384–1415, 2025.</li>

                                                    <li class="list-group-item">WWF-BRASIL. Especial Minamata: o que aconteceu no Japão poderia se repetir aqui? YouTube, 19 nov. 2018. Disponível em: <a href='https://www.youtube.com/watch?v=lWQO7aaqiVc' target='_blank' rel='noopener noreferrer'>https://www.youtube.com/watch?v=lWQO7aaqiVc</a>. Acesso em: 25 set. 2025.</li>

                                                    <li class="list-group-item">YANOMAMIS de nove aldeias estão contaminados por mercúrio. Disponível em: <a href='https://agenciagov.ebc.com.br/noticias/202404/yanomamis-de-nove-aldeias-assediadas-pelo-garimpo-estao-contaminados-por-mercurio' target='_blank' rel='noopener noreferrer'>https://agenciagov.ebc.com.br/noticias/202404/yanomamis-de-nove-aldeias-assediadas-pelo-garimpo-estao-contaminados-por-mercurio</a>. Acesso em: 10 fev. 2026.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h5 class="accordion-header" id="heading-m3-material-complementar-aula6">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-m3-material-complementar-aula6" aria-expanded="false" aria-controls="collapse-m3-material-complementar-aula6">Aula 6</button>
                                    </h5>
                                    <div id="collapse-m3-material-complementar-aula6" class="accordion-collapse collapse" aria-labelledby="heading-m3-material-complementar-aula6" data-bs-parent="">
                                        <div class="accordion-body">
                                            <div class="list mb-5">
                                                <ul class="list-group">
                                                    <li class="list-group-item">CARVALHO, A.; BURGESS, J. Cultural circuits of climate change in UK broadsheet newspapers, 1985–2003. Risk Analysis, Hoboken, v. 25, n. 6, p. 1457–1469, 2005. DOI: 10.1111/j.1539-6924.2005.00692.x.</li>

                                                    <li class="list-group-item">MORENO, A. R.; PERES, F. El estado del arte de la comunicación de riesgos en la región de América Latina. Revista de Comunicación y Salud, Madrid, v. 1, n. 1, p. 55–71, 2011.</li>

                                                    <li class="list-group-item">PERES, F. Biossegurança, saúde, ambiente e comunicação de riscos: um debate necessário. Ciência & Saúde Coletiva, Rio de Janeiro, v. 17, p. 294–297, 2012.</li>

                                                    <li class="list-group-item">PERES, F. <em>et al</em>. Design of risk communication strategies based on risk perception among farmers exposed to pesticides in Rio de Janeiro State, Brazil. American Journal of Industrial Medicine, Hoboken, v. 56, n. 1, p. 77–89, 2013.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Fim do Accordion Módulos -->
        </div>

    </div>
</div>
		`,
	},
};

// Get all buttons and links that have "modal" in the data-bs-toggle
const modalButtons = document.querySelectorAll('[data-toggle="modal"]');

document.addEventListener("DOMContentLoaded", function (event) {
	//do work

	modalButtons.forEach((btn) => {
		// Check if the modal exist
		const modalId = btn.getAttribute("data-target").slice(1);

		const createdModalId = document.getElementById(modalId);

		if (!createdModalId) {
			// If don't exist create one
			createModal(modalId);
		}
	});
});

function createModal(id) {
	const newModal = document.createElement("div");
	const modalLabel = id.slice(6);

	newModal.classList.add("modal", "fade");
	newModal.setAttribute("id", id);
	newModal.setAttribute("tabindex", "-1");
	newModal.setAttribute("aria-labelledby", modalLabel);
	newModal.setAttribute("aria-hidden", "true");

	newModal.innerHTML = `
		<div class="modal-dialog ${modalInfos[modalLabel].modalSize}">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="${modalInfos[modalLabel].ariaLabel}">${modalInfos[modalLabel].modalTitle}</h5>
					<button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
					${modalInfos[modalLabel].modalBody}
				</div>
				<div class="modal-footer">
					<button type="button" class="button-primary" data-dismiss="modal">Fechar</button>
				</div>
			</div>
		</div>
	`;

	document.body.appendChild(newModal);
}
