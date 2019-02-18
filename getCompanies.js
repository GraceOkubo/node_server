const getCompanies = async () => {
    const html = await rp(baseURL + searchURL);
    const businessMap = cheerio('a.business-name', html).map(async (i, e) =>{
        const link = await rp(link);
        const emailAddress = emailAddress ? emailAddress.replace('mailto:', '') : '';
        const name = e.children[0].data || cheerio('h1', innerHTML).text();
        const phone = cheerio('p.phone', innerHTML).text();

        return {
            emailAddress,
            link,
            name,
            phone,
        }
    }).get();
    return Promise.all(businessMap);
}

getCompanies()
    .then(result => {
        const transformed = new otcsv(result);
        return transformed.toDisk('./output.csv')
    })
    .then(() => console.log('SUCCESSFULLY COMPLETED THE WEB SCRAPING SAMPLE'));