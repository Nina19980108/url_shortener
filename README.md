# URL Shortener

一個使用 Node.js + Express 打造的縮短網址網站，並透過 mongodb 資料庫取得資料。
可以在首頁輸入網址，並得到縮短的網址，可以直接按複製按鈕複製網址。

## 專案畫面

![image](https://raw.githubusercontent.com/Nina19980108/url_shortener/master/public/mainPage.png)

## 歡迎使用 HEROKU 測試網頁

https://floating-plains-42705.herokuapp.com/

## Features - 產品功能

1. 使用者可以輸入任一網址，並得到一組縮短後的網址。
2. 使用者可以點按 copy 按鈕複製網址。
3. 使用者可以透過縮短網址進入原本輸入的位置網站。

## Environment SetUp - 環境建置

1. [MongoDB v4.0 以上](https://www.mongodb.com/download-center/community)
2. [Node.js](https://nodejs.org/en/)

## Installing - 專案安裝流程

1. 打開你的 terminal，Clone 此專案至本機電腦

```
git clone https://github.com/Nina19980108/url_shortener.git
```

2. 開啟終端機(Terminal)，進入存放此專案的資料夾

```
cd url-shortener
```

3. 安裝 npm 套件

```
在 Terminal 輸入 npm install 指令
```

4. 安裝 nodemon 套件

```
在 Terminal 輸入 nodemon app.js 指令
```

5. 匯入種子檔案

```
執行 npm run seed
```

當 terminal 出現以下字樣，即表示種子資料已新增至資料庫。

```
mongodb connected!
done!
```

6. 啟動伺服器，執行 app.js 檔案

```
nodemon app.js
```

7. 當 terminal 出現以下字樣，表示伺服器與資料庫已啟動並成功連結

```
App is listening on http://localhost:3000
```

## Contributor - 專案開發人員

> [Nina Liu](https://github.com/Nina19980108)