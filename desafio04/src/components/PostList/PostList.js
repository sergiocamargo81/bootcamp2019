import React, { Component } from 'react';

import './PostList.css';

import Post from '../Post/Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          id: 1,
          name: "Júlio Alcantara"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              id: 2,
              name: "Diego Fernandes"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando videos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          ,}
        ],
      },
      {
        id: 2,
        author: {
          id: 3,
          name: "Gabriel Lisboa"
        },
        date: "04 Jul 2019",
        content: "Fala galera, beleza? Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 2,
            author: {
              id: 4,
              name: "Clara Lisboa"
            },
            content: "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 3,
            author: {
              id: 5,
              name: "Cézar Toledo"
            },
            content: "Que maaaaasa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!",
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="post-list"> 
        {this.state.posts.map(p => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    );
  }
}

export default PostList;