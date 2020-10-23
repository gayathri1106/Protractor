import { element,browser,by, ElementFinder } from "protractor";

export class util{



    static clickOnElement(element:ElementFinder ) {
        element.click();
    }
    
   static enterText(element:ElementFinder  , text:string ){
    element.sendKeys(text);
    }
   



}