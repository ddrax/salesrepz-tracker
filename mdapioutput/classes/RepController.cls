public with sharing class RepController {
   
       @AuraEnabled
    public static List<SalesReps__c> findAll()
    {
        return [SELECT Id, name, ProfilePic__c FROM SalesReps__c LIMIT 50];
    }

      @AuraEnabled
    public static List<SalesReps__c> findRepsByName(String searchKey)
    {
    System.debug('search log' + searchKey);
    String searchInput = '%' + searchKey +'%';
        return [SELECT Id, name, ProfilePic__c FROM SalesReps__c WHERE name LIKE : searchInput LIMIT 50]; 
    }
    
}
