import styles from "@/components/CEOMessage/CEOMessage.module.css";

export default function CEOMessage() {
  return (
    <section className={styles.messageSection}>
      <div className={styles.content}>
        <p>
          変化の激しい時代の中で、私はこれまで多くの挑戦と向き合ってきました。
          そのたびに実感したのは、「人と人とのつながりが、挑戦を可能にする力になる」ということです。
        </p>
        <p>
          社名「SEA」に込めた
          <br />
          <strong>Strength（強さ）・Evolution（進化）・Action（行動）</strong>。
          <br />
          これらは、私自身が大切にしてきた価値観であり、SEAの礎となる信念でもあります。
        </p>
        <p>
          私たちは、既存の枠にとらわれず、常に新しい価値を創造する存在でありたい。
          <br />
          一人ひとりが自らの意志で舵を取り、未来へと航海を続けられるように。
          <br />
          SEAは、その航海のパートナーとして寄り添い、共に歩んでいく企業であり続けます。
        </p>
        <p>
          未来は、待つものではなく、自らの一歩で切り拓くもの。
          <br />
          私たちは、その一歩を支える力になりたいと心から願っています。
        </p>
        <p>
          これからの出会いが、また新たな航路の始まりとなることを楽しみにしています。
        </p>
        <p className={styles.signature}>
          株式会社SEA
          <br />
          代表取締役　石室屋 拓
        </p>
      </div>
    </section>
  );
}
