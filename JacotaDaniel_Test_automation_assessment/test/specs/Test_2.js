const test_2_locators = require('../pageobjects/test_2_locators')

//Test 2: Verify that the results and details page match the extra filters
describe('Test 2: Verify that the results and details page match the extra filters',async function()
{
//i used this function(this.retiess) in order to retry the test in case it is failed (due to enviroment issue, etc)
this.retries(1)

    it('Click more filters',async()=>
    {

    //wait for page to loading
    await test_2_locators.stays.isDisplayed()
    
    //Click More filters
    await test_2_locators.morefilters.click()
    //await test_2_locators.waitfilter.waitForExist()
    await browser.pause(500)
    

    //Select the number of bedrooms as 5.
    await test_2_locators.bedrooms.scrollIntoView()
    await expect(await test_2_locators.roomscat).toHaveTextContaining("beds")
    await test_2_locators.bedroom.click()

    
    //Select Pool from the Facilities section.
    await test_2_locators.facilities.scrollIntoView()
    await test_2_locators.facilities_showmore.click()
    await test_2_locators.facilities_pool.click()
    
    //Click Show Stays
    await test_2_locators.facilities_stays.click()

    //check if filter is applied
    await expect(await test_2_locators.filter_check).toHaveText("2")
    
    })
 
    it('bedrooms check', async()=>
    {
        //await browser.url("https://www.airbnb.com/s/Rome--Italy/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&query=Metropolitan%20City%20of%20Rome%2C%20Italy&place_id=ChIJw0rXGxGKJRMRAIE4sppPCQM&date_picker_type=calendar&checkin=2022-05-20&checkout=2022-05-27&adults=2&children=1&source=structured_search_input_header&search_type=filter_change&min_bedrooms=5&amenities%5B%5D=7")
        //await browser.maximizeWindow()
    await browser.pause(2000)
    const bedrooms = await test_2_locators.bedrooms_no
    //read the "bedrooms" tag from the accomodations
    const bedroomcheck = (await Promise.all(await bedrooms.map(async (deb)=> (await deb.getText()))))

    //for every tag found, split the string, to get the number
    for(let i=0; i < bedroomcheck.length; i++)
    {
        const a= await bedroomcheck[i].split(" ")[0]
        const b = parseInt(a)
        const c = expect(b).toBeGreaterThanOrEqual(5)

    }


        
    })

    it('first property check', async()=>
    {
       //Open the details of the first property.

    await test_2_locators.first_propertyToCheck.click()
    const handles = await browser.getWindowHandles()// 2 windows

        //all the below actions are made in second window
        await browser.switchToWindow(handles[1])
        await test_2_locators.first_property_check.isDisplayed()
        await test_2_locators.first_scrollto.scrollIntoView()
        //click on show more facilities
        await test_2_locators.firstprop_facilities.click()

        //scroll to Facilities category
        await test_2_locators.firstprop_scrollto_facilities.scrollIntoView()

        //check if the 'Pool' option is displayer
        await test_2_locators.firstprop_check_pool.isDisplayed()

         //return to previous window
         browser.switchWindow("airbnb.com")
         browser.closeWindow()
    
    })

})


