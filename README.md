# Pacman vs Ghost : 2 Players Game - Backend

![Pacman VS Ghost](/pacmanvsghost.png)

Game for two players built with React and Socket.IO for educational purposes, in which you can learn about Redux-saga, React Hooks and Websocket integration.

### Installing

```bash
# Install
$ npm install

# Run
$ npm run
```

Then you have to change this value with your backend URL, the ghost timeout and the ghost size.

```bash
# src/config/index.ts

export const Config = {
  urlSocket: 'http://localhost:3002',
  ghostTime: 5000,
  ghostSize: 40,
};
```

## Built With

- [React](https://es.reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Socket.IO](https://socket.io/)
- [Redux-Saga](https://redux-saga.js.org/)

## Authors

- Carlos Santander - Full Stack Developer.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
