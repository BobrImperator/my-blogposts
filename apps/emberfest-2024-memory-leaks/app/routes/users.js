import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    return {
      users: [
        {
          id: '1',
          imageUrl: 'https://picsum.photos/id/237/200/300',
          name: 'Bob',
        },
        {
          id: '2',
          imageUrl: 'https://picsum.photos/id/238/200/300',
          name: 'Dylan',
        },
        {
          id: '3',
          imageUrl: 'https://picsum.photos/id/239/200/300',
          name: 'Alice',
        },
      ],
    };
  }
}
