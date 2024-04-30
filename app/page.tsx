import { Header, Main, HeroSection, SideMenu, AboutMe } from "../components";
export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <AboutMe />
      </Main>
      <SideMenu />
    </>
  );
}
