const test_1_locators = require('../pageobjects/test_1_locators')
const fetch = require('string')
const should = require('chai/lib/chai/interface/should')
const guests_req = 3

describe('Test 1: Verify that the results match the search criteria',async function()

{
//i used this function(this.retiess) in order to retry the test in case it is failed (due to enviroment issue, etc)
this.retries(1)

    it('Open AirBnB', async function() 
    {
    
    //open Airbnb 
    await browser.url("https://www.airbnb.com/")
    
   
        //if the popup appears, click to exit
         if (await test_1_locators.popup.isDisplayed())
            {
            await test_1_locators.popup_close.click()
            await console.log("Banner closed!")
            }

    await browser.maximizeWindow()

    //wait for page init
    await  test_1_locators.pageloading.isDisplayed()

    //check the title
    console.log(await browser.getTitle())
    await expect(browser).toHaveTitleContaining("Vacation Homes & Condo Rentals")
    
    })

    it('Select location(Rome)',async function()
    {     
     //i used this function in order to retry the test in case it is failed (due to enviroment issue, etc)
     this.retries(1)

    //Select anywhere
    await (test_1_locators.anywhere).click()
      //select Rome as a location
    await test_1_locators.setlocation.setValue("Rome, Italy")

    })

    it('Set the date',async ()=>
    {
         //i used this function in order to retry the test in case it is failed (due to enviroment issue, etc)
        this.retries(1)
        //Select the CheckIn period
        await test_1_locators.checkIN.click()
        
        //Pick a Check-In date one week after the current date.
        const dateIN = new Date()
        dateIN.setDate(dateIN.getDate())
        let checkin = dateIN.toISOString().slice(0, 10)
        await $("(//div[@class='_1258d0t'])[@data-testid='datepicker-day-"+ checkin +"']").click()

        //Pick a Check-Out date one week after the Check-In date.
        const dateOUT = new Date()
        dateOUT.setDate(dateOUT.getDate() + 7)
        let checkout = dateOUT.toISOString().slice(0, 10)
        await $("(//div[@class='_1258d0t'])[@data-testid='datepicker-day-"+ checkout +"']").click()

        
    })

    it('Set the guests',async ()=>
    {
         
        //Select the number of guests as 2 adults and 1 child.
        await test_1_locators.guests.click()
        await test_1_locators.adultselect.doubleClick()
        await test_1_locators.childselect.click()

        //click on search button
        await test_1_locators.searchbtn.click()
        await test_1_locators.vernewpage.isDisplayed()

        //Verify that the applied filters are correct
        await expect(test_1_locators.verlocation).toHaveTextContaining("Rome")
        await expect(test_1_locators.verdate).toBePresent()
        await expect(test_1_locators.verguests).toHaveTextContaining("3 guests")

    })

    //I have created this test before the website changes (now is obsolete)
    xit('Guests number validation',async()=>
    {
     
    //Search for element with partial text 
		var accomodations = $$('._kqh46o*=guests')
		
		accomodations.forEach(async function(unit) 
		{
			const g = unit.getText().split(' ')
			const guests = parseInt(g[0])
			await expect(guests).toBeGreaterThanOrEqual(guests_req)
		})

        
  
    })

    it('check properties if can accomodate at least my 3 people',async()=>
    {
      //function to check if the guests no >=3
      async function guests_validation (guests_no, guest_value)
          {

          //All the information, like people accomodation are in the opened location
         
          const handles = await browser.getWindowHandles()// 2 windows

          //all the below actions are made in second window
          await browser.switchToWindow(handles[1])
          await test_1_locators.first_property_check.waitForDisplayed()

          const guestNo = await guests_no.getText()
          const gno = guestNo.split(" ")
          const no = parseInt(gno)

          //check from property description if guest no is >= 3
          await expect(no).toBeGreaterThanOrEqual(guest_value)
          //return to previous window
          await browser.closeWindow()
          await browser.switchWindow("airbnb.com")
          

        }

      //all the properties from first page
      const p = await $$("(//div[@class='c12h3gv8  dir dir-ltr'])") 
   
      //checking for each property from the first page, if the guest no >= 3 using the function above
    for await (const variable of p) 
      {
      await variable.click()
      await guests_validation(test_1_locators.guests_number, guests_req)
    }

})
    
})

 
 
    


