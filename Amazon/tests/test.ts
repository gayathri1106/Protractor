import { browser,element,by, ElementArrayFinder, promise } from "protractor";
import { util} from "../common/util";
import { PageObjects} from "../pageObjects/homePage";
describe('amazon',function(){

    it('price sort',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.amazon.in') 
    util.enterText(PageObjects.searchBox(),'alexa')
    util.clickOnElement(PageObjects.searchIcon())
    util.clickOnElement(PageObjects.sortBySelectBox())
    util.clickOnElement(PageObjects.sortByLowPriceToHigh())
    var prices :number[]=[];
    browser.sleep(3000)
    var  sampleElements= element.all(by.xpath('//div[@data-component-type="s-search-result"]//span[@class="a-price"]//span[@class="a-price-whole"]'))
    sampleElements.then(() => {
        sampleElements.getText().then((text) => {
      for(var i=0;i<text.length;i++){
          //console.log(text[i])
          var x=+text[i].split(',').join('')
          prices.push(x);
          
        
      }
      console.log(prices)
      var sortedPrices :number[]=[];
      sortedPrices=prices.sort((a,b)=>(a<b ? -1:1));
  
      console.log(sortedPrices)
      if(JSON.stringify(prices)===JSON.stringify(sortedPrices)){
          console.log('true')
       } else{
        console.log('false')
          }
    })
        }); 
        
     });  
  });



