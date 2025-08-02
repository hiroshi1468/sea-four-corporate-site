import styles from "@/components/CompanyProfile/CompanyProfile.module.css";
import { SEA_COMMON } from "@/consts/common/text";

const profileData = [
  { label: "会社名", value: SEA_COMMON.COMPANY_NAME },
  { label: "設立", value: "2024年4月4日" },
  { label: "代表取締役", value: SEA_COMMON.CEO_NAME },
  { label: "主要取引先銀行", value: "三菱UFJ銀行" },
  { label: "資本金", value: "1,000,000" },
];

const CompanyProfile = () => {
  return (
    <section className={styles.profileSection}>
      <table className={styles.table}>
        <tbody>
          {profileData.map((item, index) => (
            <tr key={index} className={styles.tableRow}>
              <th className={styles.tableHeader}>{item.label}</th>
              <td className={styles.tableCell}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default CompanyProfile;
