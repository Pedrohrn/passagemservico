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
		list: [
			{ id: 1,
				nome: 'Perfil Teste',
				objetos: [
					{ categoria: { id: 1, label: 'Funcionamento'},
						itens: [
							{ qtd: 1, label: 'teste' },
							{ qtd: 32, label: 'ui ui'}
						]
					},
					{ categoria: { id: 2, label: 'Acontecimento'},
						itens: [
						  { qtd: 2, label: 'teste2' },
						  { qtd: 3, label: 'teste 234'}
						]
					}
				],
				disabled: true,
				permissoes: [
					{ label: 'Adicionar/Excluir objetos e itens', checked: false },
					{ label: 'Adicionar objetos e itens', checked: false },
					{ label: 'Excluir objetos e itens', checked: true },
					{ label: 'Excluir/Adicionar somente itens', checked: true },
					{ label: 'Editar nomes dos itens', checked: false },
					{ label: 'Editar quantidade dos itens', checked: false}
				]
			},
			{ id: 2,
				nome: 'Perfil Teste 2',
				objetos: [
					{ categoria: { id: 1, label: 'Funcionamento'},
						itens: [
							{ qtd: 1, label: 'testessss' },
							{ qtd: 32, label: 'uissss ui'}
						]
					},
					{ categoria: { id: 2, label: 'Acontecimento'},
						itens: [
						  { qtd: 2, label: 'teste2sss' },
						  { qtd: 3, label: 'testadase 234'}
						]
					}
				],
				disabled: false,
				permissoes: [
					{ label: 'Adicionar/Excluir objetos e itens', checked: true },
					{ label: 'Adicionar objetos e itens', checked: true },
					{ label: 'Excluir objetos e itens', checked: true },
					{ label: 'Excluir/Adicionar somente itens', checked: true },
					{ label: 'Editar nomes dos itens', checked: false },
					{ label: 'Editar quantidade dos itens', checked: false}
				]
			},
		],
		modal: new scModal(),
		viewPerfis: true,
		viewCategorias: false,

		init: function(perfil) {
			perfil.edit = new scToggle()
		},

		modalToggle: function() {
			this.modal.open()
		},

		close: function() {
			this.modal.close()
		},

		editar: function(perfil) {
			if (perfil.edit.opened) {
				return this.cancelar()
			} else {
				perfil.edit.opened = true
			}
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