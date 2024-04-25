import { Header, Main, HeroSection, SideMenu } from "../components";
export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <HeroSection />
        <div id="about-me">About Me</div>
      </Main>
      <SideMenu />
    </>
  );
}
