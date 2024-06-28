import Nav from "@/components/Nav/Nav";

type PropsDefinition = {
    children: React.ReactNode;
  };

export default function Layout({ children }: PropsDefinition) {
    return (
        <>
            <Nav links={['Home', 'About', 'Contact']} />
            {children}
        </>
    )
}