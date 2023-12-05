import Head from 'next/head'
import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <Head>
        <title>Next.js x microCMS - Tutorial</title>
      </Head>
      {/* ヘッダー　ここから */}
      <header>
        <div className={styles.header_wrapper}>
          {/* LOGOとダウンロードボタンを囲うdiv */}
          <div className={styles.logo}>
            {/* LOGOの長方形の範囲と背景色を指定するためのdiv */}
            <p>LOGO</p>
          </div>
          <div className={styles.download_btn}>
            {/* ダウンロードボタンの指定をするためのdiv */}
            <a href="">ダウンロード</a>
            {/* ダウンロードボタンは押したら何か起きそうなのでaタグにしてみた。 */}
          </div>
        </div>
      </header>
      {/* ヘッダー　ここまで */}
    </>
  )
}
