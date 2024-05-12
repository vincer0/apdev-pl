/**
 * In case someone come here,
 * yes I am using TODOs to organise this project
 * 1. because why not
 * 2. TODO tree extension for vs code works nice
 */

// TODO return types of components
// TODO consider rafce components

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
