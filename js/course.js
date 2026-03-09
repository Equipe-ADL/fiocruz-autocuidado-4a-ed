const course = {
	title: "Autocuidado em Saúde e a Literacia para a promoção da saúde e a prevenção de doenças crônicas na Atenção Primária à Saúde.",
	modules: [
		{
			type: "accordion",
			title: "Módulo 1: A promoção da saúde, a salutogênese e a Literacia para a Saúde (LS)",
			items: [
				// { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo1/apresentacao.html" },
				{
					type: "accordion",
					title: "Aula 1 | Promoção da saúde: um conceito em construção",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo1/aula1/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Afinal, o que é saúde?", path: "/modulo1/aula1/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Promoção da saúde no Brasil", path: "/modulo1/aula1/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Determinantes sociais e Atenção Primária à Saúde", path: "/modulo1/aula1/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo1/aula1/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m1a1", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 2 | Reflexões sobre a salutogênese no contexto da Atenção Primária à Saúde",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo1/aula2/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Paradigma salutogênico de saúde", path: "/modulo1/aula2/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: O conceito do senso de coerência (SCO)", path: "/modulo1/aula2/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: A aplicação da salutogênese na APS e a Literacia para Saúde (LS)", path: "/modulo1/aula2/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo1/aula2/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m1a2", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 3 | Literacia para a Saúde: concepção e perspectivas para promover saúde",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo1/aula3/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Literacia para a Saúde: concepção e perspectivas para promover saúde", path: "/modulo1/aula3/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Compreendendo o termo - Literacia para a Saúde (LS)", path: "/modulo1/aula3/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: A LS como alicerce para a promoção da saúde e do autocuidado em saúde", path: "/modulo1/aula3/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo1/aula3/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m1a3", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{ type: "link", icon: "closing", title: "Encerramento do Módulo 1", path: "/modulo1/encerramento.html" },
				{ type: "link", icon: "activity", title: "Atividades", path: "/modulo1/atividades.html" },
			],
		},

		{
			type: "accordion",
			title: "Módulo 2: Cuidado, autocuidado e a literacia para a promoção da saúde e a prevenção de doenças na APS",
			items: [
				// { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo2/apresentacao.html" },
				{
					type: "accordion",
					title: "Aula 1 | Promoção da saúde e prevenção de doenças: aspectos conceituais, políticas e ações na APS",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo2/aula1/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Compreendendo a saúde", path: "/modulo2/aula1/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: A promoção da saúde", path: "/modulo2/aula1/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Prevenção de doenças e enfrentamento de doenças crônicas não transmissíveis (DCNT)", path: "/modulo2/aula1/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo2/aula1/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m2a1", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 2 | O cuidado e o autocuidado no contexto da promoção da saúde e prevenção de doenças",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo2/aula2/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Promoção da saúde e prevenção de doenças", path: "/modulo2/aula2/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Cuidado, autocuidado e autocuidado apoiado como estratégias para promoção da saúde", path: "/modulo2/aula2/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Cuidado, autocuidado e autocuidado apoiado como estratégias para prevenção de condições de saúde, doenças ou agravos", path: "/modulo2/aula2/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo2/aula2/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m2a2", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 3 | O cuidado e o autocuidado na APS: espaço para a ampliação dos níveis de LS",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo2/aula3/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: A APS e o cuidado dos profissionais de saúde", path: "/modulo2/aula3/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: O cuidado centrado na pessoa e a LS", path: "/modulo2/aula3/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: O cuidado centrado na pessoa, o autocuidado da pessoa em condição crônica de saúde e a LS na APS", path: "/modulo2/aula3/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo2/aula3/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m2a3", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{ type: "link", icon: "closing", title: "Encerramento do Módulo 2", path: "/modulo2/encerramento.html" },
				{ type: "link", icon: "activity", title: "Atividades", path: "/modulo2/atividades.html" },
			],
		},
		{
			type: "accordion",
			title: "Módulo 3: Intervenções para equipes e sistemas de saúde nas práticas de LS",
			items: [
				// { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo3/apresentacao.html" },
				{
					type: "accordion",
					title: "Aula 1 | A Literacia para a Saúde no cotidiano da Atenção Primária à Saúde",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo3/aula1/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Importância da Literacia para a Saúde", path: "/modulo3/aula1/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Atenção Primária à Saúde, Literacia para a Saúde e a Promoção da Saúde", path: "/modulo3/aula1/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Os desafios da salutogênese", path: "/modulo3/aula1/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Ações para auxiliar a população na adoção de comportamentos saudáveis e na adesão do tratamento", path: "/modulo3/aula1/topico4.html" },
						{ type: "link", icon: "lesson", title: "Tópico 5: Considerações finais", path: "/modulo3/aula1/topico5.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m3a1", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 2 | Boas práticas de LS em contextos específicos e nos ciclos da vida",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo3/aula2/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Literacia para a Saúde no cenário brasileiro", path: "/modulo3/aula2/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Boas práticas em Literacia para a Saúde", path: "/modulo3/aula2/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Considerações finais", path: "/modulo3/aula2/topico3.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m3a2", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 3 | A educação em saúde e a educação popular em saúde como estratégias para a assistência à saúde na APS",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo3/aula3/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Promoção da educação na saúde", path: "/modulo3/aula3/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Educação popular como pedagogia", path: "/modulo3/aula3/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Programação das ações educativas e as DCNT", path: "/modulo3/aula3/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo3/aula3/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m3a3", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{ type: "link", icon: "closing", title: "Encerramento do Módulo 3", path: "/modulo3/encerramento.html" },
				{ type: "link", icon: "activity", title: "Atividades", path: "/modulo3/atividades.html" },
			],
		},
		{
			type: "accordion",
			title: "Módulo 4: Ferramentas no cotidiano do trabalho das equipes da APS",
			items: [
				// { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo4/apresentacao.html" },
				{
					type: "accordion",
					title: "Aula 1 | A comunicação em saúde e estratégias para melhoria na APS",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo4/aula1/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Conceito de comunicação", path: "/modulo4/aula1/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Objetivos da comunicação em saúde", path: "/modulo4/aula1/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Estratégias de comunicação na APS e a Literacia para a Saúde", path: "/modulo4/aula1/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo4/aula1/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m4a1", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 2 | As mídias e a tecnologia de informação em saúde",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo4/aula2/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Saúde Digital (eHealth): as TICs na saúde", path: "/modulo4/aula2/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Mídia, Literacia e Saúde", path: "/modulo4/aula2/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Internet e Saúde", path: "/modulo4/aula2/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Desinformação e 'Fake News'", path: "/modulo4/aula2/topico4.html" },
						{ type: "link", icon: "lesson", title: "Tópico 5: Considerações finais", path: "/modulo4/aula2/topico5.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m4a2", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 3 | A Literacia Digital em Saúde como competência para promover saúde na APS",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo4/aula3/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: A Literacia Digital e a Literacia Digital em Saúde", path: "/modulo4/aula3/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: A Literacia Digital em Saúde como uma competência para ampliar os níveis de LS", path: "/modulo4/aula3/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Estratégias de ação para aumentar os níveis de LS por meio da Literacia Digital em Saúde", path: "/modulo4/aula3/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: A Literacia Digital em Saúde e sua contribuição para a ampliação da LS na APS", path: "/modulo4/aula3/topico4.html" },
						{ type: "link", icon: "lesson", title: "Tópico 5: Considerações finais", path: "/modulo4/aula3/topico5.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m4a3", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{ type: "link", icon: "closing", title: "Encerramento do Módulo 4", path: "/modulo4/encerramento.html" },
				{ type: "link", icon: "activity", title: "Atividades", path: "/modulo4/atividades.html" },
			],
		},
		{
			type: "accordion",
			title: "Módulo 5: Autocuidado em saúde na APS: ações para promoção da saúde e qualidadede de vida",
			items: [
				// { type: "link", icon: "welcome", title: "Boas-vindas ao módulo", path: "/modulo5/apresentacao.html" },
				{
					type: "accordion",
					title: "Aula 1 | Autocuidado no âmbito pessoal",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo5/aula1/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Ações de autocuidado na APS", path: "/modulo5/aula1/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Elementos que favorecem a adoção e/ou manutenção de hábitos saudáveis na APS", path: "/modulo5/aula1/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Gestão e investimento em ações de autocuidado", path: "/modulo5/aula1/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Considerações finais", path: "/modulo5/aula1/topico4.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m5a1", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 2 | Autocuidado no âmbito profissional",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo5/aula2/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Motivação da escolha profissional", path: "/modulo5/aula2/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Motivação pelo local de trabalho", path: "/modulo5/aula2/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Relacionamento interprofissional", path: "/modulo5/aula2/topico3.html" },
						{ type: "link", icon: "lesson", title: "Tópico 4: Comunicação em saúde e na saúde", path: "/modulo5/aula2/topico4.html" },
						{ type: "link", icon: "lesson", title: "Tópico 5: Considerações finais", path: "/modulo5/aula2/topico5.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m5a2", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{
					type: "accordion",
					title: "Aula 3 | Relacionamentos e qualidade de vida",
					items: [
						{ type: "link", icon: "lesson", title: "Introdução", path: "/modulo5/aula3/introducao.html" },
						{ type: "link", icon: "lesson", title: "Tópico 1: Qualidade de vida para o profissional da saúde", path: "/modulo5/aula3/topico1.html" },
						{ type: "link", icon: "lesson", title: "Tópico 2: Relacionamentos e qualidade de vida: família, espiritualidade, vida social, criatividade, <em>hobby</em> e lazer", path: "/modulo5/aula3/topico2.html" },
						{ type: "link", icon: "lesson", title: "Tópico 3: Considerações finais", path: "/modulo5/aula3/topico3.html" },
						{
							type: "modal",
							icon: "autor",
							title: "Sobre o(a) autor(a)",
							modal: {
								id: "modal-sobre-autor-m5a3", //este id tem que ser o mesmo em modal-content/modal-sidebar.html
								title: "Sobre o(a) autor(a)",
								size: "lg",
								footer: "Fechar", //texto do botão, se não tiver deixar em branco
								lazy: true,
							},
						},
					],
				},
				{ type: "link", icon: "closing", title: "Encerramento do Módulo 5", path: "/modulo5/encerramento.html" },
				{ type: "link", icon: "activity", title: "Atividades", path: "/modulo5/atividades.html" },
			],
		},
		// {
		// 	type: "modal",
		// 	icon: "autor",
		// 	title: "Título do item",
		// 	modal: {
		// 		id: "modal-promocao-saude",
		// 		title: "Título do modal",
		// 		size: "lg",
		// 		footer: "Fechar", //texto do botão, se não tiver deixar em branco
		// 		lazy: true,
		// 	},
		// },
	],
};
