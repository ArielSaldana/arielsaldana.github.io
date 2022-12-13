import {SmoothScrollProvider} from "../contexts/SmoothScroll";
import Home from "./Home.page";
export default function IndexPage() {
    return (
        <SmoothScrollProvider options={{ smooth: true }}>
            <Home />
        </SmoothScrollProvider>
    )
}
