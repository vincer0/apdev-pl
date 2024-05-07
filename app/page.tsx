import {
  Header,
  Main,
  HeroSection,
  SideMenu,
  AboutMe,
  ExpEdu,
} from "../components";
export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <AboutMe />
        <ExpEdu />
      </Main>
      <SideMenu />
    </>
  );
}
