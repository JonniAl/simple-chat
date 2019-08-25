# simple-chat

Для запуска чата в локальной среде неообходимо сделать следующие действия:
1. Установить все модули для работы как для сервера, так и для клиента.
```
yarn install
cd simple-chat
yarn install
```
2. Запустить клиент и сервер

Сервер запускаем, находясь в корневой папке с помощью команды:
```node server.js```

Для запуска клиента же, необходимо находиться в папке с клиентом. Это можно сделать следующим образом:
```
cd simple-chat
yarn start
```
3. Перейти на адрес - http://localhost:3000.

 Данное приложение реализует следующий функционал:
- После открытия главной страницы, пользователю будет предложено ввести имя, что зайти в чат;
- После захода, пользователь может создать новые команты в чате, а также присоединиться к уже созданным комната, используя ИМЯ комнаты в качестве адреса;
- Пользователь может отправлять сообщение в чат и другие пользователи смогу видеть его с дополнительной информацией о том, кто и когда его отправили;
- Пользователь может видеть пользователей, который находятся в комнате.
