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
- `index.tsx`にstylesオブジェクトを読み込み、`className`を設定してみましょう。

```ts
// スタイルオブジェクトの呼び出し
import styles from './index.module.css'
```

```html
<h1 className="{styles.title}">Welcome! Next.js x microCMS</h1>
```

### 画像を埋め込む

- `<img>`ではなく`Image`コンポーネントを使います。
- Imageコンポーネントでは`src`, `width`, `height`, `alt` プロパティの指定が必須です。
- 元画像のアスペクト比を維持する場合は、`style={{height: 'auto'}}`を指定してください。
- `index.tsx`にImageコンポーネントを読み込み、`~</main>`の下に以下のようにコードを追加してみましょう。

```ts
// Imageコンポーネントの呼び出し
import Image from 'next/image'
```

```html
<Image
  src="/images/spacecat.jpg"
  width={500}
  height={500}
  style={{ height: 'auto' }}
  alt="space cat"
/>
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
<Link href="/about">About page</Link>
```

- 遷移してもページがリロードされていないことに気づきましたか？
