import "./seo.css"
import "../../../../../App.css"
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ParallaxComponent from "../../../../parrelxeffect omc/parrelxeffect";
const SearchEngine = () => {

    const seoData = [
        {
            title: " Technical SEO ",
            para: "Making sure your website is technically sound is one of the cornerstones of SEO. It’s important to assess the website to identify any issues that might be preventing the search engines from crawling or indexing your pages, as this will stop them from reaching their full ranking potential.",
            para1: "Our technical SEO specialists carry out more than 200 different checks to ensure websites are performing at their best through regular extensive auditing. Alongside this, we regularly check and amend all points in line with the latest industry standards. They’ll look at everything from your website’s load speed to its schema mark-up, hreflang tags, and internal linking structure. They will also review its accessibility in line with current best practices.",
            button: "read more"
        },
        {
            title: " On-Page SEO & Content ",
            para: "Our tailored on-page strategies integrate both onsite and offsite activity. They are carefully crafted to position your business as an industry expert, helping to establish both digital and brand authority. ",
            para1: "Sharing engaging, informative content won’t just establish you as experts in your field, or help you answer your customers’ burning questions. Publishing expertly crafted, SEO-friendly content will also boost your organic rankings. ",
            para2: "Our team develops a watertight on-page comprehensive content strategy that delivers value to your audience and Google’s algorithm. We start by putting together a content plan that improves the indexability of your existing product or service pages, your blogs, and the resources within your knowledge hubs – and suggests new topics and ideas that can be incorporated into your content calendar moving forward. From there, we identify and enrich target keyword areas, optimise your content to match what’s being served up by the search engines and improve internal linking to encourage faster and more frequent crawls.",
            button: "read more"
        },
        {
            title: " Link Building & Digital PR",
            para: "We take an SEO-first approach to digital PR, which involves creating content for publications across media outlets and other online platforms with high Domain Authority (DA) scores. This ensures that you’re getting maximum SEO value from your PR placements with backlinks from popular and verified sources. ",
            para1: "From scouring your competitors’ link profiles to find new target domains, to monitoring the performance and visibility of these high authority links once we’ve acquired them, we leave no stone unturned to ensure your link building strategy delivers improved media coverage and contributes to better organic rankings across the board.  ",
            para2: " We don’t include spammy or black-hat techniques in our approach. We focus on creating well-researched, expertly written PR content that publishers will love to share with their readers and finding links from relevant industry websites that will naturally want to be associated with your business.  ",
            button: "read more"
        },
        {
            title: " Local SEO ",
            para: "Our local SEO strategies are designed to raise awareness of your business within your local area (or targeted towns, counties, or countries). Our tailored approach includes setting up and optimising your Google My Business profile; completing business listings on quality directories, and reporting back on your organic results so you can see how your rankings are progressing within specific geographic regions.",
            button: "read more"
        },
        {
            title: " Conversion Rate Optimisation (CRO)",
            para: "Have you looked at how your users are interacting with your website? If not, you’re missing out on a golden opportunity to use real-world data to optimise your platform further.",
            para1: "Using various website tracking tools – including heatmaps, clickmaps and scrollmaps – and combining this data with information from your Google Analytics account, we create a report packed full of recommendations and mock-ups that will help you increase engagement, improve bounce rates, and convert more of your traffic into paying customers.",
            button: "read more"
        },
    ]


    const itemVariants = {
        hidden: { y: 200, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    const [refwebsite1, inViewwebsite1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const [refwebsite2, inViewwebsite2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [refwebsite6, inViewwebsite6] = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    const [refwebsite7, inViewwebsite7] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });


    const controls = useAnimation();

    useEffect(() => {
        if (inViewwebsite7) {
            controls.start("visible");
        }
    }, [inViewwebsite7, controls]);
    return <>
        <section className="seo-background">
            <div className="section-website-solution seoimg">
                <div className="content-container-display" >
                </div>
            </div>

        </section>
        <section className="seo-main-container">
            <div className="seo-child-container">
                <div className="content-seo-main-section-one">
                    <div className="content-seo-one">
                        <motion.div
                            ref={refwebsite6}
                            initial="hidden"
                            animate={inViewwebsite6 ? "visible" : "hidden"}
                            variants={itemVariants}
                            // transition={{ duration: 0.3, ease: "linear" }}
                        >

                            <h2 className="title-seo-headind heading-all-component-font-style heading-all-component-font-style">
                                Commercial-First SEO Agency
                            </h2>
                            <div className="just-content-para-seo">
                                <p className="para-seo-content paragrapg-all-component-font-family">
                                    Our SEO team specialises in developing custom-fit
                                    SEO campaigns that integrate with your core business
                                    and marketing objectives.</p>
                                <p className="para-seo-content paragrapg-all-component-font-family">
                                    Our recipe for success is supported by our tried-and-tested
                                    marketing framework, which leverages data to inform our
                                    campaigns and direct our creatives. Based on a review of
                                    your existing data and campaign pain points, we run an
                                    analysis to identify your customer journey and curate a
                                    plan of action that will achieve tangible, long-term
                                    improvements in positions.</p>
                                <p className="para-seo-content paragrapg-all-component-font-family">
                                    Our approach also ensures all your materials are optimised for
                                    people , not just search bots – something that is becoming
                                    increasingly important as Google tightens its focus on websites
                                    that deliver exceptional user experiences. </p>
                                <p className="para-seo-content paragrapg-all-component-font-family">
                                    We use some or all the following tactics to increase your organic visibility: </p>
                            </div>
                        </motion.div>
                    </div>
                    <div className="content-seo-two">
                        <motion.div
                            ref={refwebsite6}
                            initial="hidden"
                            animate={inViewwebsite6 ? "visible" : "hidden"}
                            variants={itemVariants}

                        >

                            <div className="child-seo-paragrapg">
                                <p className="para-seo-content-p paragrapg-all-component-font-family">
                                    We offer a best-in-class service which encompasses a holistic approach
                                    to SEO including a proprietary tool suite, a commercial first focus, a
                                    market-leading technical SEO offering, fresh approaches to content execution
                                    and an industry leading authority building technique to ensure we are
                                    providing maximum value to businesses wanting to achieve organic growth online.</p>
                            </div>
                            <div className="btn-seo">
                                <Link to="/contact-us">  <button className="btn-seo-contact-us heading-all-component-font-style">contact us</button></Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container-content-card-seo">
                <div className="child-content-main-title-seo">
                    <div className="title-seo-head">
                        <h2 className="how-we-work-title heading-all-component-font-style">How We Work</h2>
                    </div>
                </div>

                <motion.div
                    ref={refwebsite7}
                    initial="hidden"
                    animate={controls}
                    variants={itemVariants}
                    transition={{ staggerChildren: 0.2 }}
                >
                    {seoData?.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`card-seo-big-card-content-container ${index % 2 === 0 ? "left-card" : "right-card"
                                }`}
                            variants={itemVariants}
                        >
                            <div className="card-search-seo">
                                <h2 className="title-headin heading-all-component-font-style">{item.title}</h2>
                                <div className="para-car-content-p-element">
                                    <p className="p-seo-content paragrapg-all-component-font-family" >{item.para}</p>
                                    <p className="p-seo-content paragrapg-all-component-font-family">{item.para1}</p>
                                    <p className="p-seo-content paragrapg-all-component-font-family">{item.para2}</p>
                                    <div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                <div className="casestudy-seo-main-section-container">
                    <div className="child-content-main-title-seo">
                        <div className="title-seo-head">
                            <h2 className="how-we-work-title heading-all-component-font-style">Case Study</h2>
                        </div>
                    </div>
                    <div className="seo-casestudycontainer mx-auto md:px-6">
                        <section className=" casestudy-seo mb-32 text-center md:text-left">

                            <div className=" casestudy-seo grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                <motion.div
                                    ref={refwebsite1}
                                    initial="hidden"
                                    animate={inViewwebsite1 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                >
                                    <div className=" md:mb-0">
                                        <div
                                            className="casestudy-seo relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                            data-te-ripple-init=""
                                            data-te-ripple-color="light"
                                        >
                                            <img
                                                src="/assets/backgroundimg/backgroung/tiktok.jpg"
                                                className="casestudy-seo-img w-full"
                                                alt="Louvre"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    ref={refwebsite1}
                                    initial="hidden"
                                    animate={inViewwebsite1 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                >
                                    <div>
                                        <p className="tiktok-para-cs text-neutral-500 dark:text-neutral-300 paragrapg-all-component-font-family">
                                            TikTok have experienced exponential growth since its
                                            launch and we needed a partner who could help us extend
                                            this momentum into the European markets.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="Tktok-content">
                                <div className="tiktok-heading">
                                    <h2 className="title-tiktok heading-all-component-font-style">Tiktok</h2>
                                </div>
                            </div>
                            <div className=" grid items-center gap-x-6 md:grid-cols-2 xl:gap-x-12">
                                <div className="mb-6 md:order-2 md:mb-0">
                                    <motion.div
                                        ref={refwebsite2}
                                        initial="hidden"
                                        animate={inViewwebsite2 ? "visible" : "hidden"}
                                        variants={itemVariants}
                                    >
                                        <div
                                            className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
                                            data-te-ripple-init=""
                                            data-te-ripple-color="light"
                                        >
                                            <img
                                                src="/assets/backgroundimg/backgroung/tick.jpg"
                                                className="casestudy-seo-img w-full"
                                                alt="Louvre"
                                                loading="lazy"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                                <motion.div
                                    ref={refwebsite2}
                                    initial="hidden"
                                    animate={inViewwebsite2 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                >
                                    <div className="md:order-1">
                                        <h2 className="10xincrease-title heading-all-component-font-style">10x Increase</h2>
                                        <p className="tiktok-para-cs text-neutral-500 dark:text-neutral-300 paragrapg-all-component-font-family ">
                                            Our Search Engine Marketing strategy delivered a 10x
                                            increase in keywords ranked in the top 10 searches on
                                            Google and doubled organic traffic.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </section>
                    </div>
                </div>
                <ParallaxComponent />
            </div>
        </section>


    </>
}

export default  SearchEngine ;