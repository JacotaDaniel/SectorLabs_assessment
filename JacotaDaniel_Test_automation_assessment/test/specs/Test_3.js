const test_3_locators = require('../pageobjects/test_3_locators')

//Test 3: Verify that a property is displayed on the map correctly

describe('Test 3: Verify that a property is displayed on the map correctly',async function()
{
//i used this function(this.retiess) in order to retry the test in case it is failed (due to enviroment issue, etc)
this.retries(1)

    it('Hover and check the property', async()=>
    {
      
        //extract the current pricing text field of the first accomodation
        await browser.refresh()
        await $("div[aria-label='Map']").waitForDisplayed()

        //property price
		const thePrice = await test_3_locators.property_price.getText()
        const finalPrice = await thePrice.split("\n")
        await console.log(finalPrice[1])

        //CSS: get the corresponding element on map; to check when highlighted
	    const elem = await test_3_locators.elem_not_highlighted
	    elem.waitForDisplayed({ timeout: 10000 })

        //element not highlighted
        const property_check = await test_3_locators.elem_not_highlighted.getCSSProperty('background-color')
        console.log(property_check)

        //check if the element is not highlighted
        expect(await property_check).toHaveTextContaining("rgba(255,255,255,1)")

        //CSS: mouse hover over the first accomodation
        await test_3_locators.property_mouse_location.moveTo()
        browser.pause(2000)

        //check if the element IS ighlighted
        expect(await property_check).toHaveTextContaining("rgba(34,34,34,1)")

        //click highlighted elem on map
        const elementOnMap = await test_3_locators.click_on_map(finalPrice[1].trim())
        await elementOnMap.click()

        //Verify that the details shown in the map popup are the same as the ones shown in the search results.
        //title 
        await test_3_locators.validation_final(test_3_locators.property_check_title,test_3_locators.property_check_title_map)

        //rating -> after update these information are not available
        await test_3_locators.validation_final(test_3_locators.property_check_rating,test_3_locators.property_check_rating_map) 

    })

})