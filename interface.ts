interface IUser {
    id: number;
    name: string;
    email: string;
    isActive: boolean;

}

interface IProduct{
    id: number;
    name: string;
    price: number;
    inStock: boolean;
    categories: string[]
}

type UserRole = 'admin'|'user';

interface IAdminUser extends IUser{

    role:UserRole;
}

function imprimirDetalhesDoUsuario(usuario: IUser): void {
  console.log("--- Detalhes do Usuário ---");
  console.log(`ID: ${usuario.id}`);
  console.log(`Nome: ${usuario.name}`);
  console.log(`Email: ${usuario.email}`);
}

//Instâncias para usuário
const usuario1: IUser = {

    id: 1,
    name: "Gerson Andrade",
    email: "gersonandrade2000@gmail.com",
    isActive: true
};

const usuario2: IUser = {

    id: 2,
    name: "Amanda Gomes",
    email: "nandagomes@gmail.com",
    isActive: false
};

//Instâncias para produto
const produto1: IProduct = {
    id: 432,
    name: "Bola de Futebol",
    price: 49.99,
    inStock: true,
    categories:["Esporte", "Atividade Física", "Todas as idades","Brinquedo"]

}

const produto2: IProduct = {
    id: 259,
    name: "Cerveja Brahma 350ml",
    price: 6.29,
    inStock: false,
    categories:["Bebida", "Alcoólico", "Proibido para menore de 18 anos"]

}
//Instâncias para admin
const credencial1: IAdminUser = {
    id: 1,
    name: "Gerson Andrade",
    email: "gersonandrade2000@gmail.com",
    isActive: true,
    role: "user"
}

const credencial2: IAdminUser = {
    id: 2,
    name: "Amanda Gomes",
    email: "nandagomes@gmail.com",
    isActive: false,
    role: "admin"
}

imprimirDetalhesDoUsuario(usuario1);



//Crie uma função que receba um objeto do tipo `IUser` e imprima suas informações. Faça o mesmo para `IProduct`.