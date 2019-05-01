angular.module('passagem-servico').lazy

.controller( 'PassagemServicos::IndexCtrl', [ '$scModal', 'scAlert', 'scToggle', function(scModal, scAlert, scToggle) {
	var vm = this;

	vm.listCtrl = {
		list: [
			{ id: 1,
				status: { label: 'Realizada', color: 'green' },
				pessoa_saiu: { id: 1, nome: 'Porteiro 1' },
				pessoa_entrou: { id: 2, nome: 'Porteiro 2'},
				data_cadastro: 30042018,
				data_passagem: 30042018,
				perfil: { id: 1, nome: 'Perfil 1' },
				objetos: [
					{ categoria: { id: 1, label: 'Funcionamento' },
						itens: [
						 	{ qtd: 1, nome: 'teste' },
						 	{ qtd: 13, nome: 'teste2' },
						],
					},
					{ categoria: { id: 2, label: 'Acontecimento' },
						itens: [
							{ qtd: 1, nome: 'teste32' },
							{ qtd: 2, nome: 'teste223' }
						]
					}
				],
				disabled: false,
				detalhes: 'blabdsakdsabdsa',
			}
		]
	};

	vm.itemCtrl = {
		init: function(passagem){
			passagem.menu = new scToggle()
			passagem.edit = new scToggle()
			passagem.acc = new scToggle()
			passagem.notificacoes = new scToggle()
			passagem.modal = new scModal()

		}
	};

	vm.topToolBar = {
		menuIsVisible: false,

		toggle: function() {
			this.menuIsVisible = !this.menuIsVisible
		},
	}

}])