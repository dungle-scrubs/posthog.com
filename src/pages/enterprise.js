import { CallToAction } from 'components/CallToAction/index.tsx'
import { SEO } from 'components/seo'
import React from 'react'
import Layout from 'components/Layout'
import { heading, section } from 'components/Home/classes'
import { SignupCTA } from 'components/SignupCTA'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { TrackedCTA } from 'components/CallToAction'

const heroTitle = 'PostHog for enterprise'

export default function Enterprise() {
    return (
        <Layout>
            <SEO
                title="PostHog for enterprise"
                description="The same great product - just with all the awards."
                image={`/images/enterprise.png`}
            />
            <div className={section('z-10 relative md:!mb-8')}>
                <h1 className={`${heading()} overflow-hidden pb-1 home-hero-title`}>
                    {heroTitle.split(' ').map((word, index) => (
                        <span
                            key={word}
                            className={`${index > 1 ? 'text-red dark:text-yellow' : ''} ml-4 first:ml-0 inline-block`}
                        >
                            {word}
                        </span>
                    ))}
                </h1>
                <h2 className={`mt-2 mb-6 text-xl font-semibold text-center home-hero-subtitle`}>
                    The same great product - <span className="text-red dark:text-yellow">just with all the awards</span>
                </h2>
                <div className="flex justify-center items-center gap-2 home-hero-cta mb-16">
                    <SignupCTA />
                    <TrackedCTA event={{ name: `clicked Get a demo` }} href="/book-a-demo" type="secondary" size="lg">
                        Get a demo
                    </TrackedCTA>
                </div>

                <section className="flex flex-wrap justify-center gap-4 mb-8">
                    <img
                        src="/images/g2/ABTesting_HighPerformer_EMEA_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ABTesting_HighPerformer_Europe_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/ABTesting_HighPerformer_HighPerformer.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/ABTesting_HighPerformer_Small-Business_Americas_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ABTesting_HighPerformer_Small-Business_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/ABTesting_Leader_Americas_Leader.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/ABTesting_Leader_Small-Business_EMEA_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ABTesting_Leader_Small-Business_Europe_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ABTesting_MostImplementable_Small-Business_Total.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/ABTesting_MostImplementable_Total.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Americas_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Canada_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_EMEA_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Europe_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_LatinAmerica_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Mid-Market_Americas_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Small-Business_Americas_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Small-Business_Asia_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Small-Business_AsiaPacific_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Small-Business_Canada_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Small-Business_EMEA_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Small-Business_Europe_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Small-Business_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_Small-Business_UnitedKingdom_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/DigitalAnalytics_HighPerformer_UnitedKingdom_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/DigitalAnalytics_MomentumLeader_Leader.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/DigitalAnalytics_MostImplementable_Small-Business_Total.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/FeatureManagement_FastestImplementation_GoLiveTime.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/FeatureManagement_HighPerformer_Americas_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/FeatureManagement_HighPerformer_AsiaPacific_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/FeatureManagement_HighPerformer_EMEA_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/FeatureManagement_HighPerformer_Europe_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/FeatureManagement_HighPerformer_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/FeatureManagement_HighPerformer_Mid-Market_Americas_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/FeatureManagement_MostImplementable_Total.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/MobileAnalytics_HighPerformer_Small-Business_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/MobileAnalytics_Leader_Leader.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/MobileAppAnalytics_HighPerformer_Asia_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/MobileAppAnalytics_HighPerformer_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/MobileAppAnalytics_HighPerformer_Small-Business_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Americas_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Australia_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Mid-Market_EMEA_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Mid-Market_Europe_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Mid-Market_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Small-Business_Asia_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Small-Business_India_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Small-Business_LatinAmerica_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_Small-Business_UnitedKingdom_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_HighPerformer_UnitedKingdom_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/ProductAnalytics_Leader_Asia_Leader.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/ProductAnalytics_Leader_AsiaPacific_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/ProductAnalytics_Leader_EMEA_Leader.svg" width={94} height={106} alt="" />
                    <img src="/images/g2/ProductAnalytics_Leader_Europe_Leader.svg" width={94} height={106} alt="" />
                    <img src="/images/g2/ProductAnalytics_Leader_India_Leader.svg" width={94} height={106} alt="" />
                    <img src="/images/g2/ProductAnalytics_Leader_Leader.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/ProductAnalytics_Leader_Small-Business_Americas_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_Leader_Small-Business_AsiaPacific_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_Leader_Small-Business_EMEA_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_Leader_Small-Business_Europe_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/ProductAnalytics_Leader_Small-Business_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/ProductAnalytics_MomentumLeader_Leader.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/ProductAnalytics_MostImplementable_Small-Business_Total.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/ProductAnalytics_MostImplementable_Total.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/SessionReplay_HighPerformer_Mid-Market_AsiaPacific_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/SessionReplay_HighPerformer_Mid-Market_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/SessionReplay_HighPerformer_Small-Business_Americas_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/SessionReplay_HighPerformer_Small-Business_Asia_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/SessionReplay_HighPerformer_Small-Business_AsiaPacific_HighPerformer.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/SessionReplay_Leader_Asia_Leader.svg" width={94} height={106} alt="" />
                    <img src="/images/g2/SessionReplay_Leader_AsiaPacific_Leader.svg" width={94} height={106} alt="" />
                    <img src="/images/g2/SessionReplay_Leader_EMEA_Leader.svg" width={94} height={106} alt="" />
                    <img src="/images/g2/SessionReplay_Leader_Europe_Leader.svg" width={94} height={106} alt="" />
                    <img src="/images/g2/SessionReplay_Leader_India_Leader.svg" width={94} height={106} alt="" />
                    <img src="/images/g2/SessionReplay_Leader_Leader.svg" width={94} height={106} alt="" />
                    <img
                        src="/images/g2/SessionReplay_Leader_Small-Business_EMEA_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/SessionReplay_Leader_Small-Business_Europe_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img
                        src="/images/g2/SessionReplay_Leader_Small-Business_Leader.svg"
                        width={94}
                        height={106}
                        alt=""
                    />
                    <img src="/images/g2/SessionReplay_MomentumLeader_Leader.svg" width={94} height={106} alt="" />
                </section>

                <section className="text-center mb-24">
                    <h3>Still not convinced?</h3>

                    <TrackedCTA event={{ name: `clicked Get a demo` }} href="/book-a-demo" type="secondary" size="lg">
                        Talk to sales
                    </TrackedCTA>
                </section>
            </div>
        </Layout>
    )
}
