class Cliente {
  constructor(nome, cnh, telefone) {
    this.nome = nome;
    this.cnh = cnh;
    this.telefone = telefone;
  }
}

class Veiculo {
  constructor(marca, modelo, ano, placa, diaria) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.placa = placa;
    this.diaria = diaria;
    this.disponivel = true;
  }
}

class Locacao {
  constructor(cliente, veiculo, dias) {
    this.cliente = cliente;
    this.veiculo = veiculo;
    this.dias = dias;
    this.valor = veiculo.diaria * dias;
  }
}

