exports.config = {
    directConnect: true,
    capabilities: {
      'browserName': 'chrome',
	  //'shardTestFiles': true,
      //'maxInstances': 2
    },
  
    framework: 'jasmine',
    specs: [
       //
       
      // 'C://Users//gayboya//Projects//Protractor//ProtractorConcepts//Tests//ElementAll.js',
        'C://Users//gayboya//Projects//Protractor//ProtractorConcepts//Tests//windowHandling.js'
    ],

    jasmineNodeOpts: {
     // defaultTimeoutInterval: 30000
    }
};
