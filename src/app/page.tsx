import { 
  Banner, 
  Contacts, 
  Footer, 
  Gallery, 
  Header, 
  Philosophy, 
  Price, 
  Sales
} from "@/components";

import st from './page.module.scss';

export default function Home() {
  return (
    <main className={st.main}>
      <Header />
      <Banner />
      <Philosophy />
      <Price />
      <Sales />
      <Gallery />
      <Contacts/>
      <Footer />
    </main>
  );
}
