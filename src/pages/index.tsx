import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './index.module.css'

// ダッシュボードから取得されるオブジェクトの型を定義

/* index.tsxはホームページとして表示されます。 */
export default function Home({}) {
  return (
    <>
      <Header />
      <main>
        <div>
          <div className={styles.fv_gray_wrapper}>
            {/* 背景がグレーの部屋を作る */}
            <div className={styles.container}>
              {/* コンテンツ幅を設定。コンテンツ幅について→ https://diytech.website/advantage-of-container/ */}
              <h1>{'title'}</h1>
              <h2 className={styles.fv_h2}>{'subtitle'}</h2>
              <div className={styles.big_btn} style={{ marginTop: '30px' }}>
                {/* でかいダウンロードボタンにbig_btnをいうクラス名を付与。 */}
                <Link href="/about">ダウンロード</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.main_contents}>
          {/* このセクションにもid名を付与しました。以下のセクションも同様。 */}
          <div className={styles.container}>
            {/* containerは使い回すのが一般的です。 */}
            <h2>タイトルテキスト Heading 2</h2>
            <div className={styles.flex_wrapper}>
              {/* 画像と文章を囲うためのdiv */}
              <img src={'url'} alt="" />
              <p>
                2カラムのテキスト。
                <br />
                複素数体であれば、任意のCM-タイプのAは、実際、数体である定義体（英語版）(fieldofdefinition)を持つ。自己準同型環の可能なタイプは、対合（ロサチの対合（英語版）(Rosatiinvolution）をもつ環として既に分類される。
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bottom_contents}>
          <div className={styles.bottom_contents_gray_wrapper}>
            {/* さっき作ったグレーの背景の部屋を使う */}
            <div className={styles.container}>
              <h2>タイトルテキスト Heading 2</h2>
              <p>
                ダミーテキスト。ダミーテキスト。ダミーテキスト。ダミーテキスト。
              </p>
              <h3>今すぐダウンロード！</h3>
              <div className={styles.big_btn}>
                <a href="">ダウンロード</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

// getStaticPropsはビルドされる時に1度だけ実行される
// ! ビルド時にmicroCMSから情報をすべて取得しHTMLを生成しておく
// ! ビルド後はmicroCMSにアクセスできない
export const getStaticProps = async () => {
  return {
    props: {},
  }
}
