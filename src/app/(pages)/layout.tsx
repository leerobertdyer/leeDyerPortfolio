import Nav from "@/components/Nav/Nav";
import { ROUTES } from "@/utils/consts";


type PropsDefinition = {
    children: React.ReactNode;
  };

export default function Layout({ children }: PropsDefinition) {
    return (
        <>
            <Nav links={ROUTES} />
            {children}
        </>
    )
}