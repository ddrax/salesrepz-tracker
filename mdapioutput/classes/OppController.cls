public with sharing class OppController {
    
    @AuraEnabled
    public static List<Opportunity> findAll()
    {
        return [SELECT Id, name FROM Opportunity LIMIT 50];
    }

    @AuraEnabled
    public static List<Opportunity> findClosedWonOppsByRepName(String repName)
    {
        System.debug('In function...');
        System.debug('rep' + repName);

        List<Opportunity>allOpps = [SELECT Id,Name,Sales_Rep__c,CompanyLogo__c,StageName,Amount FROM Opportunity WHERE Sales_Rep__c = : repName];

        System.debug(allOpps);

        return allOpps;
    }


}
