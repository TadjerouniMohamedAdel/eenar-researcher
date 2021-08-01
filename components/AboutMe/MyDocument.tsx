import { Page, PDFDownloadLink, Text, Image, Font, View, Document, StyleSheet } from '@react-pdf/renderer';
import { NotDefineYet } from '../../utils/types/types';

/** registe fnt arabic for pdf */
Font.register({ family: 'arb', src: '//db.onlinewebfonts.com/t/eb685f5dc6b663497f7d5d4aa4a6c13d.ttf' });


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  section: {
    fontFamily: 'arb',
    width: "100%",
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 130,
    height: 50,
  },
  title: {
    fontWeight: 800,
    fontSize: 14,
    marginTop: 20
  },
  inProgress: {
    width: 390,
    height: 400,
  },
  textProgress: {
    fontSize: 14
  }
});

// Create Resume Component
const MyDocument = ({ user }: NotDefineYet) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image src="/images/logo-complete.png" style={styles.logo} />
        <Text style={styles.title}>{user.lastname} {user.firstname} السيرة الذاتية ل</Text>
      </View>
      <View style={styles.section}>
        <Image src="/images/in-progress.png" style={styles.inProgress} />
        <Text style={styles.textProgress}>في قيد الإنجاز</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument