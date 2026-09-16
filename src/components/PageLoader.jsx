import { useEffect, useState } from "react";
import "./PageLoader.css";

function PageLoader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3300);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div className="page-loader">

            <div className="loader-progress">
                <div className="loader-progress-bar"></div>
            </div>

            <div className="loader-curtain"></div>
            <div className="loader-curtain"></div>
            <div className="loader-curtain"></div>
            <div className="loader-curtain"></div>
            <div className="loader-curtain"></div>

        </div>
    );
}

export default PageLoader;