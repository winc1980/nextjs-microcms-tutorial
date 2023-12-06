# React と ReactDOM API について

## 目次

- セットアップ
- プロジェクト構成の確認
- ReactDOM API
  - 記述する場所
  - クラスの指定
  - 画像を埋め込む
  - 画像の保存と呼び出し
  - ページの遷移
- コンポーネント

## セットアップ

1. リポジトリの更新
   - vscodeで前回のリポジトリを開く
   - 左下のgitの更新マークをクリックする
2. パッケージのインストール
   - windows:crtl+J, mac:⌘+J を押してパネルを開く
   - ターミナルタブで `npm install` を実行する
3. サーバーの実行
   - `npm run dev`を実行する
   - `http://localhost:3000`にアクセスする

## プロジェクト構成の確認

### ディレクトリ

- `src/`：すべてのソースファイルが格納されている
  - `pages/`：インデックスページやその他のページのファイルを格納する場所
  - `styles/`：CSSファイルを格納する場所
  - `components/`：ヘッダーやフッターなど共通のコンポーネントファイルを格納する
  - `composables/`：バックエンド側のプログラムを格納する

> これらの構成はnext公式のProject Structureに準拠しています。

### ファイル

- `src/`
  - `index.tsx`：ページのトップ
- `styles/`
  - `globals.css`：ページ全体に適用されるスタイルファイル。デフォルトでtailwindcssが読み込まれている。
- `composables`
  - `microcms.ts`：microCMSのAPI

## ReactDOM API

- Reactで書かれているHTMLは厳密にはHTMLではなく、ReactDOMです。
- `<p>`, `<h1>`, `<div>`これらはすべてJavaScriptで管理されているコンポーネントです。
- HTMLと書き方が異なる部分がありますので注意してください。

### 記述する場所

- `return(<>ここ</>)`の中にReactDOMを書いていきます。
- `<></>`は「まとめる」という役割があり、1つの親要素としてまとめることができます。（※1つにまとめないとエラーが発生します）

```ts
export default function Home({}) {
  return (
    <>
      {/* ここに記述する */}
    </>
  )
}
```

### クラスの指定

- クラス指定では、`class`ではなく、`className`を使います。
- `className`を設定してみましょう。

```html
<div className="{styles.fv_gray_wrapper}"></div>
```

### 画像の保存と呼び出し

- next.jsでは`public/`内にリソースを入れることがルールです。
- 画像は`public/images/`の配下に保存します。
- `public/`内のリソースファイルのパスは`/***`です。
- 画像を読み込む場合は、`/images/spacecat.jpg`となります。

### ページ遷移

- `<a>`ではなく`Link`コンポーネントを使います。
- `index.tsx`にLinkコンポーネントを読み込み、`</h1>`の下に以下のようにコードを追加してみましょう。

```ts
// Linkコンポーネントの呼び出し
import Link from 'next/link'
```

```html
<Link href="/about">ダウンロード</Link>
```

- 遷移してもページがリロードされていないことに気づきましたか？

## Components（コンポーネント）

- コンポーネントとは

  - Reactで画面に表示される部品のことで、表示に必要なデータや処理などを1つのオブジェクトにまとめたものです。
  - 画面に表示するための部品を作ることによって、いつでも簡単に組み込むことで部品を再利用することができます。

- どんな時に使うか？
  - ヘッダーやフッターなど共通する部分はコンポーネントとして管理します。

<img width="50%" src="https://yoheiko.com/wp-content/uploads/2021/02/image-2.png" />

- コンポーネントファイルは`src/components/`内に格納します。
- `src/components/Header.tsx`を開いてみましょう。
- ヘッダーを追加してみましょう。

```tsx
import Header from '@/components/Header'
```

```tsx
<Header />
```

## Composables（コンポーザブル）

- コンポーザブルは、フロント側のロジックを作るときに使われるJavaScriptのプログラム群のことです。
- 例えば
  - 入力フォームの検証を行ったり
  - ログインロジックをつけたり
  - microCMSとのやりとりも
  - コンポーザブルとして管理します。
- `src/composables`内をみてみましょう。
- `microcms.ts`があります。このファイルは記事を取得するロジックが組まれているのでコンポーザブルで管理します。

## CSSモジュールの書き方

- ReactではCSS Moduleを使うことができます
- メリット
  - 独立したCSS
  - クラス名自動生成により名前の重複がない
- 書き方

```css
.header {
  /* プロパティ */
}
```

- 書けない書き方

```css
header {
}
```
