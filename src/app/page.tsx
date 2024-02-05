import ScrollArea from "@/components/scroll-area";
import FloatingHeader from "@/components/floating-header";
import PageTitle from "@/components/page-title";

export default function Home() {
  return (
    <ScrollArea className="flex flex-col" hasScrollTitle>
      <FloatingHeader />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Home" className="lg:hidden" />
          <p>
            Hi, I am Pansen. I have been a frontend developer for 6 years.
            Currently, I am on the way to be a fullstack developer.
          </p>
        </div>
      </div>
    </ScrollArea>
  );
}
