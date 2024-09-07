import Head from "next/head";
import React, { FC } from "react";

interface MetaProps {
    title: string;
    keywords: string;
    description: string;
}

const Meta: FC<MetaProps> = ({title, keywords, description}) => {
    return (
        <Head>
            <title>Flate | {title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:type" content="website" />
            <meta name="og:title" property="og:title" content={title} />
            <meta
                name="og:description"
                property="og:description"
                content={description}
            />
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/favicon.ico" />
        </Head>
    );
}

export default Meta;
