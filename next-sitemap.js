const siteUrl = 'https://aadmirals.com/';
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  additionalPaths: () => {
    let result = []
    result.push({ loc: '/cities/houston-limo-car-service' })
    result.push({ loc: '/cities/galveston-limo-car-service' })
    result.push({ loc: '/cities/montgomery-limo-car-service' })
    result.push({ loc: '/cities/conroe-limo-car-service' })
    result.push({ loc: '/cities/tomball-limo-car-service' })
    result.push({ loc: '/cities/cypress-limo-car-service' })
    result.push({ loc: '/cities/beaumont-limo-car-service' })
    result.push({ loc: '/cities/sugarland-limo-car-service' })
    result.push({ loc: '/cities/richmond-limo-car-service' })
    result.push({ loc: '/cities/katy-limo-car-service' })
    result.push({ loc: 'cities/spring-limo-car-service' })
    result.push({ loc: '/cities/fulshear-limo-car-service' })
    result.push({ loc: '/blog/Hiring-a-Corporate-Limo-in-Houston' })
    result.push({ loc: '/blog/houston-airport-transportation-service' })
    result.push({ loc: '/blog/fulshear-car-service' })
    result.push({ loc: '/blog/limo-service-montgomery' })
    result.push({ loc: '/blog/cypress-limousine-service-texas' })
    result.push({ loc: '/blog/tomball-limo-service-provider' })
    result.push({ loc: '/blog/spring-limousine-service-texas' })
    result.push({ loc: '/blog/premier-galveston-cruise-transfer-service' })
    result.push({ loc: '/blog/car-to-airport-houston-why-aadmirals-is-the-best' })
    result.push({ loc: '/blog/what-you-need-to-know-when-planning-a-houston-limousine' })
    result.push({ loc: '/blog/top-reason-rent-limousine-rather-take-taxi-houston' })
    result.push({ loc: '/blog/reasons-to-hire-limo-services-for-airport-transportation' })
    result.push({ loc: '/blog/hire-a-professional-limo-service-in-houston' })
    result.push({ loc: '/blog/limo-rentals-houston-compare-limousine-services-in-houston' })
    result.push({ loc: '/blog/houston-limo-service-a-quick-and-easy-way-to-add-luxury-to-your-trip' })
    result.push({ loc: '/blog/experience-the-luxury-of-transportation-in-houston-with-our-immediate-limo-services' })
    result.push({ loc: '/blog/luxury-transportation-for-ceraWeek-why-aadmirals-limo-service-is-the-perfect-choice' })
    result.push({ loc: '/blog/Houston-to-Austin-Car-Service' })
    result.push({ loc: '/blog/convenient-shuttle-service-from-george-bush-airport-to-houston-with-aadmirals-travel-and-transportation' })

    return result
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*' }
    ],

  },
  productionBrowserSourceMaps: false,
  optimization: {
    minifyJs: true,
  },
}