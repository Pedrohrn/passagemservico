angular.module('passagem-servico').lazy

.controller( 'PassagemServicos::IndexCtrl', [ '$scModal', 'scAlert', 'scToggle', 'scTopMessages' , function(scModal, scAlert, scToggle, scTopMessages) {
	var vm = this;

	vm.listCtrl = {
		list: [
			{ id: 1,
				status: { label: 'Realizada', color: 'green' },
				pessoa_saiu: { id: 1, nome: 'Porteiro 1' },
				pessoa_entrou: { id: 2, nome: 'Porteiro 2'},
				data_cadastro: 30042018,
				data_passagem: 30042018,
				perfil: { id: 1, nome: 'Perfil Teste' },
				objetos: [
					{ categoria: { id: 1, label: 'Funcionamento' },
						itens: [
						 	{ qtd: 1, label: 'teste' },
						 	{ qtd: 13, label: 'teste2' },
						],
					},
					{ categoria: { id: 2, label: 'Acontecimento' },
						itens: [
							{ qtd: 1, label: 'teste32' },
							{ qtd: 2, label: 'teste223' }
						]
					}
				],
				disabled: false,
				observacoes: 'blabdsakdsabdsa',
			}
		]
	};

	vm.novaPassagemCtrl = {
		new: false,

		newRecord: function() {
			if (this.new) {
				scAlert.open({
					title: 'Atenção!',
					messages: [
						{ msg: 'Tem certeza de que deseja fechar o formulário? Dados não salvos serão perdidos.'}
					],
					buttons: [
						{ label: 'Sim', color: 'yellow', action: function() { vm.novaPassagemCtrl.new = false } },
						{ label: 'Não', color: 'gray' }
					]
				})
			} else {
				this.new = true
			}
		},
	}

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

	vm.categoriasCtrl = {
		list: [
			{ id: 1, label: 'Funcionamento', disabled: false },
			{ id: 2, label: 'Acontecimento', disabled: false },
			{ id: 3, label: 'Empréstimos', disabled: true },
		],
		edit: false,
		novaCategoria: '',

		desativarCategoria: function(categoria) {
			title: '';
			if (categoria.disabled) {
				this.title = 'Deseja reativar a categoria?'
			} else {
				this.title = 'Deseja desativar a categoria?'
			}
			scAlert.open({
				title: this.title,
				buttons: [
				  { label: 'Sim', color: 'yellow', action: function() { categoria.disabled = !categoria.disabled } },
				  { label: 'Não', color: 'gray' }
				]
			})
		},

		editarCategoria: function(categoria) {
			if (categoria.edit) {
				scAlert.open({
					title: 'Deseja cancelar a edição?',
					buttons: [
					  { label: 'Sim', color: 'yellow', action: function() { categoria.edit = false } },
					  { label: 'Não', color: 'gray'}
					]
				})
			} else {
				categoria.edit = true
				this.novaCategoria = angular.copy(categoria.label)
			}
		}
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

		desativar: function(perfil) {
			title: '';
			if (perfil.disabled) {
				this.title = 'Deseja reativar o perfil?'
			} else {
				this.title = 'Deseja realmente desativar o perfil?'
			}
			scAlert.open({
				title: this.title,
				buttons: [
					{ label: 'Sim', color: 'yellow', action: function() { perfil.disabled = !perfil.disabled } },
					{ label: 'Não', color: 'gray' }
				]
			})
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