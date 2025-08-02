// components/PrivacyPolicy/PrivacyPolicy.tsx
import styles from "@/components/PrivacyPolicy/PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.policySection}>
      <p className={styles.intro}>
        株式会社SEA（以下、「当社」といいます。）は、当社が提供するウェブサイト（以下、「当サイト」といいます。）において取得する個人情報について、
        以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定め、適切に管理・保護いたします。
      </p>

      <div className={styles.item}>
        <h2>1. 個人情報の定義</h2>
        <p>
          本ポリシーにおける「個人情報」とは、氏名、住所、電話番号、メールアドレスなど、生存する個人を特定できる情報を指します。
        </p>
      </div>

      <div className={styles.item}>
        <h2>2. 個人情報の取得方法</h2>
        <p>
          当社は、ユーザーが当サイトの問い合わせフォーム等を利用する際に、氏名、メールアドレスなどの個人情報を取得することがあります。
          また、当サイトではCookieを使用し、アクセス情報を自動的に取得する場合があります。
        </p>
      </div>

      <div className={styles.item}>
        <h2>3. 個人情報の利用目的</h2>
        <ul>
          <li>お問い合わせへの対応</li>
          <li>サービスの提供および運営</li>
          <li>サイトの改善・品質向上のための分析</li>
          <li>ご本人確認および不正利用の防止</li>
        </ul>
      </div>

      <div className={styles.item}>
        <h2>4. 個人情報の第三者提供</h2>
        <p>
          当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供いたしません。
        </p>
      </div>

      <div className={styles.item}>
        <h2>5. 個人情報の管理</h2>
        <p>
          当社は、取得した個人情報の漏洩、滅失または毀損の防止、その他の安全管理のために、適切な措置を講じます。
        </p>
      </div>

      <div className={styles.item}>
        <h2>6. 個人情報の外部委託</h2>
        <p>
          当社は、個人情報の取扱いの一部を外部に委託することがあります。
          その際は、委託先に対して必要かつ適切な監督を行います。
        </p>
      </div>

      <div className={styles.item}>
        <h2>7. 個人情報の開示・訂正・削除等の請求</h2>
        <p>
          ご本人から個人情報の開示・訂正・削除・利用停止等を希望される場合には、下記のお問い合わせ先までご連絡ください。
          ご本人確認の上、適切に対応いたします。
        </p>
      </div>

      <div className={styles.item}>
        <h2>8. Cookie等の使用について</h2>
        <p>
          当サイトでは、Google Analyticsなどのアクセス解析ツールを利用しており、
          Cookieを通じてユーザーのアクセス情報を収集することがあります。
          収集される情報は匿名であり、個人を特定するものではありません。
          Cookieの使用を望まない場合は、ブラウザの設定で無効にすることができます。
        </p>
      </div>

      <div className={styles.item}>
        <h2>9. プライバシーポリシーの変更について</h2>
        <p>
          本ポリシーの内容は、必要に応じて予告なく変更されることがあります。
          変更後の内容は、本ページに掲載された時点で効力を生じるものとします。
        </p>
      </div>

      <div className={styles.item}>
        <h2>10. お問い合わせ窓口</h2>
        <p>
          【会社名】株式会社SEA
          <br />
          【住所】〒141-0022 東京都品川区3丁目21番6号
          <br />
          【メールアドレス】（記載を希望される場合は入力）
          <br />
          【電話番号】03-1234-567
        </p>
      </div>
    </section>
  );
}
