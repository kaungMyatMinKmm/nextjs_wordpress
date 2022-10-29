import { isArray } from "@apollo/client/cache/inmemory/helpers";
import { sanitize } from "../../../utilis/misc";
import Link from "next/link";
import { empty } from "@apollo/client";
import { getIconComponentByName } from "../../../utilis/icons-map";

const Footer = ({ footer, footerMenus }) => {
    // console.warn('footer', footer)
    return (
        <footer className="bg-gray-800 p-6">
            <div className="flex flex-wrap -mx-1 overflow-hidden text-white">
                {/* Widget One */}
                <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarOne) }} />
                </div>
                {/* Widget Two */}
                <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    <div dangerouslySetInnerHTML={{ __html: sanitize(footer?.sidebarTwo) }} />
                </div>
                {/* Footer Menus */}
                <div className="my-1 px-1 w-full overflow-hidden sm:w-full lg:w-1/2 xl:w-1/3">
                    {!footerMenus.length == 0 && isArray(footerMenus) ? (
                        <ul>
                            {footerMenus.map(footerMenu => (
                                <li key={footerMenu?.node?.id}>
                                    <Link href={footerMenu?.node?.path} >
                                        <a>
                                            {footerMenu?.node?.label}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>
            {/* Copyright Text */}
            <div className="mb-8 mt-8 w-full flex flex-wrap">
                <div className="w-full md:w-1/2 lg:w-1/4 text-white">
                    <span>{footer?.copyrightText}</span>
                </div>
                <div className="w-full lg:w-3/4 flex sm:justify-end mt-4 text-white">
                    {!footer?.socialLinks.length == 0 && isArray(footer?.socialLinks) ? (
                        <ul>
                            {footer.socialLinks.map(socialLink => (
                                <li key={socialLink?.iconName} className="ml-2 w-4">
                                    <a href={socialLink?.iconUrl}>
                                        {getIconComponentByName(socialLink?.iconName)}
                                    </a>
                                </li>
                            ))}
                        </ul>

                    ) : null}
                </div>
            </div>
        </footer >
    );
}

export default Footer;