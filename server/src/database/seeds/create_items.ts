import Knex from 'knex';

export async function seed(knex: Knex) {
   await knex('items').insert([
        { title: 'Alimentos',             image: 'alimentos.svg'},
        { title: 'Roupas',                image: 'roupas.svg'},
        { title: 'Remédios',              image: 'remedios.svg'},
        { title: 'Higiene',               image: 'higiene.svg'},
        { title: 'Livros',                image: 'livros.svg'},
        { title: 'Brinquedos',            image: 'brinquedos.svg'},
    ]);
}