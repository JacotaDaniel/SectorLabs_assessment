class SecondTest
{
    //wait for page to loading
    get stays()
    {
        return $("(//div[@class='_fycombu'])[1]")
    }

    //Click More filters
    get waitfilter()
    {
        return $("body > div:nth-child(44) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)")
    }

    get morefilters()
    {
        return $("//button[@aria-label='Filters']")
    }

    //Select the number of bedrooms as 5.
    get roomscat()
    {
        return $("(//h2[normalize-space()='Rooms and beds'])[1]")
    }
   
    get bedrooms()
    {
        return $("div[aria-label='Bedrooms'] div legend[class='_173jxq']")
    }

    get bedroom()
    {
        return $("(//div[@id='menuItemButton-5'])[1]")
    }
    //Select Pool from the Facilities section.

    get facilities()
    {
        return $("(//h2[normalize-space()='Amenities'])[1]")
    }

    get facilities_showmore()
    {
        return $("(//span[@class='_jro6t0'][normalize-space()='Show more'])[2]")
    }

    get features_label()
    {
        return $("#filterItem--checkbox-amenities-7-row-checkbox")
    }

    get facilities_pool()
    {
        return $("//input[@name='Pool']")
    }

    get facilities_stays()
    {
        return $("._1ku51f04")
    }

    get filter_check()
    {
        return $(".n13e4ez0.dir.dir-ltr")
    }

    //Bedrooms checks

    get bedrooms_no()
    {
        return $$("//span[contains(text(),'bedrooms')]")
        
    }




    //Open the details of the first property.
    get first_property()
    {
        return $("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > picture:nth-child(1) > img:nth-child(5)")
    }

    get first_propertyToCheck()
    {
        return $("body > div:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > main:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > picture:nth-child(1) > img:nth-child(5)")
    }

    get first_property_check()
    {
        return $("div[class='_c7v1se'] div span[class='_tyxjp1']")
    }

    get first_scrollto()
    {
        return $("(//div[@class='_1byskwn'])[1]")
    }

    get firstprop_scrollto_facilities()
    {
        return $("(//div[@class='_ak5d0on'])[12]")
    }

    get firstprop_facilities()
    {
        return $("div[class='b6xigss dir dir-ltr'] button[type='button']")
    }

    get firstprop_check_pool()
    {
        return $("//div[@id='pdp_v3_parking_facilities_7_43307157-0-row-title']")
    }
   
}


module.exports = new SecondTest()