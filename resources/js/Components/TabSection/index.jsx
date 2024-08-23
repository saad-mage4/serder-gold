import "./TabsSection.scss";
import { useState } from "react";
import { Link } from "@inertiajs/react";
import { RealTimePrice, GoldData } from "../Gold";
import TabFooter from "./TabFooter";
import { useThemeTab } from "@/context/ThemeTabContext";
const TabsSection = () => {
    const { activeTab, handleTab } = useThemeTab();

    const getClassNames = (tabName) => `tab-link ${activeTab === tabName ? "active" : ""}`;

    const tabs = [
        { name: "Ana sayfa", id: "tab1" },
        { name: "Altin fiyatlari", id: "tab2" },
        { name: "Altin cevirici", id: "tab3" },
        { name: "Haberler", id: "tab4" },
        { name: "Doviz", id: "tab5" },
        { name: "Uzman yorumlari", id: "tab6" },
        { name: "Community", id: "tab7" },
    ];

    const tabComponents = {
        tab1: <GoldData />,
        tab2: <RealTimePrice />,
        tab3: "",
        tab4: "",
        tab5: "",
        tab6: "",
        tab7: "",
    };

    return (
        <>
            <div className="py-5 tabs-wrapper bg-custom-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="gap-5 pb-2 tabs-links d-flex">
                                {tabs?.map((tab) => (
                                    <a
                                        key={tab?.id}
                                        onClick={handleTab(tab?.id)}
                                        className={getClassNames(tab?.id)}
                                    >
                                        {tab?.name}
                                    </a>
                                ))}
                                <Link href="/showarticles">Articles</Link>
                            </div>
                        </div>
                    </div>

                    {/* show the content  */}
                    <div className="mt-4 row stock-tabs">
                        {tabComponents[activeTab]}
                    </div>
                    <TabFooter />
                </div>
            </div>
        </>
    );
};

export default TabsSection;
