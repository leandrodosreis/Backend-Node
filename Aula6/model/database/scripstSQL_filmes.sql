#Permite criar um database
create database db_filmes_20261_b;

#Permite visualizar todos os databases existentes
show databases;

#Permite escolher um database a ser utilizado
use db_filmes_20261_b;

#Permite visualizar todas as tabelas existentes dentro do database
show tables;

create table tbl_filme (
	id 					int not null auto_increment primary key,
    nome 				varchar(80) not null,
    sinopse 			text not null,
    capa 				varchar(255) not null,
    data_lancamento 	date not null,
    duracao 			time not null,
    valor 				decimal(5,2) default 0,
    avaliacao 			decimal(3,2) default null
);

#Permite deletar uma tabela
#drop table tbl_filme;

#Permite deletar um database
#drop database db_filmes_20261_b;

#Permite inserir dados em uma tabela
insert into tbl_filme (
	nome,
    sinopse,
    capa,
    data_lancamento,
    duracao,
    valor,
    avaliacao
) values (
	'Super Mario Galaxy: O Filme',
    'Uma nova aventura leva Mario a enfrentar um inédito e ameaçador super vilão. Em Super Mario Galaxy: O Filme, o bigodudo encanador italiano e seus aliados embarcam numa aventura galáctica repleta de ação e momentos emocionantes depois de salvar o Reino dos Cogumelos.',
    'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/5bea1aeac3323aeaaf82449a34fafbbf.jpg',
    '2026-04-02',
    '01:39:00',
    '50.60',
    '3'
);

#Permite visualizar conteudos e valores adicionados a tabela
#select * from tbl_filme;

#Mostra a tabela em ordem decrscente
select * from tbl_filme order by id desc;

#Deleta tudo acima de id 0
#delete from tbl_filme where id > 0;

#Deleta o id 
delete from tbl_filme where id = 3;

#seleciona uma tabela por id
select * from tbl_filme where id = 27;

#atualiza atributos de uma tabela
update tbl_filme set
	nome = 'Filme 05',
	sinopse = 'alterei a sinopse',
	capa = 'alala',
	data_lancamento = '2026-04-29',
	duracao = '02:30:00',
	valor = '10',
	avaliacao = 2
where id = 4;