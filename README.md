
# Test Auth

## Наименование веток

При создании ветки, нужно соблюдать формат:
`<type: fix|feature|chore|refactor>/<small_description>`

1. `type` - тип задачи

   - `fix` - фикс багов
   - `feature` - новая фича
   - `chore` - работы по обновлению пакетов, конфигов, линтеров и тд...
   - `refactor` - переработка уже имеющихся фичей

2. `small_description` - небольшое описание вашей задачи

## Используемые технологии и библиотеки

### Основные зависимости:

- **React** (v18.3.1) — библиотека для создания пользовательских интерфейсов.
- **React DOM** (v18.3.1) — пакет для работы с DOM-деревом в React-приложениях.
- **React Router DOM** (v6.26.0) — библиотека для маршрутизации в React.
- **Redux Toolkit** (v2.2.7) — упрощенный инструмент для работы с Redux.
- **React Redux** (v9.1.2) — официальные биндинги для работы с Redux в React.
- **Mantine Core** (v7.11.2) — библиотека компонентов для React.
- **Mantine Form** (v7.12.0) — библиотека для работы с формами.
- **Mantine Hooks** (v7.11.2) — коллекция полезных хуков для React.
- **Mantine Notifications** (v7.12.0) — библиотека для отображения уведомлений.
- **Axios** (v1.7.3) — HTTP клиент для выполнения запросов к серверу.

### Инструменты разработки (DevDependencies):

- **TypeScript** (v5.2.2) — язык программирования, расширяющий возможности JavaScript.
- **ESLint** (v8.57.0) — инструмент для анализа кода на предмет ошибок и несоответствия стилю.
- **TypeScript ESLint** — пакет для интеграции ESLint с TypeScript.
- **Vite** (v5.3.4) — быстрый и современный инструмент для сборки проектов.
- **Vite React Plugin** (v4.3.1) — плагин для интеграции React с Vite.
- **PostCSS** (v8.4.40) — инструмент для обработки CSS.
- **PostCSS Preset Mantine** (v1.17.0) — плагин для интеграции PostCSS с Mantine.
- **Vite Tsconfig Paths** (v4.3.2) — плагин для работы с путями из `tsconfig.json`.

## Установка и запуск проекта

Следуйте этим шагам для установки зависимостей и запуска проекта на локальном сервере.

### 1. Клонирование репозитория

Склонируйте репозиторий на ваш локальный компьютер с помощью команды:

```bash
git clone https://github.com/ваш-репозиторий/test-auth.git
cd test-auth
```
### 2. Установка зависимостей
Используйте пакетный менеджер npm или yarn для установки зависимостей:

npm
```bash
npm install
```
yarn
```bash
yarn install
```
### 3. Запуск локального сервера
Для запуска проекта на локальном сервере используйте команду:

npm
```bash
npm run dev
```
yarn
```bash
yarn dev
```
После выполнения команды, локальный сервер будет запущен, и приложение станет доступным по адресу `http://localhost:5173` (по умолчанию).

### 4. Сборка проекта для продакшена
Чтобы собрать проект для продакшена, выполните команду:

npm
```bash
npm run build
```
yarn
```bash
yarn build
```
### 5. Запуск проекта с использованием Docker

Для запуска проекта в Docker-контейнере выполните следующие шаги:

#### Создание Docker image

Перейдите в директорию с проектом и выполните команду:

```bash
docker build -t test-auth .
```

#### Запуск Docker-контейнера

Запустите контейнер с помощью команды:

```bash
docker run -d -p 5000:80 test-auth
```

После выполнения команды, приложение будет доступно по адресу `http://localhost:5000`.

### Структура проекта

src/ — основная директория с исходным кодом приложения.
public/ — статические файлы, которые будут обслуживаться сервером.
dist/ — директория для готовой сборки проекта (после выполнения команды build).
