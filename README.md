# Тестовое задание: Редактор персонажей

Веб-приложение, при помощи которого пользователь может редактировать своего персонажа в абстрактной RPG-игре

## Настройка

Все последующие команды должны прописываться из корня приложения

### Production

```
$ npm i && npm i serve -g
$ npm run build
$ npx serve -s build -l 3000
```

### Production (docker)

```
$ docker build -t character-editor .
$ docker run -p 3000:3000 character-editor
```

### Dev

```
$ npm i
$ npm start
```
