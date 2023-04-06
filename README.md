# AC_URL_Project


## Screenshot
![screenshot]()


## Introduction
Node.js, Express, handlebars, mongoDB, mongoose, CRUD

## Features

1. 你可點擊餐廳來查看更多資訊
2. 可以使用餐廳名稱或是料理類型來搜尋餐廳
3. 餐廳地址連結到 Google 地圖
4. 新增餐廳功能
5. 編輯餐廳功能
6. 刪除餐廳功能

## Prerequisites
 
- Runtime: node @ 14.16.0
- Framework: express @ 4.18.2
- Template Engine: express-handlebars @ 3.1.0
- Database: MongoDB & mongoose @ 5.9.7
- Check package.json for other dependencies
      

## Installation and execution

1. Clone the project

```
git clone https://github.com/KenYuChang/Restaurant_List.git
```

2. Install the required dependencies

```
npm install
```

3. Install nodemon

```
npm i nodemon
```

4. Run seeder

```
npm run seed
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫，按下 ctrl + c 結束執行

> MongpDB is connect!
>
> Done

5. Start the server

```
npm run dev
```

6. Execute successfully if seeing following message

```
Express is listening on localhost:3000
MongpDB is connect!
```
