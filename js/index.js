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
				observacoes: 'blabdsakdsabdsa',
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
		},

		editar: function(passagem) {
			if (passagem.edit.opened == false) {
				passagem.edit.opened = true
			} else {
				passagem.edit.opened = false
			}
		}
	};

	vm.topToolBar = {
		menuIsVisible: false,

		toggle: function() {
			this.menuIsVisible = !this.menuIsVisible
		},
	};

	vm.filtroCtrl = {
		fitroAvancado: false,

		showFilter: function(){
			this.filtroAvancado = !this.filtroAvancado
		},
	};

	vm.perfilCtrl = {
		modal: new scModal(),
		viewPerfis: false,
		viewCategorias: true,

		modalToggle: function() {
			this.modal.open()
		},

		close: function() {
			this.modal.close()
		},

		showCategorias: function() {
			if (this.viewCategorias == false && this.viewPerfis == true) {
				this.viewCategorias = true
				this.viewPerfis = false
			} else {
				this.viewCategorias = true
				this.viewPerfis = false
			}
		},

		showPerfis: function() {
			if (this.viewCategorias == true && this.viewPerfis == false) {
				this.viewPerfis = true
				this.viewCategorias = false
			} else {
				this.viewCategorias = false
				this.viewPerfis = true
			}
		},
	};

}])