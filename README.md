# 概要
CMSツールcontentfulを使って、Nuxt.jsでブログを構築するためのスターター。

# 環境の確認
## 前提環境
- npmが使える

## versionとか
pakage.json見て
https://github.com/ttatsato/nuxt-media-starter/blob/master/package.json

# ローカルでの構築手順
おおまかな流れ
- nuxt.jsソースを用意する
- contentfulコマンドをローカルで使えるようにする。
- アクセストークンなどを発行する
- nuxt.jsとcontetfulと接続するために発行したアクセストークンなどを.contentful.jsonに書き込む


## clone
```
git clone https://github.com/ttatsato/nuxt-media-starter.git
cd nuxt-media-starter
```

## contentfulのアカウント作って
https://www.contentful.com/

## ローカルのnuxt.jsからcontentfulの記事を読み込めるようにtoken keyを設定して

参考: 公式サイト手順書
https://www.contentful.com/developers/docs/javascript/tutorials/integrate-contentful-with-vue-and-nuxt/

## contetfulコマンドを使えるようにする
```
npm install -g contentful-cli
```

## contentfulのspaceを作る

```angular2html
contentful space create --name 'SPACE-NAME'
```

## contentfulの使用するspaceを決める
contentfulの使用するspaceを決める。  

```angular2html
contentful space use
> SPACE-NAME (XXXXXXXXXX)
```

選択すると、IDが出力されるから覚えておく。

## contentfulのspaceにサンプル記事を用意する。
spaceに自分で、記事を用意してもいい。
ここでは動作確認をしたいので、ブログ用のサンプルを用意する。

```
contentful space seed --template blog  
```

## accesstokenを作成する

```angular2html
contentful space accesstoken create --name nuxt-tutorial
　　　Successfully created access token nuxt (1234567890xxxxxxxxxxx)
```
発行されたaccesstokenは忘れないように。

## .contentful.jsonにトークンを書き込む
まず、テンプレートから.contentful.jsonを作成する
```angular2html
cp .contentful.default.json .contentful.json 
```
作成した.contentful.json にトークン情報を書き込む
CTF_SPACE_IDとCTF_CDA_ACCESS_TOKENを追記する
```json
{
  "CTF_PERSON_ID": "15jwOBqpxqSAOy2eOO4S0m",
  "CTF_BLOG_POST_TYPE_ID": "blogPost",
  "CTF_SPACE_ID": "",
  "CTF_CDA_ACCESS_TOKEN": ""
}
```

## npm run devで確認
```
npm run dev
```
を実行して、ローカルに立ち上がればOK。
間違ってたらごめんね!
