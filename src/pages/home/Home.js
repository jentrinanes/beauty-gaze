import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
// eslint-disable-next-line no-lone-blocks
{/*import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderEight from "../../wrappers/hero-slider/HeroSliderEight";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import BannerNine from "../../wrappers/banner/BannerNine";
import TabProductFive from "../../wrappers/product/TabProductFive";*/}

const Home = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Beauty Gaze | Home</title>
                <meta name="description" content="Shop for the latest and hottest K-Beauty brands!"></meta>
            </MetaTags>
            <LayoutOne headerContainerClass="container-fluid" headerPaddingClass="header-padding-2">
                {/*<HeroSliderEight />
                <TabProductFive spaceTopClass="pt-95" spaceBottomClass="pb-70" category="cosmetics" />
                <FeatureIconThree spaceBottomClass="pb-70" featureShapeClass="support-shape-3" />
                <TestimonialOne spaceBottomClass="pb-95" />
                <BannerNine spaceBottomClass="pb-70" />
                <BrandLogoSliderOne spaceBottomClass="pb-95" />
                <BlogFeatured spaceBottomClass="pb-55" />*/}
            </LayoutOne>
        </Fragment>
    );
};

export default Home;